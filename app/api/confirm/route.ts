import { connectDB } from "@lib/mongodb";
import Confirm from "@models/confirm";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import * as yup from "yup";

// Definir esquema de validación
const confirmSchema = yup.object().shape({
  name: yup.string().required(),
  guests: yup.number().required(),
  vegetarianMenu: yup.boolean().required(),
  song: yup.string().nullable(),
  message: yup.string().nullable(),
  alergic: yup.string().nullable(),
}); 

// Asegurarnos de que esta ruta sea dinámica
export const dynamic = 'force-dynamic';

async function validateConfirmData(confirmData: any) {
  try {
    await confirmSchema.validate(confirmData);
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      throw new Error(error.errors[0]);
    }
    throw new Error("Invalid data");
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();

    const { confirmData } = await request.json();

    // Validar los datos
    try {
      await validateConfirmData(confirmData);
    } catch (validationError: any) {
      return NextResponse.json(
        { message: validationError.message },
        { status: 400 }
      );
    }

    // Comprobar si el nombre ya está registrado
    const subscriberFound = await Confirm.findOne({ name: confirmData.name });

    if (subscriberFound) {
      return NextResponse.json(
        { message: "Name already registered" },
        { status: 409 }
      );
    }

    // Guardar los datos en la base de datos
    const confirm = new Confirm({ ...confirmData });
    const savedSubscriber = await confirm.save();

    return NextResponse.json(
      {
        email: savedSubscriber.email,
        createdAt: savedSubscriber.createdAt,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        { message: `Validation error: ${error.message}` },
        { status: 400 }
      );
    } else {
      console.error("Unexpected error:", error);
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    }
  }
}

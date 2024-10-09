import { connectDB } from "@lib/mongodb";
import Confirm from "@models/confirm";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import * as yup from "yup";
import { confirmData } from "@/types/confirmAttendance";

// Mark this API route as dynamic
export const dynamic = 'force-dynamic';

// Define validation schema
const confirmSchema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio"),
  guests: yup.number().required("El número de invitados es obligatorio"),
  vegetarianMenu: yup.boolean().required("El menú vegetariano es obligatorio"),
  song: yup.string().nullable(),
  message: yup.string().nullable(),
  alergic: yup.string().nullable(),
});

async function validateConfirmData(data: confirmData) {
  try {
    await confirmSchema.validate(data);
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      throw new Error(error.errors[0]); // Return the first validation error message
    }
    throw new Error("Invalid data");
  }
}

export async function POST(request: Request) {
  try {


    await connectDB();

    // Parse the request body
    const data: confirmData = await request.json();

    console.log(data)

    // Validate the data
    try {
      await validateConfirmData(data);
    } catch (validationError: any) {
      return NextResponse.json(
        { message: validationError.message },
        { status: 400 }
      );
    }

    // Save the data to the database
    const confirm = new Confirm({ ...data });
    const userConfirmed = await confirm.save();

    return NextResponse.json(
      {
        name: userConfirmed.name,
        createdAt: userConfirmed.createdAt,
      },
      { status: 201 }
    );
  } catch (error) {

    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        { message: `Error de validación: ${error.message}` },
        { status: 400 }
      );
    } else {
      console.error("Unexpected error:", error);
      return NextResponse.json(
        { message: "Error interno del servidor" },
        { status: 500 }
      );
    }
  }
}

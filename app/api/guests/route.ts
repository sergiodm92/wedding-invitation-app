import { connectDB } from '@/lib/mongodb';
import Guest from '@models/guest';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await connectDB();

        const guests = await Guest.find(); 

        return NextResponse.json(guests, { status: 200 });
    } catch (error) {
        console.error('Error al obtener los invitados:', error);
        return NextResponse.json(
            { message: 'Error al obtener los invitados' },
            { status: 500 }
        );
    }
}
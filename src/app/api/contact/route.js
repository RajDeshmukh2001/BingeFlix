import db from '@/utils/db';
import Contact from '@/models/contact';
import { NextResponse } from 'next/server';

export async function POST(req, res){
    try {
        const body = await req.json();
        await db();
        await Contact.create(body);
        return NextResponse.json(
            { message: "Message" },
            { status: 200 },
        )
    } catch (error) {
        return NextResponse.json(
            { message: "Server Error" },
            { status: 400 },
        )
    }
}
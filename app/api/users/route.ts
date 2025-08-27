import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import IUser from "@/lib/models/user";
import { z } from "zod";
import { userSchema } from "@/lib/validations";

export async function GET() {
  try {
    await dbConnect();
    const users = await IUser.find();
    console.log('Fetched users:', users);
    return NextResponse.json(users);
  } catch (error: any) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    console.log('Received user data:', body);

    const parsed = userSchema.parse(body);
    console.log('Parsed user data:', parsed);

    const newUser = await IUser.create(parsed);
    console.log('Created user:', newUser);

    return NextResponse.json(newUser, { status: 201 });
  } catch (error: any) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import IUser from "@/lib/models/user";
import { userSchema } from "@/lib/validations";

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    await dbConnect();
    try {
        const user = await IUser.findById(params.id);

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    await dbConnect();
    try {
        const body = await req.json();
        const parsed = userSchema.parse(body);
        const updatedUser = await IUser.findByIdAndUpdate(params.id, parsed, {
            new: true,
            runValidators: true,
        });

        if (!updatedUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json(updatedUser);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    await dbConnect();
    try {
        const deletedUser = await IUser.findByIdAndDelete(params.id);

        if (!deletedUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "User deleted successfully" });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    // Handle deletion via POST for form submissions
    return DELETE(req, { params });
}

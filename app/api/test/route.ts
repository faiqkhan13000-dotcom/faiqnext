import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";

export async function GET() {
    try {
        await dbConnect();
        return NextResponse.json({
            status: "success",
            message: "MongoDB connection successful",
            timestamp: new Date().toISOString()
        });
    } catch (error: any) {
        console.error('Test endpoint error:', error);
        return NextResponse.json({
            status: "error",
            message: error.message,
            timestamp: new Date().toISOString()
        }, { status: 500 });
    }
}


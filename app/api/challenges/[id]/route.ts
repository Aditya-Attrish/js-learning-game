import { NextRequest, NextResponse } from "next/server";
import { apiHandlerWithArgu } from "next-api-flow";
import dbConnect from "@/lib/db";
import Challenge from "@/models/challenge";

// GET /api/challenges
export const GET = apiHandlerWithArgu(async (req: NextRequest) => {
    await dbConnect();
    const id = req.nextUrl.pathname.split('/')[3];
    const challenge = await Challenge.findById(id);
    if (!challenge) {
        return NextResponse.json({ error: "Challenge not found" }, { status: 404 });
    }
    return NextResponse.json(challenge);
});
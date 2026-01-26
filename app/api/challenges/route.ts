import { NextResponse } from "next/server";
import { apiHandler } from "next-api-flow";
import dbConnect from "@/lib/db";
import Challenge from "@/models/challenge";

// GET /api/challenges
export const GET = apiHandler(async () => {
    await dbConnect();
    const challenges = await Challenge.find({});
    return NextResponse.json(challenges);
});

// POST /api/challenges
// export const POST = apiHandlerWithArgu(async (req: NextRequest) => {
//     await dbConnect();
//     const newChallenge = new Challenge({
//         title: req.body.title,
//         description: req.body.description,
//     });
//     const savedChallenge = await newChallenge.save();
//     return NextResponse.json(savedChallenge, { status: 201 });
// });
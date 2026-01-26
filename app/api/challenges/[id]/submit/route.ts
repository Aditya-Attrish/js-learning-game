import { NextRequest, NextResponse } from "next/server";
import { apiHandlerWithArgu,  } from "next-api-flow";
import dbConnect from "@/lib/db";
import Challenge from "@/models/challenge";

// GET /api/challenges
export const POST = apiHandlerWithArgu(async (request: NextRequest) => {
    await dbConnect();
    const id = request.nextUrl.pathname.split('/')[3];
    console.log(id)
    const challenge = await Challenge.findById(id);
    if (!challenge) {
        return NextResponse.json({ error: "Challenge not found" }, { status: 404 });
    }

    const { code } = await request.json();

    const testResults: Array<{ input?: unknown; expected?: unknown; actual?: unknown; passed: boolean; error?: string }> = [];
    let passedTests = 0;

    for (const testCase of challenge.testCases) {
        try {
         // This is a simplified execution - use a secure sandbox in production
        const result = eval(`(${code})(${testCase.input})`);
        console.log('Test case input:', JSON.stringify(testCase.input), 'Expected:', testCase.expectedOutput, 'Got:', result);
        const passed = JSON.stringify(result) === JSON.stringify(testCase.expectedOutput);
        testResults.push({
          input: testCase.input,
          expected: testCase.expectedOutput,
          actual: result,
          passed
        });
        if (passed) passedTests++;
      } catch (error) {
         testResults.push({
          error: error instanceof Error ? error.message : String(error),
          passed: false
        });
      }
    }

    const score = Math.round((passedTests / challenge.testCases.length) * challenge.points);

    return NextResponse.json({
      passed: passedTests === challenge.testCases.length,
      score,
      testResults,
      totalTests: challenge.testCases.length,
      passedTests
    });
});
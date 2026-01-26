import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Progress } from '../ui/progress';

interface TestResult {
    input?: unknown;
    expected?: unknown;
    actual?: unknown;
    passed: boolean;
    error?: string;
}

interface ResultsCardProps {
    testResults: TestResult[];
}

function ResultsCard({ testResults }: ResultsCardProps) {
    const passedTests = testResults.filter(result => result.passed).length;
    const totalTests = testResults.length;
    const successRate = totalTests > 0 ? (passedTests / totalTests * 100) : 0;

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    Test Results
                </CardTitle>
                <CardDescription>
                    {passedTests} out of {totalTests} tests passed
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-1 mb-4">
                    <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{Math.round(successRate)}%</span>
                    </div>
                    <Progress value={successRate} />
                </div>

                <div className="space-y-3">
                    {testResults.map((result, index) => (
                        <div
                            key={index}
                            className={`p-3 rounded-lg border ${result.passed
                                    ? 'bg-green-50 border-green-200'
                                    : 'bg-red-50 border-red-200'
                                }`}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    {result.passed ? (
                                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                                    ) : (
                                        <AlertCircle className="h-4 w-4 text-red-600" />
                                    )}
                                    <span className="font-medium">Test Case {index + 1}</span>
                                </div>
                                <Badge
                                    variant={result.passed ? 'outline' : 'destructive'}
                                    className={result.passed ? 'border-green-300 text-green-700' : ''}
                                >
                                    {result.passed ? 'Passed' : 'Failed'}
                                </Badge>
                            </div>

                            {!result.passed && (
                                <div className="mt-2 space-y-2 text-sm">
                                    {result.error ? (
                                        <div className="font-mono bg-white/50 p-2 rounded text-red-600">
                                            Error: {result.error}
                                        </div>
                                    ) : (
                                        <>
                                            <div className="grid grid-cols-3 gap-2">
                                                <div>
                                                    <div className="text-gray-500 text-xs">Input</div>
                                                    <div className="font-mono text-xs bg-white/50 p-1 rounded">
                                                        {JSON.stringify(result.input)}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-gray-500 text-xs">Expected</div>
                                                    <div className="font-mono text-xs bg-white/50 p-1 rounded">
                                                        {JSON.stringify(result.expected)}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-gray-500 text-xs">Got</div>
                                                    <div className="font-mono text-xs bg-white/50 p-1 rounded">
                                                        {JSON.stringify(result.actual)}
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>

    )
}

export default ResultsCard
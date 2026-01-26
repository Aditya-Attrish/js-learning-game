"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Eye, EyeOff, HelpCircle } from "lucide-react";

function HintsCard({ hints }: { hints: string[] }) {
    const [showHints, setShowHints] = useState(false);
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <HelpCircle className="h-5 w-5" />
                        Hints & Tips
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowHints(!showHints)}
                    >
                        {showHints ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        {showHints ? 'Hide' : 'Show'} Hints
                    </Button>
                </CardTitle>
            </CardHeader>
            {showHints && (
                <CardContent>
                    <div className="space-y-3">
                        {hints.map((hint, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-100"
                            >
                                <div className="shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                                    <span className="text-yellow-800 text-sm font-medium">{index + 1}</span>
                                </div>
                                <p className="text-sm text-yellow-800">{hint}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            )}
        </Card>
    )
}

export default HintsCard
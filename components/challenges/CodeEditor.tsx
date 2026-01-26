'use client'

import { Play, Code2, Copy, RotateCcw } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import { Card, CardFooter, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Button } from '../ui/button';
import ResultsCard from './ResultsCard';

interface TestResult {
    input?: unknown;
    expected?: unknown;
    actual?: unknown;
    passed: boolean;
    error?: string;
}

function CodeEditor({ id, initialCode }: { id: string; initialCode?: string }) {
    const [code, setCode] = useState(initialCode || '');
    const [testResults, setTestResults] = useState<TestResult[]>([]);
    const [isRunning, setIsRunning] = useState(false);

    const handleResetCode = () => {
        if (initialCode) {
            setCode(initialCode);
            toast.success('Code reset to initial state');
        }
    };

    const handleCopyCode = () => {
        navigator.clipboard.writeText(code);
        toast.success('Code copied to clipboard');
    };

    const handleRunCode = async () => {
        if (!code.trim()) {
            toast.error('Please write some code first');
            return;
        }

        try {
            setIsRunning(true);
            setTestResults([]);
            toast.loading('Running tests...');
            const response = await axios.post(`/api/challenges/${id}/submit`, {
                code: code
            });

            setTestResults(response.data.testResults);
            setIsRunning(false);
            toast.dismiss();

            if (response.data.passed) {
                toast.success(`All tests passed! You earned ${response.data.score} points!`);
            } else {
                toast.error(`${response.data.passedTests}/${response.data.totalTests} tests passed`);
            }
        } catch (error) {
            console.error('Error running code:', error);
            toast.error('Error running code');
        }
    };

    return (
        <>
            <Card className="h-125 flex flex-col">
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                            <Code2 className="h-5 w-5" />
                            Code Editor
                        </CardTitle>
                        <div className="flex items-center gap-2">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="sm" onClick={handleCopyCode}>
                                            <Copy className="h-4 w-4" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Copy code</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="sm" onClick={handleResetCode}>
                                            <RotateCcw className="h-4 w-4" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Reset code</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="grow p-0">
                    <div className="h-full">
                        <Editor
                            height="100%"
                            defaultLanguage="javascript"
                            value={code}
                            onChange={(value) => setCode(value || '')}
                            theme="vs-dark"
                            options={{
                                minimap: { enabled: true },
                                fontSize: 14,
                                scrollBeyondLastLine: false,
                                wordWrap: 'on',
                                automaticLayout: true,
                                formatOnType: true,
                                formatOnPaste: true,
                                suggestOnTriggerCharacters: true,
                                tabSize: 2,
                            }}
                        />
                    </div>
                </CardContent>
                <CardFooter className="pt-3">
                    <Button
                        onClick={handleRunCode}
                        disabled={isRunning}
                        className="w-full"
                        size="lg"
                    >
                        {isRunning ? (
                            <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                                Running Tests...
                            </>
                        ) : (
                            <>
                                <Play className="h-4 w-4 mr-2" />
                                Run Code & Test
                            </>
                        )}
                    </Button>
                </CardFooter>
            </Card>
            
            {/* Test Results Card */}
            {testResults && (
                <div className="mt-4">
                    <ResultsCard testResults={testResults} />
                </div>
            )}

        </>
    )
}

export default CodeEditor
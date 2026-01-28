import CodeEditor from '@/components/challenges/CodeEditor';
import HintsCard from '@/components/challenges/HintsCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import axios from 'axios';
import { BookOpen, ChevronLeft, Clock, Code2, Eye, Share2, Trophy, Zap } from 'lucide-react';
import Link from 'next/link';

interface ChallengePageProps {
  params: Promise<{ id: string }>;
}

export const dynamic = 'force-dynamic';

const fetchChallenge = async (id: string) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/challenges/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching challenges:', error);
      return null;
    }
  };

async function ChallengePage({ params }: ChallengePageProps) {
  const challenge = await fetchChallenge((await params).id);
  
  if (!challenge) {
    return (
      <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Challenge not found</h1>
          <p className="text-gray-600 mb-4">The challenge you&#39;re looking for doesn&#39;t exist or couldn&#39;t be loaded.</p>
          <Button asChild>
            <Link href="/">Back to Dashboard</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h1 className="font-semibold">{challenge?.title}</h1>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Badge variant="outline">{challenge?.category}</Badge>
                    <span>•</span>
                    <span>{challenge?.difficulty}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Trophy className="h-3 w-3" />
                      {challenge?.points} points
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Clock className="h-4 w-4 mr-2" />
                      {/* {formatTime(timeSpent)} */}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Time spent on this challenge
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Problem & Results */}
          <div className="space-y-6">
            {/* Problem Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Challenge Description
                </CardTitle>
                <CardDescription>
                  Read the problem carefully before starting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 mb-4">{challenge?.description}</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Requirements  
                    </h4>
                    <ul className="space-y-2">
                      {challenge?.testCases?.map((testCase: { description: string }, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="mt-1">
                            <div className={`w-2 h-2 rounded-full ${index < 2 ? 'bg-green-500' : 'bg-gray-300'}`} />
                          </div>
                          <span className="text-sm">{testCase.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Example Section */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      Example
                    </h4>
                    {challenge?.testCases?.slice(0, 2).map((testCase: { input: unknown; expectedOutput: unknown }, index: number) => (
                      <div key={index} className="mb-3 last:mb-0">
                        <div className="font-mono text-sm bg-white p-2 rounded border">
                          Input: {JSON.stringify(testCase.input)}
                          <br />
                          Output: {JSON.stringify(testCase.expectedOutput)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hints Card */}
            <HintsCard hints={challenge?.hints || []} />
          </div>

          {/* Right Column - Code Editor */}
          <div className="space-y-6">
            {/* Editor Card */}
            <CodeEditor id={challenge?._id || ''} initialCode={challenge?.initialCode || ''} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChallengePage
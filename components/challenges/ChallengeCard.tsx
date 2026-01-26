import Link from "next/link";
import { BookOpen, Brain, Clock, Code, Rocket, Shield, Star, Target, TrendingUp, Zap } from "lucide-react";
import { ChallengeCardProps } from "@/types/challengeCard";
import { Card, CardTitle, CardHeader, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JSX } from "react";


function ChallengeCard({ challenge }: ChallengeCardProps) {
  const getDifficultyIcon = (difficulty: string) => {
      switch(difficulty) {
        case 'beginner': return <Rocket className="h-4 w-4" />;
        case 'intermediate': return <Brain className="h-4 w-4" />;
        case 'advanced': return <Shield className="h-4 w-4" />;
        default: return <Code className="h-4 w-4" />;
      }
    };

    const getCategoryIcon = (category: string) => {
    const icons: Record<string, JSX.Element> = {
      functions: <Zap className="h-4 w-4" />,
      arrays: <TrendingUp className="h-4 w-4" />,
      strings: <BookOpen className="h-4 w-4" />,
      objects: <Target className="h-4 w-4" />,
      conditionals: <Brain className="h-4 w-4" />,
      loops: <Rocket className="h-4 w-4" />,
      async: <Clock className="h-4 w-4" />,
      algorithms: <Shield className="h-4 w-4" />
    };
    return icons[category] || <Code className="h-4 w-4" />;
  };

    const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'advanced': return 'bg-red-100 text-red-800 hover:bg-red-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {challenge.title}
            </CardTitle>
            <CardDescription className="mt-1 line-clamp-2">
              {challenge.description}
            </CardDescription>
          </div>
          {/* {challenge.completed && (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <CheckCircle className="h-3 w-3 mr-1" />
              Completed
            </Badge>
          )} */}
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className={`flex items-center gap-1 ${getDifficultyColor(challenge.difficulty)}`}>
            {getDifficultyIcon(challenge.difficulty)}
            {challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1)}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            {getCategoryIcon(challenge.category)}
            {challenge.category}
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Star className="h-3 w-3" />
            {challenge.points} pts
          </Badge>
          
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild className="w-full">
          <Link href={`/challenge/${challenge._id}`}>
            Start Challenge
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ChallengeCard
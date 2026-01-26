import ChallengeCard from "@/components/challenges/ChallengeCard";
import axios from "axios";
import { BookOpen, Code, Flame, Target, TrendingUp, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ChallengeCardProps } from "@/types/challengeCard";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const fetchChallenges = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/challenges`);
      return response.data;
    } catch (error) {
      console.error('Error fetching challenges:', error);
    }
  };

export default async function Home() {
  const challenges = await fetchChallenges();

  const categories = [
    { name: 'All', count: challenges.length, icon: <Code /> },
    { name: 'Functions', count: challenges.filter((c: { category: string; }) => c.category === 'functions').length, icon: <Zap /> },
    { name: 'Arrays', count: challenges.filter((c: { category: string; }) => c.category === 'arrays').length, icon: <TrendingUp /> },
    { name: 'Strings', count: challenges.filter((c: { category: string; }) => c.category === 'strings').length, icon: <BookOpen /> },
    { name: 'Objects', count: challenges.filter((c: { category: string; }) => c.category === 'objects').length, icon: <Target /> }
  ];
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Welcome back, Developer! 👋
              </h1>
              <p className="text-primary-100">
                Level up your JavaScript skills with interactive challenges
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 p-3 rounded-lg">
                <Flame className="h-6 w-6 text-orange-300" />
                <div>
                  <div className="text-sm text-primary-200">Current Streak</div>
                  {/* <div className="text-xl font-bold">{userStats.streak} days 🔥</div> */}
                </div>
              </div>
              {/* <Avatar className="h-12 w-12 border-2 border-white">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Developer" />
                <AvatarFallback>DEV</AvatarFallback>
              </Avatar> */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Challenges Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">Challenges</h2>
              <p className="text-gray-600">Test your skills with these exercises</p>
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Badge key={category.name} variant="outline" className="cursor-pointer">
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                  <span className="ml-2 text-xs bg-gray-100 px-1.5 rounded-full">
                    {category.count}
                  </span>
                </Badge>
              ))}
            </div>
          </div>

          <Tabs defaultValue="all" className="space-y-6">
            <TabsList>
              <TabsTrigger value="all">All Challenges</TabsTrigger>
              <TabsTrigger value="beginner">Beginner</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {challenges.map((challenge: ChallengeCardProps["challenge"]) => (
                  <ChallengeCard key={challenge._id} challenge={challenge} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

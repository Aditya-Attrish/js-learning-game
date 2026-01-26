export interface ChallengeCardProps {
  challenge: {
    _id: string;
    title: string;
    description: string;
    difficulty: "beginner" | "intermediate" | "advanced";
    points: number;
    category: string;
  };
}
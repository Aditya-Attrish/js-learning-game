import mongoose, { Document} from 'mongoose';

export interface IChallenge extends Document {
  title: string;
  description: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    category: 'variables' | 'functions' | 'arrays' | 'objects' | 'loops' | 'conditionals';
    initialCode: string;
    testCases: {
    input: unknown;
    expectedOutput: unknown;
    description?: string;
  }[];
  hints: string[];
  points: number;
}

const ChallengeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  },
  category: {
    type: String,
    enum: ['variables', 'functions', 'arrays', 'objects', 'loops', 'conditionals'],
    required: true
  },
  initialCode: {
    type: String,
    required: true
  },
  testCases: [{
    input: mongoose.Schema.Types.Mixed,
    expectedOutput: mongoose.Schema.Types.Mixed,
    description: String
  }],
  hints: [String],
  points: {
    type: Number,
    default: 10
  }
});

const Challenge = (mongoose.models.Challenge) as mongoose.Model<IChallenge> || mongoose.model('Challenge', ChallengeSchema);
export default Challenge;
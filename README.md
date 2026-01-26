# JavaScript Learning Game

An interactive web application designed to help developers improve their JavaScript skills through hands-on coding challenges. Built with Next.js, TypeScript, and modern web technologies.

## 🚀 Features

- **Interactive Coding Challenges**: Solve JavaScript problems with real-time code execution
- **Multiple Difficulty Levels**: Beginner, Intermediate, and Advanced challenges
- **Categorized Learning**: Organized by topics like Functions, Arrays, Strings, Objects, Loops, and Conditionals
- **Built-in Code Editor**: Monaco Editor (same as VS Code) for a familiar coding experience
- **Test Case Validation**: Automatic testing of your solutions against predefined test cases
- **Hints System**: Get helpful hints when you're stuck
- **Points & Progress Tracking**: Earn points and track your learning progress
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS, shadCN UI components
- **Code Editor**: Monaco Editor React
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## 📋 Prerequisites

- Node.js 18+
- MongoDB database
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <https://github.com/Aditya-Attrish/js-learning-game.git>
   cd js-learning-game
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Set up the database**

   Make sure MongoDB is running and the connection string is properly configured.

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to start learning!

## 📁 Project Structure

```
js-learning-game/
├── app/                    # Next.js app directory
│   ├── (root)/            # Main application pages
│   ├── api/               # API routes
│   ├── challenge/         # Challenge pages
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── challenges/        # Challenge-related components
│   └── ui/               # Reusable UI components
├── lib/                   # Utility libraries
├── models/               # Database models
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

## 🎯 How to Use

1. **Browse Challenges**: View all available coding challenges on the home page
2. **Filter by Category**: Use category badges to filter challenges by topic
3. **Select Difficulty**: Choose challenges based on your skill level
4. **Code Your Solution**: Use the built-in Monaco editor to write JavaScript code
5. **Run Tests**: Execute your code against test cases to validate your solution
6. **Get Hints**: Use hints if you need guidance
7. **Submit Solution**: Submit your code to earn points and track progress

## 🧪 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Challenge Creation

To add new challenges, create documents in your MongoDB database with the following structure:

```javascript
{
  title: "Challenge Title",
  description: "Challenge description",
  difficulty: "beginner" | "intermediate" | "advanced",
  category: "functions" | "arrays" | "strings" | "objects" | "loops" | "conditionals",
  initialCode: "// Write your solution here",
  testCases: [
    {
      input: [1, 2, 3],
      expectedOutput: 6,
      description: "Sum of array elements"
    }
  ],
  hints: ["Hint 1", "Hint 2"],
  points: 10
}
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [ShadCN UI](https://ui.shadcn.com/)
- Code editor powered by [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- Icons from [Lucide](https://lucide.dev/)

---

Happy coding! 🎉
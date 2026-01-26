import Link from 'next/link';
import { Home, Trophy, Code2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-primary to-primary/80">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  JS Mastery
                </span>
                <span className="text-xs text-muted-foreground">Learn • Code • Grow</span>
              </div>
          </Link>
          
          <div className="flex space-x-6">
            <Link href="/" className="flex items-center space-x-1 hover:text-primary-400 transition">
              <Home />
              <span>Dashboard</span>
            </Link>
            <Link href="/progress" className="flex items-center space-x-1 hover:text-primary-400 transition">
              <Trophy />
              <span>Progress</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
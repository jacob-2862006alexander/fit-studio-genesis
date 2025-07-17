import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Dumbbell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import JoinModal from "./JoinModal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  const handleJoinNow = () => {
    setJoinModalOpen(true);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Classes", path: "/classes" },
    { name: "Trainers", path: "/trainers" },
    { name: "Schedule", path: "/schedule" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              FitStudio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-3">
              <Link to="/signin">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Sign In
                </Button>
              </Link>
              <Button onClick={handleJoinNow} className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg">
                Join Now
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3">
                <Link to="/signin">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full">
                    Sign In
                  </Button>
                </Link>
                <Button onClick={handleJoinNow} className="bg-gradient-to-r from-primary to-accent text-primary-foreground w-full">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <JoinModal open={joinModalOpen} onOpenChange={setJoinModalOpen} />
    </nav>
  );
};

export default Navigation;

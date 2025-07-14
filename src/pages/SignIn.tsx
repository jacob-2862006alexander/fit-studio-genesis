import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export default function SignIn() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add authentication logic
    console.log("Sign in attempted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl animate-fade-in">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Sign In</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </Label>
              <Input 
                id="email"
                type="email" 
                placeholder="you@example.com" 
                required 
                className="animate-scale-in"
              />
            </div>

            <div>
              <Label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </Label>
              <Input 
                id="password"
                type="password" 
                placeholder="••••••••" 
                required 
                className="animate-scale-in"
              />
            </div>

            <Button 
              type="submit"
              className="w-full text-lg rounded-xl hover-scale"
            >
              Log In
            </Button>
          </form>

          <div className="mt-4 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary font-semibold hover:underline story-link">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
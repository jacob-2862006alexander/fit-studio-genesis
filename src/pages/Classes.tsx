import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Flame, Heart, Zap, Target } from "lucide-react";

const Classes = () => {
  const classes = [
    {
      id: 1,
      name: "HIIT Bootcamp",
      description: "High-intensity interval training that burns calories and builds strength",
      duration: "45 min",
      difficulty: "Advanced",
      maxParticipants: 12,
      icon: Flame,
      benefits: ["Burns up to 500 calories", "Builds muscle", "Improves cardio"],
      schedule: ["Mon 6:00 AM", "Wed 7:00 PM", "Fri 6:00 AM"]
    },
    {
      id: 2,
      name: "Yoga Flow",
      description: "Gentle flow sequences that improve flexibility and reduce stress",
      duration: "60 min",
      difficulty: "Beginner",
      maxParticipants: 20,
      icon: Heart,
      benefits: ["Increases flexibility", "Reduces stress", "Improves balance"],
      schedule: ["Tue 9:00 AM", "Thu 6:30 PM", "Sat 10:00 AM"]
    },
    {
      id: 3,
      name: "Strength Training",
      description: "Build muscle and increase strength with our structured weight training",
      duration: "50 min",
      difficulty: "Intermediate",
      maxParticipants: 8,
      icon: Zap,
      benefits: ["Builds muscle mass", "Increases strength", "Improves bone density"],
      schedule: ["Mon 5:00 PM", "Wed 6:00 AM", "Fri 5:00 PM"]
    },
    {
      id: 4,
      name: "Cardio Kickboxing",
      description: "Fun, high-energy class combining martial arts with cardio",
      duration: "45 min",
      difficulty: "Intermediate",
      maxParticipants: 15,
      icon: Target,
      benefits: ["Improves coordination", "Burns calories", "Builds confidence"],
      schedule: ["Tue 7:00 PM", "Thu 6:00 AM", "Sat 11:00 AM"]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Fitness Classes
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Transform your body with our expert-led fitness classes
          </p>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {classes.map((fitnessClass) => {
              const IconComponent = fitnessClass.icon;
              return (
                <Card key={fitnessClass.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{fitnessClass.name}</CardTitle>
                          <CardDescription className="mt-1">
                            {fitnessClass.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={getDifficultyColor(fitnessClass.difficulty)}>
                        {fitnessClass.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Class Details */}
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{fitnessClass.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>Max {fitnessClass.maxParticipants} people</span>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-medium mb-2">Benefits:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {fitnessClass.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Schedule */}
                    <div>
                      <h4 className="font-medium mb-2">Schedule:</h4>
                      <div className="flex flex-wrap gap-2">
                        {fitnessClass.schedule.map((time, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {time}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg">
                      Book This Class
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes;
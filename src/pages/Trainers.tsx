import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Clock, Star, MessageCircle } from "lucide-react";

const Trainers = () => {
  const trainers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Lead Personal Trainer",
      image: "/placeholder.svg",
      experience: "8 years",
      specialties: ["HIIT", "Weight Loss", "Strength Training"],
      certifications: ["NASM-CPT", "ACSM-EP", "Precision Nutrition"],
      bio: "Sarah is passionate about helping clients achieve their fitness goals through personalized training programs and nutritional guidance.",
      rating: 4.9,
      sessions: 1200
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      role: "Strength & Conditioning Coach",
      image: "/placeholder.svg",
      experience: "6 years",
      specialties: ["Powerlifting", "Athletic Performance", "Injury Prevention"],
      certifications: ["CSCS", "FMS", "USAW-L1"],
      bio: "Mike specializes in building strength and power for athletes and fitness enthusiasts of all levels.",
      rating: 4.8,
      sessions: 950
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Yoga & Wellness Instructor",
      image: "/placeholder.svg",
      experience: "5 years",
      specialties: ["Vinyasa Yoga", "Meditation", "Flexibility"],
      certifications: ["RYT-500", "Yin Yoga", "Mindfulness"],
      bio: "Emily brings a holistic approach to wellness, combining physical practice with mental well-being.",
      rating: 5.0,
      sessions: 800
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Functional Fitness Trainer",
      image: "/placeholder.svg",
      experience: "7 years",
      specialties: ["Functional Movement", "Mobility", "CrossFit"],
      certifications: ["CF-L2", "SFMA", "TRX"],
      bio: "David focuses on improving daily movement patterns and functional strength for real-world applications.",
      rating: 4.7,
      sessions: 1100
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Our Trainers
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Expert guidance from certified fitness professionals
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {trainers.map((trainer) => (
              <Card key={trainer.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                    />
                  </div>
                  <CardTitle className="text-xl">{trainer.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {trainer.role}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Stats */}
                  <div className="flex justify-center space-x-6 text-sm">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-medium">{trainer.rating}</span>
                      </div>
                      <span className="text-muted-foreground text-xs">Rating</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-medium">{trainer.experience}</span>
                      </div>
                      <span className="text-muted-foreground text-xs">Experience</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <MessageCircle className="h-4 w-4 text-primary" />
                        <span className="font-medium">{trainer.sessions}+</span>
                      </div>
                      <span className="text-muted-foreground text-xs">Sessions</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground text-center">
                    {trainer.bio}
                  </p>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-medium mb-2 text-center">Specialties:</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {trainer.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h4 className="font-medium mb-2 text-center flex items-center justify-center space-x-1">
                      <Award className="h-4 w-4" />
                      <span>Certifications:</span>
                    </h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {trainer.certifications.map((cert, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex space-x-2 pt-4">
                    <Button className="flex-1 bg-gradient-to-r from-primary to-accent text-primary-foreground">
                      Book Session
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
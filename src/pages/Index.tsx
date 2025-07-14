import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Users, Award, Clock, Star, ArrowRight, CheckCircle } from "lucide-react";
import JoinModal from "@/components/JoinModal";

const Index = () => {
  const [joinModalOpen, setJoinModalOpen] = useState(false);

  const features = [
    { icon: Dumbbell, title: "State-of-the-Art Equipment", description: "Latest fitness technology and equipment" },
    { icon: Users, title: "Expert Trainers", description: "Certified professionals to guide your journey" },
    { icon: Award, title: "Proven Results", description: "1000+ successful transformations" },
    { icon: Clock, title: "Flexible Hours", description: "Open early morning to late night" }
  ];

  const stats = [
    { number: "500+", label: "Happy Members" },
    { number: "50+", label: "Classes Weekly" },
    { number: "8", label: "Expert Trainers" },
    { number: "5", label: "Years Experience" }
  ];

  const testimonials = [
    { name: "Sarah M.", rating: 5, text: "FitStudio changed my life! The trainers are amazing and the community is so supportive." },
    { name: "Mike R.", rating: 5, text: "Best gym in the city. Great equipment, clean facilities, and professional staff." },
    { name: "Lisa K.", rating: 5, text: "Love the variety of classes. There's something for everyone here!" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-accent text-primary-foreground py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-white to-accent-foreground bg-clip-text text-transparent">
                Body & Mind
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join FitStudio and discover the perfect blend of expert training, 
              state-of-the-art equipment, and a supportive community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
                onClick={() => setJoinModalOpen(true)}
              >
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                <Link to="/classes" className="flex items-center space-x-2">
                  <span>View Classes</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose FitStudio?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need to achieve your fitness goals in a welcoming environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Classes */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Popular Classes
            </h2>
            <p className="text-xl text-muted-foreground">
              Join our most loved fitness classes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "HIIT Bootcamp", time: "45 min", difficulty: "Advanced", description: "High-intensity training for maximum results" },
              { name: "Yoga Flow", time: "60 min", difficulty: "Beginner", description: "Gentle movements for flexibility and peace" },
              { name: "Strength Training", time: "50 min", difficulty: "Intermediate", description: "Build muscle with expert guidance" }
            ].map((cls, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{cls.name}</CardTitle>
                    <Badge variant="secondary">{cls.difficulty}</Badge>
                  </div>
                  <CardDescription>{cls.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{cls.time}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      <Link to="/classes">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
              <Link to="/classes" className="flex items-center space-x-2">
                <span>View All Classes</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What Our Members Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <p className="font-medium">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of members who have transformed their lives at FitStudio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8"
              onClick={() => setJoinModalOpen(true)}
            >
              Join Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-6 text-sm opacity-80">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>No Setup Fee</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4" />
              <span>24/7 Access</span>
            </div>
          </div>
        </div>
      </section>

      <JoinModal open={joinModalOpen} onOpenChange={setJoinModalOpen} />
    </div>
  );
};

export default Index;

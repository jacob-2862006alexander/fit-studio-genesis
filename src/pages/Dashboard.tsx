import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Target, 
  Dumbbell, 
  Apple, 
  Heart, 
  Calendar,
  Clock,
  MapPin,
  Video,
  UserCheck,
  Edit,
  X,
  Check
} from "lucide-react";

export default function Dashboard() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // Sample user data
  const userData = {
    name: "Sarah Johnson",
    age: 28,
    gender: "Female",
    height: 165,
    weight: 62,
    fitnessGoal: "Weight Loss"
  };

  const workoutPlan = {
    level: "Intermediate",
    planName: "Total Body Transformation",
    trainerName: "Mike Thompson",
    schedule: [
      { day: "Monday", workout: "Upper Body Strength" },
      { day: "Tuesday", workout: "Cardio & Core" },
      { day: "Wednesday", workout: "Rest Day" },
      { day: "Thursday", workout: "Lower Body Power" },
      { day: "Friday", workout: "HIIT Training" },
      { day: "Saturday", workout: "Yoga & Flexibility" },
      { day: "Sunday", workout: "Active Recovery" }
    ]
  };

  const dietPlan = {
    type: "Non-Veg",
    meals: {
      breakfast: "Oatmeal with berries and protein powder",
      lunch: "Grilled chicken salad with quinoa",
      snacks: "Greek yogurt with nuts",
      dinner: "Salmon with steamed vegetables"
    }
  };

  const medicalInfo = {
    injuries: ["Minor Knee Strain"],
    conditions: ["None"]
  };

  const trainerInfo = {
    name: "Mike Thompson",
    specialization: "Strength Training & Weight Loss",
    morningSlots: ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM"],
    eveningSlots: ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"]
  };

  const weeklySchedule = [
    { day: "Monday", time: "7:00 AM", mode: "In-Person", status: "booked" },
    { day: "Tuesday", time: "", mode: "", status: "available" },
    { day: "Wednesday", time: "6:00 PM", mode: "Online", status: "booked" },
    { day: "Thursday", time: "", mode: "", status: "available" },
    { day: "Friday", time: "7:00 AM", mode: "In-Person", status: "booked" },
    { day: "Saturday", time: "", mode: "", status: "available" },
    { day: "Sunday", time: "", mode: "", status: "available" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "booked": return "bg-primary text-primary-foreground";
      case "available": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/20 p-4 pt-20">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Welcome back, {userData.name.split(' ')[0]}! 👋
          </h1>
          <p className="text-muted-foreground">Your fitness journey continues here</p>
        </div>

        {/* User Profile Card */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Profile Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-semibold">{userData.name}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Age</p>
                <p className="font-semibold">{userData.age} years</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Gender</p>
                <p className="font-semibold">{userData.gender}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Height</p>
                <p className="font-semibold">{userData.height} cm</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Weight</p>
                <p className="font-semibold">{userData.weight} kg</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Goal</p>
                <Badge variant="secondary">{userData.fitnessGoal}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Workout Plan Section */}
            <Card className="bg-gradient-to-r from-secondary/10 to-primary/10 border-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-secondary" />
                  Workout Plan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Level:</span>
                    <Badge variant="outline">{workoutPlan.level}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Plan:</span>
                    <span className="font-semibold">{workoutPlan.planName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Trainer:</span>
                    <span className="font-semibold">{workoutPlan.trainerName}</span>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Weekly Schedule</h4>
                    <div className="space-y-2">
                      {workoutPlan.schedule.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-2 rounded-lg bg-muted/50">
                          <span className="font-medium">{item.day}</span>
                          <span className="text-sm">{item.workout}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Diet Plan Section */}
            <Card className="bg-gradient-to-r from-accent/10 to-secondary/10 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Apple className="h-5 w-5 text-accent" />
                  Diet Plan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Diet Type:</span>
                    <Badge variant="secondary">{dietPlan.type}</Badge>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Meal Breakdown</h4>
                    <div className="space-y-3">
                      {Object.entries(dietPlan.meals).map(([meal, description]) => (
                        <div key={meal} className="p-3 rounded-lg bg-muted/50">
                          <h5 className="font-medium capitalize mb-1">{meal}</h5>
                          <p className="text-sm text-muted-foreground">{description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Medical & Injury Section */}
            <Card className="bg-gradient-to-r from-destructive/10 to-primary/10 border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-destructive" />
                  Medical & Injury Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Current Injuries</h4>
                    <div className="flex flex-wrap gap-2">
                      {medicalInfo.injuries.map((injury, index) => (
                        <Badge key={index} variant="destructive">{injury}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Medical Conditions</h4>
                    <div className="flex flex-wrap gap-2">
                      {medicalInfo.conditions.map((condition, index) => (
                        <Badge key={index} variant="outline">{condition}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trainer Information */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-primary" />
                  Your Trainer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg">{trainerInfo.name}</h3>
                    <p className="text-muted-foreground">{trainerInfo.specialization}</p>
                  </div>
                  
                  <Tabs defaultValue="morning" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="morning">Morning Slots</TabsTrigger>
                      <TabsTrigger value="evening">Evening Slots</TabsTrigger>
                    </TabsList>
                    <TabsContent value="morning" className="space-y-2">
                      {trainerInfo.morningSlots.map((slot, index) => (
                        <Button key={index} variant="outline" className="w-full">
                          {slot}
                        </Button>
                      ))}
                    </TabsContent>
                    <TabsContent value="evening" className="space-y-2">
                      {trainerInfo.eveningSlots.map((slot, index) => (
                        <Button key={index} variant="outline" className="w-full">
                          {slot}
                        </Button>
                      ))}
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Weekly Session Schedule */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Weekly Session Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Day</th>
                    <th className="text-left p-3 font-semibold">Time</th>
                    <th className="text-left p-3 font-semibold">Mode</th>
                    <th className="text-left p-3 font-semibold">Status</th>
                    <th className="text-left p-3 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {weeklySchedule.map((session, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="p-3 font-medium">{session.day}</td>
                      <td className="p-3">
                        {session.time ? (
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            {session.time}
                          </div>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                      <td className="p-3">
                        {session.mode ? (
                          <div className="flex items-center gap-1">
                            {session.mode === "Online" ? (
                              <Video className="h-4 w-4 text-blue-500" />
                            ) : (
                              <MapPin className="h-4 w-4 text-green-500" />
                            )}
                            {session.mode}
                          </div>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </td>
                      <td className="p-3">
                        <Badge className={getStatusColor(session.status)}>
                          {session.status}
                        </Badge>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          {session.status === "booked" ? (
                            <>
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="destructive">
                                <X className="h-4 w-4" />
                              </Button>
                            </>
                          ) : (
                            <Button size="sm" variant="default">
                              <Check className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
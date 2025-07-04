import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, User, Users, MapPin } from "lucide-react";

const Schedule = () => {
  const schedule = {
    monday: [
      { time: "6:00 AM", class: "HIIT Bootcamp", trainer: "Sarah Johnson", duration: "45 min", spots: "3/12", room: "Studio A" },
      { time: "9:00 AM", class: "Yoga Flow", trainer: "Emily Chen", duration: "60 min", spots: "8/20", room: "Studio B" },
      { time: "5:00 PM", class: "Strength Training", trainer: "Mike Rodriguez", duration: "50 min", spots: "1/8", room: "Weight Room" },
      { time: "7:00 PM", class: "Cardio Kickboxing", trainer: "David Thompson", duration: "45 min", spots: "5/15", room: "Studio A" }
    ],
    tuesday: [
      { time: "7:00 AM", class: "Strength Training", trainer: "Mike Rodriguez", duration: "50 min", spots: "2/8", room: "Weight Room" },
      { time: "9:00 AM", class: "Yoga Flow", trainer: "Emily Chen", duration: "60 min", spots: "12/20", room: "Studio B" },
      { time: "6:00 PM", class: "HIIT Bootcamp", trainer: "Sarah Johnson", duration: "45 min", spots: "6/12", room: "Studio A" },
      { time: "7:00 PM", class: "Cardio Kickboxing", trainer: "David Thompson", duration: "45 min", spots: "4/15", room: "Studio A" }
    ],
    wednesday: [
      { time: "6:00 AM", class: "Strength Training", trainer: "Mike Rodriguez", duration: "50 min", spots: "0/8", room: "Weight Room" },
      { time: "8:00 AM", class: "Yoga Flow", trainer: "Emily Chen", duration: "60 min", spots: "15/20", room: "Studio B" },
      { time: "5:30 PM", class: "HIIT Bootcamp", trainer: "Sarah Johnson", duration: "45 min", spots: "2/12", room: "Studio A" },
      { time: "7:00 PM", class: "Functional Fitness", trainer: "David Thompson", duration: "50 min", spots: "7/10", room: "Studio A" }
    ],
    thursday: [
      { time: "6:00 AM", class: "Cardio Kickboxing", trainer: "David Thompson", duration: "45 min", spots: "3/15", room: "Studio A" },
      { time: "9:30 AM", class: "Yoga Flow", trainer: "Emily Chen", duration: "60 min", spots: "9/20", room: "Studio B" },
      { time: "5:00 PM", class: "Strength Training", trainer: "Mike Rodriguez", duration: "50 min", spots: "4/8", room: "Weight Room" },
      { time: "6:30 PM", class: "HIIT Bootcamp", trainer: "Sarah Johnson", duration: "45 min", spots: "1/12", room: "Studio A" }
    ],
    friday: [
      { time: "6:00 AM", class: "HIIT Bootcamp", trainer: "Sarah Johnson", duration: "45 min", spots: "5/12", room: "Studio A" },
      { time: "9:00 AM", class: "Yoga Flow", trainer: "Emily Chen", duration: "60 min", spots: "11/20", room: "Studio B" },
      { time: "5:00 PM", class: "Strength Training", trainer: "Mike Rodriguez", duration: "50 min", spots: "2/8", room: "Weight Room" },
      { time: "6:30 PM", class: "Functional Fitness", trainer: "David Thompson", duration: "50 min", spots: "6/10", room: "Studio A" }
    ],
    saturday: [
      { time: "8:00 AM", class: "HIIT Bootcamp", trainer: "Sarah Johnson", duration: "45 min", spots: "8/12", room: "Studio A" },
      { time: "10:00 AM", class: "Yoga Flow", trainer: "Emily Chen", duration: "60 min", spots: "14/20", room: "Studio B" },
      { time: "11:00 AM", class: "Cardio Kickboxing", trainer: "David Thompson", duration: "45 min", spots: "9/15", room: "Studio A" },
      { time: "2:00 PM", class: "Strength Training", trainer: "Mike Rodriguez", duration: "50 min", spots: "3/8", room: "Weight Room" }
    ],
    sunday: [
      { time: "9:00 AM", class: "Gentle Yoga", trainer: "Emily Chen", duration: "60 min", spots: "16/20", room: "Studio B" },
      { time: "10:30 AM", class: "Functional Fitness", trainer: "David Thompson", duration: "50 min", spots: "5/10", room: "Studio A" },
      { time: "4:00 PM", class: "HIIT Bootcamp", trainer: "Sarah Johnson", duration: "45 min", spots: "7/12", room: "Studio A" }
    ]
  };

  const days = [
    { key: "monday", label: "Monday" },
    { key: "tuesday", label: "Tuesday" },
    { key: "wednesday", label: "Wednesday" },
    { key: "thursday", label: "Thursday" },
    { key: "friday", label: "Friday" },
    { key: "saturday", label: "Saturday" },
    { key: "sunday", label: "Sunday" }
  ];

  const getAvailabilityColor = (spots: string) => {
    const [taken, total] = spots.split('/').map(Number);
    const percentage = taken / total;
    
    if (percentage >= 0.9) return "bg-red-100 text-red-800";
    if (percentage >= 0.7) return "bg-yellow-100 text-yellow-800";
    return "bg-green-100 text-green-800";
  };

  const getAvailabilityText = (spots: string) => {
    const [taken, total] = spots.split('/').map(Number);
    const available = total - taken;
    
    if (available === 0) return "Full";
    if (available <= 2) return "Almost Full";
    return `${available} spots`;
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Class Schedule
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Find the perfect time for your workout
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="monday" className="w-full">
            <TabsList className="grid w-full grid-cols-7 mb-8">
              {days.map((day) => (
                <TabsTrigger key={day.key} value={day.key} className="text-xs md:text-sm">
                  {day.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {days.map((day) => (
              <TabsContent key={day.key} value={day.key}>
                <div className="grid gap-4">
                  {schedule[day.key as keyof typeof schedule].map((session, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                          {/* Time and Class Info */}
                          <div className="flex-1">
                            <div className="flex items-center space-x-4 mb-2">
                              <div className="flex items-center space-x-2">
                                <Clock className="h-5 w-5 text-primary" />
                                <span className="text-lg font-semibold">{session.time}</span>
                              </div>
                              <Badge className={getAvailabilityColor(session.spots)}>
                                {getAvailabilityText(session.spots)}
                              </Badge>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-1">{session.class}</h3>
                            
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <User className="h-4 w-4" />
                                <span>{session.trainer}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{session.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Users className="h-4 w-4" />
                                <span>{session.spots} enrolled</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4" />
                                <span>{session.room}</span>
                              </div>
                            </div>
                          </div>

                          {/* Action Button */}
                          <div className="flex space-x-2">
                            <Button 
                              variant="outline" 
                              className="min-w-[100px]"
                              disabled={session.spots.split('/')[0] === session.spots.split('/')[1]}
                            >
                              {session.spots.split('/')[0] === session.spots.split('/')[1] ? 'Full' : 'Book Now'}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
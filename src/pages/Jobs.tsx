import Header from "@/components/Header";
import StarryBackground from "@/components/StarryBackground";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Briefcase, DollarSign } from "lucide-react";

const jobsData = [
  {
    title: "Software Development Engineer",
    company: "Tech Solutions Inc.",
    location: "Bangalore, India",
    type: "Full-time",
    salary: "₹12-18 LPA",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    posted: "2 days ago",
  },
  {
    title: "Machine Learning Engineer",
    company: "AI Innovations Ltd.",
    location: "Hyderabad, India",
    type: "Full-time",
    salary: "₹15-22 LPA",
    skills: ["Python", "TensorFlow", "PyTorch", "Deep Learning"],
    posted: "5 days ago",
  },
  {
    title: "Full Stack Developer",
    company: "StartUp Hub",
    location: "Mumbai, India",
    type: "Full-time",
    salary: "₹10-15 LPA",
    skills: ["React", "Java", "Spring Boot", "SQL"],
    posted: "1 week ago",
  },
  {
    title: "Mobile App Developer",
    company: "Digital Wave",
    location: "Pune, India",
    type: "Full-time",
    salary: "₹12-16 LPA",
    skills: ["React Native", "Flutter", "Firebase"],
    posted: "3 days ago",
  },
];

const Jobs = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <StarryBackground />
      <Header />
      
      <main className="relative px-6 pt-32 pb-20 max-w-7xl mx-auto">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Available Positions</h1>
              <p className="text-muted-foreground">
                {jobsData.length} job openings across partner companies
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Post New Job
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobsData.map((job, idx) => (
              <Card key={idx} className="card-bordered p-6 space-y-4 hover:scale-[1.02] transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building2 className="w-4 h-4" />
                        <span className="text-sm">{job.company}</span>
                      </div>
                    </div>
                    <Badge variant="secondary">{job.type}</Badge>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {job.skills.map((skill, skillIdx) => (
                      <Badge key={skillIdx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-sm text-muted-foreground">Posted {job.posted}</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Match Candidates
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Jobs;

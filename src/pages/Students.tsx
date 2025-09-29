import Header from "@/components/Header";
import StarryBackground from "@/components/StarryBackground";
import StudentCard from "@/components/StudentCard";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

const studentsData = [
  {
    name: "Vinayak Suryavanshi",
    degree: "B.Tech Computer Science Engineering",
    university: "SRM Institute of Science and Technology",
    cgpa: "9.2",
    skills: ["React", "Node.js", "Python", "Machine Learning", "TypeScript", "AWS"],
    status: "available" as const,
    notes: "Strong candidate for frontend roles.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    degree: "B.Tech Information Technology",
    university: "VIT University",
    cgpa: "9.5",
    skills: ["Java", "Spring Boot", "SQL", "Docker", "Kubernetes"],
    status: "interviewing" as const,
    notes: "Excellent backend development skills with cloud expertise.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Rahul Verma",
    degree: "B.Tech Electronics & Communication",
    university: "IIT Delhi",
    cgpa: "8.9",
    skills: ["Python", "TensorFlow", "Computer Vision", "Deep Learning"],
    status: "available" as const,
    notes: "Specialized in AI/ML with research publications.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Ananya Patel",
    degree: "B.Tech Computer Science",
    university: "BITS Pilani",
    cgpa: "9.0",
    skills: ["React Native", "Flutter", "Firebase", "UI/UX Design"],
    status: "placed" as const,
    notes: "Mobile development expert with strong design sense.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
];

const Students = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <StarryBackground />
      <Header />
      
      <main className="relative px-6 pt-32 pb-20 max-w-7xl mx-auto">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Student Profiles</h1>
              <p className="text-muted-foreground">
                Showing {studentsData.length} of {studentsData.length} students
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              <FileDown className="w-4 h-4" />
              Export to Excel
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studentsData.map((student, idx) => (
              <StudentCard key={idx} {...student} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Students;

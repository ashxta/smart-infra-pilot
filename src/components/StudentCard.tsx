import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface StudentCardProps {
  name: string;
  degree: string;
  university: string;
  cgpa: string;
  skills: string[];
  status: "available" | "interviewing" | "placed";
  notes: string;
  imageUrl: string;
}

const StudentCard = ({ 
  name, 
  degree, 
  university, 
  cgpa, 
  skills, 
  status, 
  notes,
  imageUrl 
}: StudentCardProps) => {
  const statusColors = {
    available: "bg-success/20 text-success border-success/30",
    interviewing: "bg-warning/20 text-warning border-warning/30",
    placed: "bg-primary/20 text-primary border-primary/30",
  };

  return (
    <Card className="card-bordered p-6 space-y-4 hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-start gap-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
        />
        <div className="flex-1 space-y-2">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-sm text-muted-foreground">{degree}</p>
              <p className="text-xs text-muted-foreground mt-1">{university}</p>
            </div>
            <Badge variant="outline" className={statusColors[status]}>
              {status}
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between py-2 border-y border-border/50">
        <span className="text-sm text-muted-foreground">CGPA</span>
        <span className="text-lg font-bold text-primary">{cgpa}/10</span>
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium">Key Skills</div>
        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 4).map((skill, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
          {skills.length > 4 && (
            <Badge variant="secondary" className="text-xs">
              +{skills.length - 4} more
            </Badge>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium">Recruiter Notes</div>
        <p className="text-sm text-muted-foreground">{notes}</p>
      </div>

      <Link to={`/students/${name.toLowerCase().replace(/\s+/g, '-')}`}>
        <Button className="w-full" variant="outline">
          View Profile
        </Button>
      </Link>
    </Card>
  );
};

export default StudentCard;

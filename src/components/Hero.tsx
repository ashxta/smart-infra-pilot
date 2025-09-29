import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
      <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-foreground">AI-Powered Talent Matching</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          <span className="text-gradient bg-[length:200%_auto]">Smart Talent Acquisition</span>
          <br />
          <span className="text-foreground">for Campus Recruitments</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Revolutionize campus recruitment with our intelligent platform that seamlessly 
          connects talented graduates with ideal career opportunities through AI-powered matching.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link to="/students">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Explore Students
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link to="/analytics">
            <Button size="lg" variant="outline" className="border-border hover:bg-card">
              View Analytics
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl card-bordered space-y-2">
            <div className="text-3xl font-bold text-primary">4</div>
            <div className="text-xs text-success">+12%</div>
            <div className="text-sm text-muted-foreground">Registered candidates</div>
          </div>
          <div className="p-6 rounded-xl card-bordered space-y-2">
            <div className="text-3xl font-bold text-primary">2</div>
            <div className="text-xs text-success">+8%</div>
            <div className="text-sm text-muted-foreground">Ready for interviews</div>
          </div>
          <div className="p-6 rounded-xl card-bordered space-y-2">
            <div className="text-3xl font-bold text-primary">9.1</div>
            <div className="text-xs text-success">+3%</div>
            <div className="text-sm text-muted-foreground">Out of 10.0</div>
          </div>
          <div className="p-6 rounded-xl card-bordered space-y-2">
            <div className="text-3xl font-bold text-primary">4</div>
            <div className="text-xs text-muted-foreground">-</div>
            <div className="text-sm text-muted-foreground">Partner institutions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

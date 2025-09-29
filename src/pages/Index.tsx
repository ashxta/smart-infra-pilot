import StarryBackground from "@/components/StarryBackground";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <StarryBackground />
      <Hero />
      <Dashboard />
    </div>
  );
};

export default Index;

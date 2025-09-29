import Header from "@/components/Header";
import StarryBackground from "@/components/StarryBackground";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <StarryBackground />
      <Header />
      <Hero />
      <Features />
    </div>
  );
};

export default Index;

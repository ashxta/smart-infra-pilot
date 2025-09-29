import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const features = [
  {
    title: "Smart Search",
    description: "Advanced filtering with AI-powered matching algorithms for precise candidate discovery",
    icon: "🔍",
  },
  {
    title: "AI Matching",
    description: "Machine learning algorithms match student skills and interests with job requirements",
    icon: "🤖",
  },
  {
    title: "Real-time Analytics",
    description: "Comprehensive insights and trends to optimize your recruitment strategy",
    icon: "📊",
  },
];

const Features = () => {
  return (
    <section className="relative px-6 py-20 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm">Platform Features</span>
        </div>
        <h2 className="text-4xl font-bold">Intelligent Recruitment Solutions</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover our comprehensive suite of tools designed to streamline the recruitment process
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <Card
            key={idx}
            className="card-bordered p-6 space-y-4 hover:scale-[1.02] transition-all duration-300"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="text-4xl">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;

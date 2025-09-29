import Header from "@/components/Header";
import StarryBackground from "@/components/StarryBackground";
import RecruitmentTrendChart from "@/components/RecruitmentTrendChart";
import MetricsCard from "@/components/MetricsCard";
import { Users, GraduationCap, Building2, TrendingUp } from "lucide-react";

const Analytics = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <StarryBackground />
      <Header />
      
      <main className="relative px-6 pt-32 pb-20 max-w-7xl mx-auto">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Analytics Dashboard</h1>
            <p className="text-muted-foreground">
              Comprehensive insights and recruitment metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricsCard
              title="Total Students"
              value="4"
              change="+12% from last month"
              icon={Users}
              trend="up"
              delay={0}
            />
            <MetricsCard
              title="Available"
              value="2"
              change="+8% this week"
              icon={GraduationCap}
              trend="up"
              delay={0.1}
            />
            <MetricsCard
              title="Average CGPA"
              value="9.1"
              change="+0.3 improvement"
              icon={TrendingUp}
              trend="up"
              delay={0.2}
            />
            <MetricsCard
              title="Universities"
              value="4"
              change="Partner institutions"
              icon={Building2}
              trend="up"
              delay={0.3}
            />
          </div>

          <RecruitmentTrendChart />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-bordered p-6 space-y-4">
              <h3 className="text-xl font-semibold">Top Skills in Demand</h3>
              <div className="space-y-3">
                {[
                  { skill: "React", count: 3 },
                  { skill: "Python", count: 3 },
                  { skill: "Machine Learning", count: 2 },
                  { skill: "Node.js", count: 2 },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm">{item.skill}</span>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: `${(item.count / 4) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground">{item.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-bordered p-6 space-y-4">
              <h3 className="text-xl font-semibold">Placement Status</h3>
              <div className="space-y-3">
                {[
                  { status: "Available", count: 2, color: "bg-success" },
                  { status: "Interviewing", count: 1, color: "bg-warning" },
                  { status: "Placed", count: 1, color: "bg-primary" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="text-sm">{item.status}</span>
                    </div>
                    <span className="text-sm font-medium">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;

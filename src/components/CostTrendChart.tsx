import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Jan", cost: 12400, optimized: 8900 },
  { date: "Feb", cost: 13200, optimized: 9100 },
  { date: "Mar", cost: 14800, optimized: 9400 },
  { date: "Apr", cost: 13900, optimized: 8800 },
  { date: "May", cost: 15200, optimized: 9200 },
  { date: "Jun", cost: 14100, optimized: 8600 },
];

const CostTrendChart = () => {
  return (
    <Card className="card-glass p-6 col-span-full">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">Cost Trends</h3>
            <p className="text-sm text-muted-foreground">Monthly AWS spending overview</p>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-warning" />
              <span className="text-sm text-muted-foreground">Actual Cost</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">Optimized Cost</span>
            </div>
          </div>
        </div>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="date" 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: '12px' }}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  color: 'hsl(var(--foreground))',
                }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
              />
              <Line 
                type="monotone" 
                dataKey="cost" 
                stroke="hsl(var(--warning))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--warning))', r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="optimized" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--primary))', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};

export default CostTrendChart;

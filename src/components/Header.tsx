import { Button } from "@/components/ui/button";
import { Search, Bell, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Students", path: "/students" },
    { name: "Analytics", path: "/analytics" },
    { name: "Jobs", path: "/jobs" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" className="text-primary" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" className="text-primary" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-bold text-primary">Smart Talent</div>
              <div className="text-xs text-muted-foreground">Acquisition System</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button size="icon" variant="ghost" className="relative">
              <Search className="w-5 h-5" />
            </Button>
            <Button size="icon" variant="ghost" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </Button>
            <Button size="icon" variant="ghost">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

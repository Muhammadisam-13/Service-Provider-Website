import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { LogIn } from "lucide-react";

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/join", label: "Join" },
    { path: "/careers", label: "Careers" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold text-slate-800">
            Mehoona
          </Link>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-slate-700 hover:text-sky-600 transition-colors"
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition-colors">
          <LogIn className="w-4 h-4" />
          <span>Login / Sign Up</span>
        </button>
      </div>
    </nav>
  );
}

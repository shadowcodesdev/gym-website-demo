import { Link, Outlet, useLocation } from "react-router-dom";
import { Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Plans", path: "/plans" },
  { label: "Trainers", path: "/trainers" },
  { label: "BMI Calc", path: "/bmi" },
  { label: "Dashboard", path: "/dashboard" },
];

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200 cursor-default">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
              <Dumbbell className="w-5 h-5 text-amber-500" />
            </div>
            <span className="font-display font-semibold text-2xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
              TITAN
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors border-b-2 py-5 ${
                  location.pathname === item.path
                    ? "text-amber-400 border-amber-400"
                    : "text-zinc-400 hover:text-white border-transparent"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-zinc-800">
              <Link
                to="/plans"
                className="text-sm font-medium bg-amber-500 text-zinc-950 px-5 py-2 rounded-full hover:bg-amber-400 transition-all active:scale-95"
              >
                Join Now
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-zinc-900 border-b border-zinc-800 z-40 shadow-2xl"
          >
            <div className="px-4 py-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-amber-500/10 text-amber-400"
                      : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-zinc-800">
                <Link
                  to="/plans"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center text-zinc-950 bg-amber-500 px-5 py-3 rounded-xl font-medium hover:bg-amber-400 transition-colors"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <Dumbbell className="w-5 h-5 text-zinc-500" />
            <span className="font-display font-semibold text-lg text-zinc-500 tracking-wider">
              TITAN GYM
            </span>
          </div>
          <p className="text-sm text-zinc-600">
            &copy; {new Date().getFullYear()} Titan Fitness. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-500 font-medium pb-px">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

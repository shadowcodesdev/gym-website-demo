import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Play, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-zinc-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-[50%] top-0 -z-10 -translate-x-[50%] w-[800px] h-[600px] rounded-full bg-amber-500/10 blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Text Content */}
            <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 text-sm font-medium mb-8"
              >
                <span className="flex h-2 w-2 rounded-full bg-amber-500"></span>
                Welcome to the new standard of fitness
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display text-5xl sm:text-7xl font-bold tracking-tight text-white leading-[1.05]"
              >
                Forged in <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
                  Iron & Sweat.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-lg sm:text-xl text-zinc-400 leading-relaxed"
              >
                Titan Gym isn't just a place to workout; it's a facility engineered
                for those who demand the best from themselves. State-of-the-art equipment,
                elite trainers, and a community of high achievers.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Link
                  to="/plans"
                  className="w-full sm:w-auto px-8 py-4 bg-amber-500 text-zinc-950 rounded-full font-medium shadow-[0_0_40px_rgba(245, 158, 11,0.3)] hover:bg-amber-400 hover:shadow-[0_0_60px_rgba(245, 158, 11,0.4)] transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/trainers"
                  className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white rounded-full font-medium hover:bg-zinc-800 transition-colors active:scale-95 flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Meet the Team
                </Link>
              </motion.div>
            </div>

            {/* Image/Visual Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="relative mx-auto w-full max-w-lg lg:max-w-none"
            >
              <div className="relative rounded-3xl bg-zinc-900 border border-zinc-800 p-2 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-3xl pointer-events-none"></div>
                <div className="aspect-[4/5] rounded-2xl bg-zinc-950 overflow-hidden relative border border-zinc-800/50 flex flex-col p-6">
                  {/* Mock UI inside the hero visual */}
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <div className="text-zinc-500 text-xs font-semibold tracking-wider mb-1">TODAY'S PLAN</div>
                      <div className="text-2xl font-display font-medium text-white">Full Body Power</div>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    {[
                      { name: "Barbell Squat", sets: "4x8", weight: "140kg" },
                      { name: "Bench Press", sets: "4x10", weight: "100kg" },
                      { name: "Deadlift", sets: "3x5", weight: "180kg" },
                    ].map((exercise, i) => (
                      <div key={i} className="flex justify-between items-center p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                        <div>
                          <div className="text-sm font-medium text-white">{exercise.name}</div>
                          <div className="text-xs text-zinc-500">{exercise.sets}</div>
                        </div>
                        <div className="text-sm font-medium text-amber-400">{exercise.weight}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 rounded-xl bg-amber-500 text-zinc-950 flex items-center justify-between">
                    <span className="font-semibold">Start Session</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
              
              {/* Decorative Floating Elements */}
              <div className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold">
                  24/7
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Open Access</div>
                  <div className="text-xs text-zinc-400">For Premium Members</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 border-y border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <p className="text-center text-sm font-medium text-zinc-500 mb-8 uppercase tracking-widest">
            Amenities that elevate your game
           </p>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                "Olympic Weightlifting Area", 
                "Recovery Sauna & Ice Baths", 
                "Turf Conditioning Zone", 
                "In-House Nutrition Cafe"
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <span className="text-sm text-zinc-300 font-medium">{item}</span>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}

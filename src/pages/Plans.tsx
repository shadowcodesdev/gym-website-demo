import { useState } from "react";
import { Check, Dumbbell, Shield, Star, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import type { MembershipPlan } from "../types";

const PLANS: MembershipPlan[] = [
  {
    id: "basic",
    name: "Basic Access",
    price: 49,
    interval: "month",
    features: [
      "Access to gym floor",
      "Standard locker use",
      "Free initial assessment",
      "App access (Basic)",
    ]
  },
  {
    id: "premium",
    name: "Premium",
    price: 89,
    interval: "month",
    recommended: true,
    features: [
      "24/7 Access to all facilities",
      "Unlimited group classes",
      "Premium locker room & Towel service",
      "1 PT session per month",
      "App access (Pro)",
    ]
  },
  {
    id: "vip",
    name: "Titan VIP",
    price: 199,
    interval: "month",
    features: [
      "Everything in Premium",
      "Dedicated personal locker",
      "Weekly 1-on-1 PT sessions",
      "Nutrition coaching & meal plans",
      "Guest passes (2/month)",
    ]
  }
];

export function Plans() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      
      {!selectedPlan ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Choose your rank.
            </h1>
            <p className="text-lg text-zinc-400">
              Select a tier that matches your ambition. No hidden fees, cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PLANS.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 border ${
                  plan.recommended 
                    ? "bg-zinc-900 border-amber-500 shadow-[0_0_30px_rgba(245, 158, 11,0.15)]" 
                    : "bg-zinc-900/50 border-zinc-800"
                } flex flex-col`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-zinc-950 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                    <Star className="w-3 h-3" /> Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-display font-medium text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-zinc-500">/{plan.interval}</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-zinc-300">
                      <Check className="w-5 h-5 text-amber-500 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-4 rounded-xl font-medium transition-colors ${
                    plan.recommended
                      ? "bg-amber-500 text-zinc-950 hover:bg-amber-400"
                      : "bg-zinc-800 text-white hover:bg-zinc-700"
                  }`}
                >
                  Select Plan
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-xl mx-auto"
            >
              <button 
                onClick={() => setSelectedPlan(null)}
                className="text-zinc-500 hover:text-white text-sm mb-8 flex items-center"
              >
                &larr; Back to plans
              </button>
              
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-[80px]"></div>

                <div className="mb-8">
                  <h2 className="font-display text-3xl font-bold text-white mb-2">Join Titan.</h2>
                  <p className="text-zinc-400">
                    You're selecting the <span className="text-amber-400 font-semibold">{PLANS.find(p => p.id === selectedPlan)?.name}</span> plan.
                  </p>
                </div>

                <form onSubmit={handleRegister} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-300">First Name</label>
                      <input required type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-300">Last Name</label>
                      <input required type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Email Address</label>
                    <input required type="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" placeholder="john@example.com" />
                  </div>

                  {/* Payment Info mock */}
                  <div className="pt-4 mt-6 border-t border-zinc-800">
                    <h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-amber-500" /> Payment Information
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Card Number</label>
                        <input required type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white font-mono placeholder:font-sans focus:outline-none focus:border-amber-500 transition-colors" placeholder="0000 0000 0000 0000" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Expiry</label>
                          <input required type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">CVC</label>
                          <input required type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="123" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-8 bg-amber-500 text-zinc-950 font-semibold py-4 rounded-xl hover:bg-amber-400 transition-colors flex justify-center items-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>Complete Registration</>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto text-center py-20"
            >
              <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-amber-500/30">
                <Check className="w-10 h-10 text-amber-400" />
              </div>
              <h2 className="font-display text-4xl font-bold text-white mb-4">Welcome to Titan.</h2>
              <p className="text-zinc-400 mb-8">
                Your membership is now active. We've sent a welcome email with your digital access card and app login details.
              </p>
              <button 
                onClick={() => {
                  setIsSuccess(false);
                  setSelectedPlan(null);
                }}
                className="text-amber-400 font-medium hover:text-amber-300"
              >
                Return to Plans
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

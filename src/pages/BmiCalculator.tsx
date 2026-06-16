import { useState } from "react";
import { Calculator } from "lucide-react";
import { motion } from "motion/react";

export function BmiCalculator() {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height) / 100; // cm to m
    const w = parseFloat(weight);
    
    if (h > 0 && w > 0) {
      const result = w / (h * h);
      setBmi(Math.round(result * 10) / 10);
    }
  };

  const getBmiCategory = (value: number) => {
    if (value < 18.5) return { category: "Underweight", color: "text-blue-400" };
    if (value >= 18.5 && value < 25) return { category: "Normal Weight", color: "text-amber-400" };
    if (value >= 25 && value < 30) return { category: "Overweight", color: "text-yellow-400" };
    return { category: "Obese", color: "text-red-400" };
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex-1 flex flex-col justify-center">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 border border-amber-500/20">
              <Calculator className="w-6 h-6 text-amber-500" />
            </div>
            <h1 className="font-display text-4xl font-bold text-white mb-4">
              BMI Calculator
            </h1>
            <p className="text-zinc-400 mb-8">
              Body Mass Index (BMI) is a simple calculation using a person's height and weight. 
              Find out your category and take the first step towards a healthier you.
            </p>

            <form onSubmit={calculateBMI} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Height (cm)</label>
                <input 
                  type="number" 
                  required
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" 
                  placeholder="175" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Weight (kg)</label>
                <input 
                  type="number" 
                  required
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" 
                  placeholder="70" 
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-amber-500 text-zinc-950 font-semibold py-4 rounded-xl hover:bg-amber-400 transition-colors"
              >
                Calculate BMI
              </button>
            </form>
          </div>

          <div className="h-full flex items-center justify-center">
            {bmi !== null ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-8 text-center"
              >
                <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2">Your BMI is</div>
                <div className="text-6xl font-display font-bold text-white mb-4">{bmi}</div>
                <div className={`text-xl font-medium ${getBmiCategory(bmi).color}`}>
                  {getBmiCategory(bmi).category}
                </div>
                
                <div className="mt-8 pt-8 border-t border-zinc-800 text-sm text-zinc-400">
                  Ready to optimize your health?
                  <br/>
                  <a href="/plans" className="text-amber-400 hover:text-amber-300 font-medium mt-2 inline-block">View our membership plans &rarr;</a>
                </div>
              </motion.div>
            ) : (
              <div className="w-full aspect-square border-2 border-dashed border-zinc-800 rounded-2xl flex flex-col items-center justify-center text-zinc-500 p-8 text-center bg-zinc-950/50">
                <Calculator className="w-12 h-12 mb-4 opacity-50" />
                <p>Enter your details and hit calculate to see your results here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { motion } from "motion/react";
import { Mail, Award, Clock } from "lucide-react";
import type { Trainer } from "../types";

const TRAINERS: Trainer[] = [
  {
    id: "1",
    name: "Marcus Vance",
    specialty: "Strength & Conditioning",
    certifications: ["CSCS", "CrossFit Level 2", "USAW Sports Performance"],
    experience: "10+ Years",
    bio: "Marcus specializes in building raw strength and athletic conditioning. His no-nonsense approach to heavy lifting has helped dozens of athletes reach their peak performance.",
    imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "2",
    name: "Elena Rostova",
    specialty: "Mobility & Yoga",
    certifications: ["E-RYT 500", "FMS Level 1"],
    experience: "8 Years",
    bio: "Elena focuses on longevity, flexibility, and biomechanics. She believes that true strength requires absolute control over your body's full range of motion.",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "3",
    name: "David Chen",
    specialty: "HIIT & Weight Loss",
    certifications: ["NASM-CPT", "Precision Nutrition L1"],
    experience: "5 Years",
    bio: "David's high-energy sessions are designed to maximize caloric burn and improve cardiovascular endurance in minimal time. Be ready to sweat.",
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400&q=80"
  }
];

export function Trainers() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
          Elite Coaching.
        </h1>
        <p className="text-lg text-zinc-400">
          Work with industry veterans. Whether your goal is raw power, fat loss, or mobility,
          our trainers will forge your path.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TRAINERS.map((trainer, index) => (
          <motion.div
            key={trainer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group rounded-3xl bg-zinc-900 border border-zinc-800 overflow-hidden"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10 pointer-events-none"></div>
              <img 
                src={trainer.imageUrl} 
                alt={trainer.name}
                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                <div className="text-amber-400 text-sm font-semibold tracking-wider uppercase mb-1 drop-shadow-md">
                  {trainer.specialty}
                </div>
                <h3 className="text-3xl font-display font-bold text-white drop-shadow-md">{trainer.name}</h3>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {trainer.bio}
              </p>
              
              <div className="space-y-3 mb-6">
                 <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span>{trainer.experience} Experience</span>
                 </div>
                 <div className="flex items-start gap-3 text-sm text-zinc-300">
                    <Award className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                    <div className="flex flex-col gap-1">
                      {trainer.certifications.map((cert, i) => (
                        <span key={i} className="leading-none">{cert}</span>
                      ))}
                    </div>
                 </div>
              </div>

              <button className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" /> Book Session
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

import { Activity, Flame, Timer, TrendingUp, Dumbbell } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import type { WorkoutLog } from "../types";

const WORKOUT_HISTORY = [
  { day: 'Mon', calories: 450, duration: 45 },
  { day: 'Tue', calories: 650, duration: 60 },
  { day: 'Wed', calories: 0, duration: 0 },
  { day: 'Thu', calories: 500, duration: 50 },
  { day: 'Fri', calories: 800, duration: 75 },
  { day: 'Sat', calories: 400, duration: 40 },
  { day: 'Sun', calories: 300, duration: 30 },
];

const WEIGHT_PROGRESS = [
  { month: 'Jan', weight: 82 },
  { month: 'Feb', weight: 81.5 },
  { month: 'Mar', weight: 80.2 },
  { month: 'Apr', weight: 79.5 },
  { month: 'May', weight: 78.8 },
  { month: 'Jun', weight: 78.0 },
];

const RECENT_WORKOUTS: WorkoutLog[] = [
  { id: '1', date: 'Today', duration: 45, calories: 450, type: 'Strength Training' },
  { id: '2', date: 'Yesterday', duration: 30, calories: 320, type: 'HIIT' },
  { id: '3', date: 'Wed, Oct 24', duration: 60, calories: 600, type: 'Cardio' },
];

export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold text-white mb-1">Welcome back, Alex.</h1>
          <p className="text-zinc-400">Here's your progress overview.</p>
        </div>
        <button className="bg-amber-500 text-zinc-950 px-5 py-2.5 rounded-full font-medium shadow-lg hover:bg-amber-400 transition-all flex items-center gap-2 text-sm">
          <Dumbbell className="w-4 h-4" /> Log Workout
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Workouts", value: "24", icon: <Activity className="w-5 h-5 text-amber-500" />, trend: "+12% this month" },
          { label: "Active Calories", value: "14,200", icon: <Flame className="w-5 h-5 text-orange-500" />, trend: "+5% this week" },
          { label: "Time Active", value: "18h 30m", icon: <Timer className="w-5 h-5 text-blue-500" />, trend: "On track" },
          { label: "Current Weight", value: "78.0 kg", icon: <TrendingUp className="w-5 h-5 text-purple-500" />, trend: "-0.8kg since last month" },
        ].map((stat, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-950 flex items-center justify-center border border-zinc-800">
                {stat.icon}
              </div>
            </div>
            <div className="text-sm font-medium text-zinc-400 mb-1">{stat.label}</div>
            <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-xs text-zinc-500">{stat.trend}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-medium text-white">Activity Timeline</h2>
            <select className="bg-zinc-950 border border-zinc-800 text-sm text-zinc-400 rounded-lg px-3 py-1 focus:outline-none">
              <option>This Week</option>
              <option>Last Week</option>
            </select>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={WORKOUT_HISTORY} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="day" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                  cursor={{ fill: '#27272a', opacity: 0.4 }}
                />
                <Bar dataKey="calories" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Secondary Info */}
        <div className="space-y-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h2 className="font-medium text-white mb-6">Weight Progression</h2>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={WEIGHT_PROGRESS} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                  <XAxis dataKey="month" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis domain={['dataMin - 2', 'dataMax + 2']} stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '12px' }}
                  />
                  <Area type="monotone" dataKey="weight" stroke="#f59e0b" strokeWidth={2} fillOpacity={1} fill="url(#colorWeight)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h2 className="font-medium text-white mb-6">Recent Workouts</h2>
            <div className="space-y-4">
              {RECENT_WORKOUTS.map((workout) => (
                <div key={workout.id} className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/50 border border-zinc-800/50">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center">
                      <Dumbbell className="w-4 h-4 text-amber-500" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{workout.type}</div>
                      <div className="text-xs text-zinc-500">{workout.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-amber-400">{workout.calories} kcal</div>
                    <div className="text-xs text-zinc-500">{workout.duration}m</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

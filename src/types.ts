export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  certifications: string[];
  experience: string;
  bio: string;
  imageUrl: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  interval: string;
  features: string[];
  recommended?: boolean;
}

export interface WorkoutLog {
  id: string;
  date: string;
  duration: number; // minutes
  calories: number;
  type: string;
}

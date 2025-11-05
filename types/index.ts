export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  dateOfBirth?: string;
  gender?: 'male' | 'female' | 'other';
  bloodType?: string;
  allergies?: string[];
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  experience: number;
  avatar: string;
  availability: 'available' | 'busy' | 'offline';
  consultationFee: number;
  languages: string[];
  bio?: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctor: Doctor;
  date: string;
  time: string;
  type: 'video' | 'voice' | 'chat';
  status: 'upcoming' | 'completed' | 'cancelled';
  notes?: string;
}

export interface Medicine {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  manufacturer: string;
  requiresPrescription: boolean;
  inStock: boolean;
  image?: string;
  dosage?: string;
}

export interface Order {
  id: string;
  items: {
    medicine: Medicine;
    quantity: number;
  }[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  orderDate: string;
  deliveryAddress: string;
}

export interface LabTest {
  id: string;
  name: string;
  description: string;
  price: number;
  preparationRequired: boolean;
  preparationInstructions?: string;
  estimatedTime: string;
  category: string;
}

export interface LabAppointment {
  id: string;
  test: LabTest;
  date: string;
  time: string;
  location: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface LabResult {
  id: string;
  testId: string;
  testName: string;
  date: string;
  results: {
    parameter: string;
    value: string;
    normalRange: string;
    status: 'normal' | 'high' | 'low';
  }[];
  doctorNotes?: string;
}

export interface MealPlan {
  id: string;
  name: string;
  description: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  meals: Meal[];
  duration: number; // days
  price: number;
  image?: string;
}

export interface Meal {
  id: string;
  name: string;
  description: string;
  calories: number;
  image?: string;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  ingredients: string[];
}

export interface HealthMetric {
  id: string;
  type: 'weight' | 'blood_pressure' | 'heart_rate' | 'glucose' | 'steps';
  value: string;
  date: string;
  unit: string;
}

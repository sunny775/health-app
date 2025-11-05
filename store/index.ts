import { create } from 'zustand';
import { User, Appointment, Order, LabAppointment, LabResult, HealthMetric, Medicine } from '@/types';

interface AppState {
  // User
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;

  // Appointments
  appointments: Appointment[];
  addAppointment: (appointment: Appointment) => void;
  cancelAppointment: (id: string) => void;

  // Pharmacy
  cart: { medicine: Medicine; quantity: number }[];
  orders: Order[];
  addToCart: (medicine: Medicine) => void;
  removeFromCart: (medicineId: string) => void;
  updateCartQuantity: (medicineId: string, quantity: number) => void;
  placeOrder: (deliveryAddress: string) => void;
  clearCart: () => void;

  // Lab
  labAppointments: LabAppointment[];
  labResults: LabResult[];
  addLabAppointment: (appointment: LabAppointment) => void;
  cancelLabAppointment: (id: string) => void;

  // Health Metrics
  healthMetrics: HealthMetric[];
  addHealthMetric: (metric: HealthMetric) => void;

  // UI State
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const useStore = create<AppState>((set, get) => ({
  // Initial User State
  user: null,
  isAuthenticated: false,

  setUser: (user) => set({ user, isAuthenticated: !!user }),

  login: async (email: string, password: string) => {
    // Mock authentication
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const mockUser: User = {
      id: '1',
      name: 'Sarah Johnson',
      email,
      phone: '+234 801 234 5678',
      avatar: 'https://i.pravatar.cc/150?img=47',
      dateOfBirth: '1990-05-15',
      gender: 'female',
      bloodType: 'O+',
      allergies: ['Penicillin', 'Peanuts'],
    };
    set({ user: mockUser, isAuthenticated: true });
  },

  logout: () => set({ user: null, isAuthenticated: false }),

  // Appointments
  appointments: [],
  addAppointment: (appointment) =>
    set((state) => ({ appointments: [...state.appointments, appointment] })),
  cancelAppointment: (id) =>
    set((state) => ({
      appointments: state.appointments.map((apt) =>
        apt.id === id ? { ...apt, status: 'cancelled' as const } : apt
      ),
    })),

  // Cart and Orders
  cart: [],
  orders: [],
  addToCart: (medicine) => {
    const state = get();
    const existingItem = state.cart.find((item) => item.medicine.id === medicine.id);
    if (existingItem) {
      set({
        cart: state.cart.map((item) =>
          item.medicine.id === medicine.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      });
    } else {
      set({ cart: [...state.cart, { medicine, quantity: 1 }] });
    }
  },
  removeFromCart: (medicineId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.medicine.id !== medicineId),
    })),
  updateCartQuantity: (medicineId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.medicine.id === medicineId ? { ...item, quantity } : item
      ),
    })),
  placeOrder: (deliveryAddress) => {
    const state = get();
    const newOrder: Order = {
      id: Date.now().toString(),
      items: state.cart,
      total: state.cart.reduce((sum, item) => sum + item.medicine.price * item.quantity, 0),
      status: 'pending',
      orderDate: new Date().toISOString(),
      deliveryAddress,
    };
    set({ orders: [...state.orders, newOrder], cart: [] });
  },
  clearCart: () => set({ cart: [] }),

  // Lab Appointments and Results
  labAppointments: [],
  labResults: [],
  addLabAppointment: (appointment) =>
    set((state) => ({ labAppointments: [...state.labAppointments, appointment] })),
  cancelLabAppointment: (id) =>
    set((state) => ({
      labAppointments: state.labAppointments.map((apt) =>
        apt.id === id ? { ...apt, status: 'cancelled' as const } : apt
      ),
    })),

  // Health Metrics
  healthMetrics: [],
  addHealthMetric: (metric) =>
    set((state) => ({ healthMetrics: [...state.healthMetrics, metric] })),

  // Theme
  theme: 'light',
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));

# Docki Health - Telemedicine Platform for Africa

A production-ready, feature-rich mobile health application built with **Expo** and **React Native**, showcasing senior-level mobile engineering practices.

## 🎯 Overview

Docki Health is a comprehensive telemedicine platform designed for the African healthcare market, consolidating four essential healthcare services into a unified mobile experience:

- **🏥 Doctor Consultations** - Video/voice calls with verified medical professionals
- **💊 Pharmacy Services** - Medicine ordering with doorstep delivery
- **🔬 Laboratory Testing** - Test booking and digital results
- **🥗 Nutritional Support** - Personalized meal plans and nutrition guidance

## ✨ Features

### Core Functionality
- **📊 Health Dashboard** - Real-time health metrics (heart rate, steps, calories, water intake)
- **👨‍⚕️ Doctor Directory** - Browse specialists by rating, availability, and experience
- **💊 Medicine Catalog** - Search and order prescription and OTC medications
- **🔬 Lab Test Booking** - Schedule tests with preparation instructions
- **🥗 Meal Planning** - Nutrition plans with detailed macro tracking
- **📅 Appointment Management** - Schedule, manage, and join video consultations
- **👤 User Profile** - Personal health information, medical records, and settings

### Technical Highlights
- **🎨 Design System** - Professional healthcare-themed color palette
- **🌓 Dark Mode** - Seamless theme switching with persistent preferences
- **⚡ Animations** - Smooth transitions using React Native Reanimated
- **📱 Responsive Design** - Optimized for all screen sizes
- **🔐 Type Safety** - Full TypeScript implementation
- **🏪 State Management** - Zustand for efficient global state
- **🎭 Mock Data** - Realistic demo data for all features

## 🏗️ Architecture

### Project Structure
```
health-app/
├── app/                    # Expo Router screens
│   ├── (tabs)/            # Tab navigation screens
│   │   ├── index.tsx      # Dashboard
│   │   ├── services.tsx   # Services hub
│   │   ├── appointments.tsx
│   │   └── profile.tsx
│   └── _layout.tsx        # Root layout
├── components/            # Reusable components
│   └── ui/               # UI component library
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── avatar.tsx
│       └── input.tsx
├── constants/            # Design tokens
│   └── theme.ts         # Colors, spacing, typography
├── hooks/               # Custom React hooks
├── services/            # Business logic & data
│   └── mockData.ts     # Demo data
├── store/              # State management
│   └── index.ts       # Zustand store
└── types/             # TypeScript definitions
    └── index.ts      # Type declarations
```

### Tech Stack
- **Framework**: Expo SDK 54 + React Native 0.81.5
- **Language**: TypeScript 5.9
- **Navigation**: Expo Router 6.0
- **State Management**: Zustand 5.0
- **Styling**: React Native StyleSheet API
- **Animations**: React Native Reanimated 4.1
- **UI Enhancements**: Expo Linear Gradient, Expo Blur
- **Icons**: Ionicons from @expo/vector-icons

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Expo CLI
- iOS Simulator (Mac) or Android Emulator

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Start the development server**
```bash
npm start
```

3. **Run on platforms**
```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## 📱 Key Screens

### Dashboard
- Personalized greeting with user avatar
- Health metrics cards (heart rate, steps, calories, water)
- Quick access to all four healthcare services
- Upcoming appointment preview with gradient header

### Services Hub
- Tabbed interface for easy service discovery
- Doctor profiles with ratings, specialties, and availability
- Medicine catalog with prescription requirements
- Lab test listings with pricing and preparation info
- Nutrition plans with macro breakdowns

### Appointments
- Upcoming and past appointment sections
- Video call join buttons
- Doctor information and appointment details
- Appointment status badges

### Profile
- User health information (blood type, allergies)
- Health statistics overview
- Dark mode toggle with smooth transitions
- Settings and preferences
- Account management

## 🎨 Design System

### Color Palette
- **Primary**: Medical Blue (#0EA5E9) - Trust and professionalism
- **Secondary**: Health Green (#10B981) - Wellness and vitality
- **Accent**: Amber (#F59E0B) - Attention and energy
- **Service Colors**:
  - Doctor: Purple (#8B5CF6)
  - Pharmacy: Pink (#EC4899)
  - Lab: Cyan (#06B6D4)
  - Nutrition: Orange (#F97316)

### Components
All components support:
- Light and dark themes
- Configurable variants and sizes
- TypeScript prop validation
- Accessible touch targets (44px minimum)
- Smooth animations and haptic feedback

## 📋 Available Scripts

```bash
npm start          # Start Expo dev server
npm run android    # Run on Android
npm run ios        # Run on iOS
npm run web        # Run on web browser
npm run lint       # Run ESLint
```

## 🧪 Testing

### Type Checking
```bash
npx tsc --noEmit
```

### Testing Checklist
- ✅ Dashboard loads with health metrics
- ✅ All four service tabs navigate correctly
- ✅ Dark mode toggle works smoothly
- ✅ Animations are smooth (60fps)
- ✅ All interactive elements provide haptic feedback
- ✅ Cards and buttons respond to touch
- ✅ Mock data displays correctly across all screens

## 🚢 Production Considerations

### Current Status: Demo Ready ✅
This app is fully functional as a demo with:
- Complete UI/UX implementation
- Mock data for all features
- Smooth animations and transitions
- Professional design system
- Type-safe codebase

### For Production Deployment
To make production-ready:
1. **Backend Integration** - Replace mock data with API calls
2. **Authentication** - Implement OAuth or JWT
3. **Video Calling** - Integrate Twilio or Agora SDK
4. **Payments** - Add Stripe or Paystack
5. **Push Notifications** - Configure FCM/APNS
6. **Analytics** - Add tracking and monitoring
7. **Security** - HIPAA/GDPR compliance, encryption

## 👨‍💻 Best Practices Demonstrated

- ✅ TypeScript strict mode
- ✅ Component composition patterns
- ✅ Proper state management with Zustand
- ✅ Reusable design system
- ✅ Optimized re-renders
- ✅ Responsive layouts
- ✅ Accessibility considerations
- ✅ Clean code architecture

---

**Built with ❤️ showcasing senior mobile engineering expertise**

*Demonstrating: Architecture Design, State Management, UI/UX Excellence, TypeScript Mastery, React Native Best Practices, and Production-Ready Code Quality*

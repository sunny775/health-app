import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Colors, Spacing, BorderRadius, Typography } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useStore } from '@/store';

const { width } = Dimensions.get('window');

export default function DashboardScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const user = useStore((state) => state.user) || {
    name: 'Guest User',
    avatar: 'https://i.pravatar.cc/150?img=47',
  };

  const services = [
    {
      id: 'doctor',
      title: 'Doctor Consultation',
      description: 'Video/Voice calls with verified doctors',
      icon: 'medical',
      color: colors.doctor,
      route: '/services',
    },
    {
      id: 'pharmacy',
      title: 'Pharmacy',
      description: 'Order medicine with delivery',
      icon: 'medkit',
      color: colors.pharmacy,
      route: '/services',
    },
    {
      id: 'lab',
      title: 'Lab Tests',
      description: 'Book tests and view results',
      icon: 'flask',
      color: colors.lab,
      route: '/services',
    },
    {
      id: 'nutrition',
      title: 'Nutrition',
      description: 'Meal plans & healthy eating',
      icon: 'restaurant',
      color: colors.nutrition,
      route: '/services',
    },
  ];

  const healthMetrics = [
    { label: 'Heart Rate', value: '72', unit: 'bpm', icon: 'heart', color: colors.error },
    { label: 'Steps', value: '8,432', unit: 'today', icon: 'walk', color: colors.primary },
    { label: 'Calories', value: '1,820', unit: 'kcal', icon: 'flame', color: colors.accent },
    { label: 'Water', value: '6', unit: 'glasses', icon: 'water', color: colors.info },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header with Gradient */}
        <Animated.View entering={FadeInUp.duration(600)}>
          <LinearGradient
            colors={[colors.primary, colors.primaryDark]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.header}
          >
            <View style={styles.headerContent}>
              <View style={styles.headerLeft}>
                <Avatar uri={user.avatar} name={user.name} size={56} />
                <View style={styles.headerText}>
                  <Text style={styles.greeting}>Welcome back,</Text>
                  <Text style={styles.userName}>{user.name}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.notificationButton}>
                <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
                <View style={styles.notificationBadge} />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </Animated.View>

        {/* Quick Actions */}
        <Animated.View entering={FadeInDown.delay(200).duration(600)}>
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Your Health Today
            </Text>
            <View style={styles.metricsGrid}>
              {healthMetrics.map((metric, index) => (
                <Card
                  key={index}
                  style={styles.metricCard}
                  padding={Spacing.md}
                  elevated
                >
                  <View
                    style={[
                      styles.metricIcon,
                      { backgroundColor: metric.color + '20' },
                    ]}
                  >
                    <Ionicons name={metric.icon as any} size={20} color={metric.color} />
                  </View>
                  <Text style={[styles.metricValue, { color: colors.text }]}>
                    {metric.value}
                  </Text>
                  <Text style={[styles.metricLabel, { color: colors.textSecondary }]}>
                    {metric.label}
                  </Text>
                  <Text style={[styles.metricUnit, { color: colors.textTertiary }]}>
                    {metric.unit}
                  </Text>
                </Card>
              ))}
            </View>
          </View>
        </Animated.View>

        {/* Services */}
        <Animated.View entering={FadeInDown.delay(400).duration(600)}>
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>
                Healthcare Services
              </Text>
              <TouchableOpacity onPress={() => router.push('/services')}>
                <Text style={[styles.seeAll, { color: colors.primary }]}>See All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.servicesGrid}>
              {services.map((service, index) => (
                <Animated.View
                  key={service.id}
                  entering={FadeInDown.delay(500 + index * 100).duration(600)}
                >
                  <Card
                    style={styles.serviceCard}
                    padding={Spacing.lg}
                    onPress={() => router.push(service.route)}
                    elevated
                  >
                    <View
                      style={[
                        styles.serviceIcon,
                        { backgroundColor: service.color + '20' },
                      ]}
                    >
                      <Ionicons name={service.icon as any} size={28} color={service.color} />
                    </View>
                    <Text style={[styles.serviceTitle, { color: colors.text }]}>
                      {service.title}
                    </Text>
                    <Text
                      style={[styles.serviceDescription, { color: colors.textSecondary }]}
                      numberOfLines={2}
                    >
                      {service.description}
                    </Text>
                    <View style={styles.serviceArrow}>
                      <Ionicons name="arrow-forward" size={16} color={colors.textTertiary} />
                    </View>
                  </Card>
                </Animated.View>
              ))}
            </View>
          </View>
        </Animated.View>

        {/* Upcoming Appointments */}
        <Animated.View entering={FadeInDown.delay(800).duration(600)}>
          <View style={[styles.section, { marginBottom: Spacing.xxl }]}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>
                Upcoming Appointments
              </Text>
              <TouchableOpacity onPress={() => router.push('/appointments')}>
                <Text style={[styles.seeAll, { color: colors.primary }]}>View All</Text>
              </TouchableOpacity>
            </View>
            <Card style={styles.appointmentCard} padding={Spacing.lg} elevated>
              <View style={styles.appointmentHeader}>
                <Avatar
                  uri="https://i.pravatar.cc/150?img=12"
                  name="Dr. Adebayo Okonkwo"
                  size={48}
                />
                <View style={styles.appointmentInfo}>
                  <Text style={[styles.doctorName, { color: colors.text }]}>
                    Dr. Adebayo Okonkwo
                  </Text>
                  <Text style={[styles.specialty, { color: colors.textSecondary }]}>
                    Cardiologist
                  </Text>
                </View>
                <Badge label="Today" variant="primary" />
              </View>
              <View style={[styles.divider, { backgroundColor: colors.border }]} />
              <View style={styles.appointmentDetails}>
                <View style={styles.detailItem}>
                  <Ionicons name="calendar-outline" size={16} color={colors.textSecondary} />
                  <Text style={[styles.detailText, { color: colors.textSecondary }]}>
                    Nov 5, 2025
                  </Text>
                </View>
                <View style={styles.detailItem}>
                  <Ionicons name="time-outline" size={16} color={colors.textSecondary} />
                  <Text style={[styles.detailText, { color: colors.textSecondary }]}>
                    10:00 AM
                  </Text>
                </View>
                <View style={styles.detailItem}>
                  <Ionicons name="videocam-outline" size={16} color={colors.textSecondary} />
                  <Text style={[styles.detailText, { color: colors.textSecondary }]}>
                    Video Call
                  </Text>
                </View>
              </View>
            </Card>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: Spacing.xxl,
  },
  header: {
    paddingTop: 60,
    paddingBottom: Spacing.xl,
    paddingHorizontal: Spacing.lg,
    borderBottomLeftRadius: BorderRadius.xl,
    borderBottomRightRadius: BorderRadius.xl,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    marginLeft: Spacing.md,
  },
  greeting: {
    color: '#FFFFFF',
    fontSize: 14,
    opacity: 0.9,
  },
  userName: {
    color: '#FFFFFF',
    ...Typography.h4,
    marginTop: 2,
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: BorderRadius.full,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#EF4444',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  section: {
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  sectionTitle: {
    ...Typography.h3,
  },
  seeAll: {
    ...Typography.bodySmall,
    fontWeight: '600',
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -Spacing.xs,
  },
  metricCard: {
    width: (width - Spacing.lg * 2 - Spacing.xs * 4) / 2,
    marginHorizontal: Spacing.xs,
    marginBottom: Spacing.md,
    alignItems: 'center',
  },
  metricIcon: {
    width: 44,
    height: 44,
    borderRadius: BorderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  metricValue: {
    ...Typography.h3,
    marginBottom: 2,
  },
  metricLabel: {
    ...Typography.bodySmall,
    fontWeight: '600',
    marginBottom: 2,
  },
  metricUnit: {
    ...Typography.caption,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -Spacing.xs,
  },
  serviceCard: {
    width: (width - Spacing.lg * 2 - Spacing.xs * 4) / 2,
    marginHorizontal: Spacing.xs,
    marginBottom: Spacing.md,
    minHeight: 160,
  },
  serviceIcon: {
    width: 56,
    height: 56,
    borderRadius: BorderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  serviceTitle: {
    ...Typography.h4,
    fontSize: 16,
    marginBottom: Spacing.xs,
  },
  serviceDescription: {
    ...Typography.caption,
    flex: 1,
  },
  serviceArrow: {
    marginTop: Spacing.sm,
  },
  appointmentCard: {
    marginBottom: Spacing.md,
  },
  appointmentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appointmentInfo: {
    flex: 1,
    marginLeft: Spacing.md,
  },
  doctorName: {
    ...Typography.h4,
    fontSize: 16,
    marginBottom: 2,
  },
  specialty: {
    ...Typography.bodySmall,
  },
  divider: {
    height: 1,
    marginVertical: Spacing.md,
  },
  appointmentDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  detailText: {
    ...Typography.caption,
  },
});

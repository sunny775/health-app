import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Colors, Spacing, BorderRadius, Typography } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useStore } from '@/store';

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const user = useStore((state) => state.user) || {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+234 801 234 5678',
    avatar: 'https://i.pravatar.cc/150?img=47',
    bloodType: 'O+',
    allergies: ['Penicillin', 'Peanuts'],
  };

  const theme = useStore((state) => state.theme);
  const toggleTheme = useStore((state) => state.toggleTheme);

  const menuItems = [
    {
      icon: 'person-outline',
      title: 'Personal Information',
      subtitle: 'Update your details',
      onPress: () => {},
    },
    {
      icon: 'medical-outline',
      title: 'Medical Records',
      subtitle: 'View your health history',
      onPress: () => {},
    },
    {
      icon: 'card-outline',
      title: 'Payment Methods',
      subtitle: 'Manage payment options',
      onPress: () => {},
    },
    {
      icon: 'notifications-outline',
      title: 'Notifications',
      subtitle: 'Manage notification preferences',
      onPress: () => {},
    },
    {
      icon: 'shield-checkmark-outline',
      title: 'Privacy & Security',
      subtitle: 'Control your privacy settings',
      onPress: () => {},
    },
    {
      icon: 'help-circle-outline',
      title: 'Help & Support',
      subtitle: 'Get help or contact us',
      onPress: () => {},
    },
    {
      icon: 'information-circle-outline',
      title: 'About',
      subtitle: 'Learn more about Docki Health',
      onPress: () => {},
    },
  ];

  const healthStats = [
    { label: 'Appointments', value: '12', icon: 'calendar' },
    { label: 'Prescriptions', value: '8', icon: 'medical' },
    { label: 'Lab Tests', value: '5', icon: 'flask' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Profile Header */}
        <Animated.View entering={FadeInDown.duration(600)}>
          <LinearGradient
            colors={[colors.primary, colors.primaryDark]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.header}
          >
            <Avatar uri={user.avatar} name={user.name} size={80} />
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
            <View style={styles.healthInfo}>
              <View style={styles.healthInfoItem}>
                <Text style={styles.healthInfoLabel}>Blood Type</Text>
                <Text style={styles.healthInfoValue}>{user.bloodType}</Text>
              </View>
              <View style={[styles.healthInfoDivider, { backgroundColor: 'rgba(255,255,255,0.3)' }]} />
              <View style={styles.healthInfoItem}>
                <Text style={styles.healthInfoLabel}>Allergies</Text>
                <Text style={styles.healthInfoValue}>{user.allergies?.join(', ')}</Text>
              </View>
            </View>
          </LinearGradient>
        </Animated.View>

        {/* Health Stats */}
        <Animated.View entering={FadeInDown.delay(200).duration(600)}>
          <View style={styles.statsContainer}>
            {healthStats.map((stat, index) => (
              <Card
                key={index}
                style={styles.statCard}
                padding={Spacing.md}
                elevated
              >
                <View style={[styles.statIcon, { backgroundColor: colors.primary + '20' }]}>
                  <Ionicons name={stat.icon as any} size={20} color={colors.primary} />
                </View>
                <Text style={[styles.statValue, { color: colors.text }]}>{stat.value}</Text>
                <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
                  {stat.label}
                </Text>
              </Card>
            ))}
          </View>
        </Animated.View>

        {/* Theme Toggle */}
        <Animated.View entering={FadeInDown.delay(300).duration(600)}>
          <View style={styles.section}>
            <Card padding={0} elevated>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={toggleTheme}
                activeOpacity={0.7}
              >
                <View style={styles.menuItemLeft}>
                  <View style={[styles.menuIcon, { backgroundColor: colors.accent + '20' }]}>
                    <Ionicons
                      name={theme === 'dark' ? 'moon' : 'sunny'}
                      size={22}
                      color={colors.accent}
                    />
                  </View>
                  <View style={styles.menuItemText}>
                    <Text style={[styles.menuItemTitle, { color: colors.text }]}>
                      Dark Mode
                    </Text>
                    <Text style={[styles.menuItemSubtitle, { color: colors.textSecondary }]}>
                      Toggle theme appearance
                    </Text>
                  </View>
                </View>
                <Switch
                  value={theme === 'dark'}
                  onValueChange={toggleTheme}
                  trackColor={{ false: colors.border, true: colors.primary }}
                  thumbColor="#FFFFFF"
                />
              </TouchableOpacity>
            </Card>
          </View>
        </Animated.View>

        {/* Menu Items */}
        <Animated.View entering={FadeInDown.delay(400).duration(600)}>
          <View style={styles.section}>
            <Card padding={0} elevated>
              {menuItems.map((item, index) => (
                <React.Fragment key={index}>
                  <TouchableOpacity
                    style={styles.menuItem}
                    onPress={item.onPress}
                    activeOpacity={0.7}
                  >
                    <View style={styles.menuItemLeft}>
                      <View style={[styles.menuIcon, { backgroundColor: colors.primary + '20' }]}>
                        <Ionicons name={item.icon as any} size={22} color={colors.primary} />
                      </View>
                      <View style={styles.menuItemText}>
                        <Text style={[styles.menuItemTitle, { color: colors.text }]}>
                          {item.title}
                        </Text>
                        <Text style={[styles.menuItemSubtitle, { color: colors.textSecondary }]}>
                          {item.subtitle}
                        </Text>
                      </View>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color={colors.textTertiary} />
                  </TouchableOpacity>
                  {index < menuItems.length - 1 && (
                    <View style={[styles.menuDivider, { backgroundColor: colors.border }]} />
                  )}
                </React.Fragment>
              ))}
            </Card>
          </View>
        </Animated.View>

        {/* Logout Button */}
        <Animated.View entering={FadeInDown.delay(500).duration(600)}>
          <View style={[styles.section, { marginBottom: Spacing.xxl }]}>
            <TouchableOpacity
              style={[styles.logoutButton, { borderColor: colors.error }]}
              onPress={() => {}}
              activeOpacity={0.7}
            >
              <Ionicons name="log-out-outline" size={20} color={colors.error} />
              <Text style={[styles.logoutText, { color: colors.error }]}>Logout</Text>
            </TouchableOpacity>
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
    alignItems: 'center',
  },
  userName: {
    ...Typography.h2,
    color: '#FFFFFF',
    marginTop: Spacing.md,
  },
  userEmail: {
    ...Typography.body,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: Spacing.xs,
  },
  healthInfo: {
    flexDirection: 'row',
    marginTop: Spacing.lg,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    gap: Spacing.md,
  },
  healthInfoItem: {
    flex: 1,
    alignItems: 'center',
  },
  healthInfoLabel: {
    ...Typography.caption,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 4,
  },
  healthInfoValue: {
    ...Typography.bodySmall,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  healthInfoDivider: {
    width: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    marginTop: -Spacing.xl,
    gap: Spacing.sm,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  statValue: {
    ...Typography.h3,
    marginBottom: 2,
  },
  statLabel: {
    ...Typography.caption,
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.lg,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Spacing.md,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuIcon: {
    width: 44,
    height: 44,
    borderRadius: BorderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  menuItemText: {
    flex: 1,
  },
  menuItemTitle: {
    ...Typography.body,
    fontWeight: '600',
    marginBottom: 2,
  },
  menuItemSubtitle: {
    ...Typography.caption,
  },
  menuDivider: {
    height: 1,
    marginLeft: Spacing.lg + 44 + Spacing.md,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    borderWidth: 2,
    gap: Spacing.sm,
  },
  logoutText: {
    ...Typography.body,
    fontWeight: '600',
  },
});

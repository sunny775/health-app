import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Colors, Spacing, BorderRadius, Typography } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function AppointmentsScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const upcomingAppointments = [
    {
      id: '1',
      doctor: {
        name: 'Dr. Adebayo Okonkwo',
        specialty: 'Cardiologist',
        avatar: 'https://i.pravatar.cc/150?img=12',
      },
      date: 'Nov 5, 2025',
      time: '10:00 AM',
      type: 'video' as const,
      status: 'upcoming' as const,
    },
    {
      id: '2',
      doctor: {
        name: 'Dr. Chioma Nwankwo',
        specialty: 'Pediatrician',
        avatar: 'https://i.pravatar.cc/150?img=45',
      },
      date: 'Nov 8, 2025',
      time: '2:30 PM',
      type: 'voice' as const,
      status: 'upcoming' as const,
    },
  ];

  const pastAppointments = [
    {
      id: '3',
      doctor: {
        name: 'Dr. Ibrahim Musa',
        specialty: 'General Practitioner',
        avatar: 'https://i.pravatar.cc/150?img=33',
      },
      date: 'Oct 28, 2025',
      time: '11:00 AM',
      type: 'video' as const,
      status: 'completed' as const,
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return 'videocam';
      case 'voice':
        return 'call';
      case 'chat':
        return 'chatbubble';
      default:
        return 'medical';
    }
  };

  const renderAppointment = (appointment: any, index: number) => (
    <Animated.View
      key={appointment.id}
      entering={FadeInDown.delay(index * 100).duration(600)}
    >
      <Card style={styles.appointmentCard} padding={Spacing.lg} elevated>
        <View style={styles.appointmentHeader}>
          <Avatar
            uri={appointment.doctor.avatar}
            name={appointment.doctor.name}
            size={56}
          />
          <View style={styles.doctorInfo}>
            <Text style={[styles.doctorName, { color: colors.text }]}>
              {appointment.doctor.name}
            </Text>
            <Text style={[styles.specialty, { color: colors.textSecondary }]}>
              {appointment.doctor.specialty}
            </Text>
          </View>
          <Badge
            label={appointment.status}
            variant={appointment.status === 'upcoming' ? 'primary' : 'neutral'}
          />
        </View>

        <View style={[styles.divider, { backgroundColor: colors.border }]} />

        <View style={styles.appointmentDetails}>
          <View style={styles.detailRow}>
            <Ionicons name="calendar-outline" size={18} color={colors.textSecondary} />
            <Text style={[styles.detailText, { color: colors.text }]}>
              {appointment.date}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Ionicons name="time-outline" size={18} color={colors.textSecondary} />
            <Text style={[styles.detailText, { color: colors.text }]}>
              {appointment.time}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Ionicons name={getTypeIcon(appointment.type) as any} size={18} color={colors.textSecondary} />
            <Text style={[styles.detailText, { color: colors.text }]}>
              {appointment.type.charAt(0).toUpperCase() + appointment.type.slice(1)} Call
            </Text>
          </View>
        </View>

        {appointment.status === 'upcoming' && (
          <>
            <View style={[styles.divider, { backgroundColor: colors.border }]} />
            <View style={styles.appointmentActions}>
              <Button
                title="Join Call"
                onPress={() => {}}
                variant="primary"
                gradient
                style={styles.actionButton}
                icon={<Ionicons name={getTypeIcon(appointment.type) as any} size={20} color="#FFFFFF" />}
              />
              <TouchableOpacity style={[styles.iconButton, { borderColor: colors.border }]}>
                <Ionicons name="chatbubble-outline" size={20} color={colors.primary} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.iconButton, { borderColor: colors.border }]}>
                <Ionicons name="calendar-outline" size={20} color={colors.primary} />
              </TouchableOpacity>
            </View>
          </>
        )}

        {appointment.status === 'completed' && (
          <>
            <View style={[styles.divider, { backgroundColor: colors.border }]} />
            <Button
              title="View Summary"
              onPress={() => {}}
              variant="outline"
              icon={<Ionicons name="document-text-outline" size={20} color={colors.primary} />}
            />
          </>
        )}
      </Card>
    </Animated.View>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <Text style={styles.headerTitle}>My Appointments</Text>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Upcoming Appointments
          </Text>
          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map(renderAppointment)
          ) : (
            <Card style={styles.emptyCard} padding={Spacing.xl} elevated>
              <Ionicons name="calendar-outline" size={48} color={colors.textTertiary} />
              <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
                No upcoming appointments
              </Text>
              <Button
                title="Book Appointment"
                onPress={() => {}}
                variant="primary"
                style={{ marginTop: Spacing.md }}
              />
            </Card>
          )}
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Past Appointments
          </Text>
          {pastAppointments.map((apt, index) =>
            renderAppointment(apt, upcomingAppointments.length + index)
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: Spacing.xl,
    paddingHorizontal: Spacing.lg,
  },
  headerTitle: {
    ...Typography.h2,
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: Spacing.lg,
  },
  section: {
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    ...Typography.h3,
    marginBottom: Spacing.md,
  },
  appointmentCard: {
    marginBottom: Spacing.md,
  },
  appointmentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  doctorInfo: {
    flex: 1,
    marginLeft: Spacing.md,
  },
  doctorName: {
    ...Typography.h4,
    fontSize: 16,
    marginBottom: 4,
  },
  specialty: {
    ...Typography.bodySmall,
  },
  divider: {
    height: 1,
    marginVertical: Spacing.md,
  },
  appointmentDetails: {
    gap: Spacing.sm,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  detailText: {
    ...Typography.body,
  },
  appointmentActions: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  actionButton: {
    flex: 1,
  },
  iconButton: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCard: {
    alignItems: 'center',
  },
  emptyText: {
    ...Typography.body,
    marginTop: Spacing.md,
    textAlign: 'center',
  },
});

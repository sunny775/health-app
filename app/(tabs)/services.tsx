import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Colors, Spacing, BorderRadius, Typography } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { mockDoctors, mockMedicines, mockLabTests, mockMealPlans } from '@/services/mockData';

export default function ServicesScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [selectedTab, setSelectedTab] = useState<'doctors' | 'pharmacy' | 'lab' | 'nutrition'>('doctors');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'doctors', label: 'Doctors', icon: 'medical' },
    { id: 'pharmacy', label: 'Pharmacy', icon: 'medkit' },
    { id: 'lab', label: 'Lab Tests', icon: 'flask' },
    { id: 'nutrition', label: 'Nutrition', icon: 'restaurant' },
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case 'doctors':
        return mockDoctors.map((doctor, index) => (
          <Animated.View key={doctor.id} entering={FadeInDown.delay(index * 100).duration(600)}>
            <Card style={styles.itemCard} padding={Spacing.lg} elevated>
              <View style={styles.itemHeader}>
                <Avatar uri={doctor.avatar} name={doctor.name} size={64} />
                <View style={styles.itemInfo}>
                  <Text style={[styles.itemName, { color: colors.text }]}>{doctor.name}</Text>
                  <Text style={[styles.itemSubtitle, { color: colors.textSecondary }]}>
                    {doctor.specialty}
                  </Text>
                  <View style={styles.rating}>
                    <Ionicons name="star" size={14} color={colors.accent} />
                    <Text style={[styles.ratingText, { color: colors.text }]}>
                      {doctor.rating} ({doctor.reviews} reviews)
                    </Text>
                  </View>
                  <View style={styles.tags}>
                    <Badge label={`${doctor.experience}y exp`} variant="info" size="small" />
                    <Badge label={doctor.availability} variant={doctor.availability === 'available' ? 'success' : 'warning'} size="small" />
                  </View>
                </View>
              </View>
              <View style={styles.itemFooter}>
                <Text style={[styles.priceLabel, { color: colors.textSecondary }]}>
                  Consultation Fee
                </Text>
                <Text style={[styles.price, { color: colors.primary }]}>
                  ₦{doctor.consultationFee.toLocaleString()}
                </Text>
              </View>
            </Card>
          </Animated.View>
        ));

      case 'pharmacy':
        return mockMedicines.map((medicine, index) => (
          <Animated.View key={medicine.id} entering={FadeInDown.delay(index * 100).duration(600)}>
            <Card style={styles.itemCard} padding={Spacing.lg} elevated>
              <View style={styles.medicineHeader}>
                <View style={[styles.medicineIcon, { backgroundColor: colors.pharmacy + '20' }]}>
                  <Ionicons name="medical" size={28} color={colors.pharmacy} />
                </View>
                <View style={styles.itemInfo}>
                  <Text style={[styles.itemName, { color: colors.text }]}>{medicine.name}</Text>
                  <Text style={[styles.itemSubtitle, { color: colors.textSecondary }]}>
                    {medicine.description}
                  </Text>
                  <View style={styles.tags}>
                    <Badge label={medicine.category} variant="neutral" size="small" />
                    {medicine.requiresPrescription && (
                      <Badge label="Rx Required" variant="warning" size="small" />
                    )}
                    {medicine.inStock && <Badge label="In Stock" variant="success" size="small" />}
                  </View>
                </View>
              </View>
              <View style={styles.itemFooter}>
                <Text style={[styles.priceLabel, { color: colors.textSecondary }]}>Price</Text>
                <Text style={[styles.price, { color: colors.primary }]}>
                  ₦{medicine.price.toLocaleString()}
                </Text>
              </View>
            </Card>
          </Animated.View>
        ));

      case 'lab':
        return mockLabTests.map((test, index) => (
          <Animated.View key={test.id} entering={FadeInDown.delay(index * 100).duration(600)}>
            <Card style={styles.itemCard} padding={Spacing.lg} elevated>
              <View style={styles.medicineHeader}>
                <View style={[styles.medicineIcon, { backgroundColor: colors.lab + '20' }]}>
                  <Ionicons name="flask" size={28} color={colors.lab} />
                </View>
                <View style={styles.itemInfo}>
                  <Text style={[styles.itemName, { color: colors.text }]}>{test.name}</Text>
                  <Text style={[styles.itemSubtitle, { color: colors.textSecondary }]}>
                    {test.description}
                  </Text>
                  <View style={styles.tags}>
                    <Badge label={test.category} variant="neutral" size="small" />
                    <Badge label={test.estimatedTime} variant="info" size="small" />
                    {test.preparationRequired && (
                      <Badge label="Prep Required" variant="warning" size="small" />
                    )}
                  </View>
                </View>
              </View>
              <View style={styles.itemFooter}>
                <Text style={[styles.priceLabel, { color: colors.textSecondary }]}>Price</Text>
                <Text style={[styles.price, { color: colors.primary }]}>
                  ₦{test.price.toLocaleString()}
                </Text>
              </View>
            </Card>
          </Animated.View>
        ));

      case 'nutrition':
        return mockMealPlans.map((plan, index) => (
          <Animated.View key={plan.id} entering={FadeInDown.delay(index * 100).duration(600)}>
            <Card style={styles.itemCard} padding={Spacing.lg} elevated>
              <View style={styles.medicineHeader}>
                <View style={[styles.medicineIcon, { backgroundColor: colors.nutrition + '20' }]}>
                  <Ionicons name="restaurant" size={28} color={colors.nutrition} />
                </View>
                <View style={styles.itemInfo}>
                  <Text style={[styles.itemName, { color: colors.text }]}>{plan.name}</Text>
                  <Text style={[styles.itemSubtitle, { color: colors.textSecondary }]}>
                    {plan.description}
                  </Text>
                  <View style={styles.nutritionStats}>
                    <Text style={[styles.nutritionStat, { color: colors.textSecondary }]}>
                      {plan.calories} cal
                    </Text>
                    <Text style={[styles.nutritionStat, { color: colors.textSecondary }]}>
                      P: {plan.protein}g
                    </Text>
                    <Text style={[styles.nutritionStat, { color: colors.textSecondary }]}>
                      C: {plan.carbs}g
                    </Text>
                    <Text style={[styles.nutritionStat, { color: colors.textSecondary }]}>
                      F: {plan.fats}g
                    </Text>
                  </View>
                  <Badge label={`${plan.duration} days`} variant="info" size="small" />
                </View>
              </View>
              <View style={styles.itemFooter}>
                <Text style={[styles.priceLabel, { color: colors.textSecondary }]}>Price</Text>
                <Text style={[styles.price, { color: colors.primary }]}>
                  ₦{plan.price.toLocaleString()}/month
                </Text>
              </View>
            </Card>
          </Animated.View>
        ));
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <Text style={styles.headerTitle}>Healthcare Services</Text>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={colors.textTertiary} style={styles.searchIcon} />
          <TextInput
            style={[styles.searchInput, { color: colors.text, backgroundColor: colors.backgroundSecondary }]}
            placeholder="Search services..."
            placeholderTextColor={colors.textTertiary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabsContainer}
        contentContainerStyle={styles.tabsContent}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={[
              styles.tab,
              selectedTab === tab.id && { backgroundColor: colors.primary },
            ]}
            onPress={() => setSelectedTab(tab.id as any)}
          >
            <Ionicons
              name={tab.icon as any}
              size={20}
              color={selectedTab === tab.id ? '#FFFFFF' : colors.textSecondary}
            />
            <Text
              style={[
                styles.tabText,
                { color: selectedTab === tab.id ? '#FFFFFF' : colors.textSecondary },
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {renderContent()}
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
    paddingBottom: Spacing.lg,
    paddingHorizontal: Spacing.lg,
  },
  headerTitle: {
    ...Typography.h2,
    color: '#FFFFFF',
    marginBottom: Spacing.md,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    position: 'absolute',
    left: Spacing.md,
    zIndex: 1,
  },
  searchInput: {
    flex: 1,
    height: 48,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.lg,
    paddingLeft: Spacing.xxl + Spacing.sm,
    ...Typography.body,
  },
  tabsContainer: {
    maxHeight: 60,
  },
  tabsContent: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    gap: Spacing.sm,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.full,
    marginRight: Spacing.sm,
    gap: Spacing.xs,
  },
  tabText: {
    ...Typography.bodySmall,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: Spacing.lg,
  },
  itemCard: {
    marginBottom: Spacing.md,
  },
  itemHeader: {
    flexDirection: 'row',
    marginBottom: Spacing.md,
  },
  medicineHeader: {
    flexDirection: 'row',
    marginBottom: Spacing.md,
  },
  medicineIcon: {
    width: 64,
    height: 64,
    borderRadius: BorderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    ...Typography.h4,
    fontSize: 18,
    marginBottom: 4,
  },
  itemSubtitle: {
    ...Typography.bodySmall,
    marginBottom: Spacing.sm,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: Spacing.sm,
  },
  ratingText: {
    ...Typography.caption,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.xs,
  },
  nutritionStats: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing.sm,
  },
  nutritionStat: {
    ...Typography.caption,
    fontWeight: '600',
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
  },
  priceLabel: {
    ...Typography.bodySmall,
  },
  price: {
    ...Typography.h4,
    fontSize: 18,
  },
});

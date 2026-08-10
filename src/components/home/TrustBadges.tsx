import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme';

type Badge = {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
};

const BADGES: Badge[] = [
  { id: 'iso9001', icon: 'ribbon-outline', label: 'ISO 9001' },
  { id: 'iso22000', icon: 'shield-checkmark-outline', label: 'ISO 22000' },
  { id: 'fssai', icon: 'checkmark-done-outline', label: 'FSSAI' },
  { id: 'halal', icon: 'leaf-outline', label: 'Halal Certified' },
];

export default function TrustBadges() {
  return (
    <View className="mt-xl flex-row justify-around px-lg">
      {BADGES.map((badge) => (
        <View key={badge.id} className="items-center gap-xs">
          <View className="h-14 w-14 items-center justify-center rounded-full bg-primary/[0.06]">
            <Ionicons name={badge.icon} size={24} color={colors.primary} />
          </View>
          <Text className="text-center font-body-medium text-xs text-primaryDark">{badge.label}</Text>
        </View>
      ))}
    </View>
  );
}

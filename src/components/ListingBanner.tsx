import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';

type Props = {
  title?: string;
  subtitle?: string;
};

export default function ListingBanner({ title, subtitle }: Props) {
  return (
    <View className="h-[110px] justify-center overflow-hidden bg-primary px-lg">
      <Ionicons
        name="leaf"
        size={140}
        color={colors.cream}
        style={{ position: 'absolute', right: -30, top: -20, opacity: 0.08, transform: [{ rotate: '18deg' }] }}
      />
      <Ionicons
        name="water"
        size={70}
        color={colors.accent}
        style={{ position: 'absolute', right: 60, bottom: -18, opacity: 0.15 }}
      />

      <Text className="font-heading-semibold text-lg text-cream">{title ?? 'Pure. Cold-Pressed. Traditional.'}</Text>
      <Text className="mt-0.5 font-body-regular text-xs text-creamMuted80">
        {subtitle ?? 'Straight from the kolhu to your kitchen.'}
      </Text>
    </View>
  );
}

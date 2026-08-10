import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme';

type Promise = {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
};

const PROMISES: Promise[] = [
  {
    id: 'pressed',
    icon: 'thermometer-outline',
    title: 'Pressed with Patience',
    description: 'Cold-pressed below 40°C in a single traditional kolhu. Twice the time, none of the shortcuts.',
  },
  {
    id: 'purity',
    icon: 'water-outline',
    title: 'Purity is Discipline',
    description: 'Pure as raw material — 0% mixing, no blending, no refining.',
  },
  {
    id: 'verified',
    icon: 'flask-outline',
    title: 'Lab-Verified',
    description: 'Every batch carries a batch ID and a Certificate of Analysis you can scan and check.',
  },
];

export default function OurPromise() {
  return (
    <View className="mt-xl gap-md bg-primary/[0.04] px-lg py-xl">
      <View>
        <Text className="font-heading-semibold text-lg text-primaryDark">Our Promise</Text>
        <Text className="mt-1 font-body-regular text-sm text-primaryMuted70">
          Because trust isn't promised — it's proven, one bottle at a time.
        </Text>
      </View>

      <View className="mt-sm gap-lg">
        {PROMISES.map((item) => (
          <View key={item.id} className="flex-row items-start gap-md">
            <View className="h-12 w-12 items-center justify-center rounded-full bg-primary/[0.08]">
              <Ionicons name={item.icon} size={22} color={colors.primary} />
            </View>
            <View className="flex-1">
              <Text className="font-heading-medium text-md text-textDark">{item.title}</Text>
              <Text className="mt-0.5 font-body-regular text-xs leading-4 text-primaryMuted70">
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

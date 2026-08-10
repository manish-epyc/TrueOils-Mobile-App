import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';
import { useCartStore } from '../store/cartStore';

export default function Header() {
  const cartCount = useCartStore((state) => state.lines.reduce((sum, l) => sum + l.quantity, 0));

  return (
    <SafeAreaView edges={['top']} className="bg-cream">
      <View className="items-center bg-primary px-sm py-xs">
        <Text className="font-body-regular text-xs text-cream">
          The New Year's Sale <Text className="underline">Save 40%</Text> on all Products
        </Text>
      </View>

      <View className="flex-row items-center justify-between px-md py-sm">
        <Text className="font-script text-xl text-primaryDark">Trueoils</Text>

        <View className="flex-row items-center gap-sm">
          <TouchableOpacity
            className="h-10 w-10 items-center justify-center rounded-pill bg-primary/[0.06]"
            accessibilityLabel="Search"
          >
            <Ionicons name="search" size={20} color={colors.primaryDark} />
          </TouchableOpacity>

          <TouchableOpacity
            className="h-10 w-10 items-center justify-center rounded-pill bg-accent"
            accessibilityLabel="Cart"
          >
            <Ionicons name="cart" size={20} color={colors.cream} />
            {cartCount > 0 && (
              <View className="absolute -right-0.5 -top-0.5 h-4 min-w-[16px] items-center justify-center rounded-full bg-primaryDark px-[3px]">
                <Text className="font-body-medium text-[9px] text-cream">{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

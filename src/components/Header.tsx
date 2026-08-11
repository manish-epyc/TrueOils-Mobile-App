import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '../theme';
import { useCartStore } from '../store/cartStore';
import { RootStackParamList } from '../navigation/types';
import { maxDiscountPercent } from '../data/products';

type Props = {
  showPromoBanner?: boolean;
  showBackButton?: boolean;
};

export default function Header({ showPromoBanner = true, showBackButton = false }: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const cartCount = useCartStore((state) => state.lines.reduce((sum, l) => sum + l.quantity, 0));

  return (
    <SafeAreaView edges={['top']} className="bg-cream">
      {showPromoBanner && (
        <View className="items-center bg-primary px-sm py-sm">
          <Text className="font-body-regular text-xs text-cream">
            The New Year's Sale <Text className="underline">Save up to {maxDiscountPercent}%</Text> on select oils
          </Text>
        </View>
      )}

      <View className="flex-row items-center justify-between px-md py-sm">
        <View className="flex-row items-center gap-sm">
          {showBackButton && (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="h-9 w-9 items-center justify-center rounded-pill bg-primary/[0.06]"
              accessibilityLabel="Go back"
              focusable={false}
            >
              <Ionicons name="arrow-back" size={20} color={colors.primaryDark} />
            </TouchableOpacity>
          )}
          <Text className="font-script text-[28px] text-primaryDark">Trueoils</Text>
        </View>

        <View className="flex-row items-center gap-sm">
          <TouchableOpacity
            onPress={() => navigation.navigate('Search')}
            className="h-10 w-10 items-center justify-center rounded-pill bg-primary/[0.06]"
            accessibilityLabel="Search"
          >
            <Ionicons name="search" size={20} color={colors.primaryDark} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Cart')}
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

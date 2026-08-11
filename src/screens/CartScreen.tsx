import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { colors } from '../theme';
import { RootStackParamList } from '../navigation/types';
import { useCartStore } from '../store/cartStore';
import { resolveCartLine } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartLineItem from '../components/CartLineItem';

type Props = NativeStackScreenProps<RootStackParamList, 'Cart'>;

export default function CartScreen({ navigation }: Props) {
  const lines = useCartStore((state) => state.lines);

  const resolvedLines = lines
    .map((line) => {
      const resolved = resolveCartLine(line.merchandiseId);
      if (!resolved) return null;
      return { ...line, ...resolved };
    })
    .filter((line): line is NonNullable<typeof line> => line !== null);

  const subtotal = resolvedLines.reduce((sum, line) => sum + line.variant.price * line.quantity, 0);
  const isEmpty = resolvedLines.length === 0;

  return (
    <View className="flex-1 bg-cream">
      <Header showBackButton showPromoBanner={false} />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <Text className="px-lg pt-md font-heading-semibold text-lg text-primaryDark">Your Cart</Text>

        {isEmpty ? (
          <View className="items-center gap-sm px-lg py-xl">
            <Ionicons name="cart-outline" size={48} color={colors.primaryMuted70} />
            <Text className="font-heading-medium text-md text-textDark">Your cart is empty</Text>
            <Text className="text-center font-body-regular text-sm text-primaryMuted70">
              Browse our oils and add something you'll love.
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              className="mt-sm rounded-xs bg-primary px-lg py-sm"
              activeOpacity={0.85}
            >
              <Text className="font-body-bold text-sm text-cream">Continue Shopping</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <View className="px-lg pt-sm">
              {resolvedLines.map((line) => (
                <CartLineItem
                  key={line.merchandiseId}
                  merchandiseId={line.merchandiseId}
                  quantity={line.quantity}
                  product={line.product}
                  variant={line.variant}
                />
              ))}
            </View>

            <View className="gap-sm border-t border-primary/10 px-lg py-md">
              <View className="flex-row items-center justify-between">
                <Text className="font-body-medium text-md text-primaryDark">Subtotal</Text>
                <Text className="font-body-bold text-lg text-primaryDark">₹{subtotal.toFixed(2)}</Text>
              </View>
              <TouchableOpacity
                disabled
                className="items-center rounded-xs bg-accent/40 py-md"
                accessibilityLabel="Checkout coming soon"
              >
                <Text className="font-body-bold text-base text-cream">Checkout — coming soon</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        <Footer />
      </ScrollView>
    </View>
  );
}

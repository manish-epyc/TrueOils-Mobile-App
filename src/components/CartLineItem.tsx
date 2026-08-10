import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';
import { Product, ProductVariant } from '../data/products';
import { useCartStore } from '../store/cartStore';

type Props = {
  merchandiseId: string;
  quantity: number;
  product: Product;
  variant: ProductVariant;
};

export default function CartLineItem({ merchandiseId, quantity, product, variant }: Props) {
  const updateLineQuantity = useCartStore((state) => state.updateLineQuantity);
  const removeLine = useCartStore((state) => state.removeLine);

  return (
    <View className="flex-row gap-sm border-b border-primary/10 py-md">
      <Image source={{ uri: product.images[0] }} className="h-20 w-20 rounded-xs bg-creamMuted" resizeMode="cover" />

      <View className="flex-1 justify-between">
        <View>
          <Text className="font-heading-medium text-md text-textDark" numberOfLines={1}>
            {product.title}
          </Text>
          <Text className="mt-0.5 font-body-regular text-xs text-primaryMuted70">{variant.label}</Text>
        </View>

        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-sm">
            <TouchableOpacity
              onPress={() => updateLineQuantity(merchandiseId, quantity - 1)}
              className="h-7 w-7 items-center justify-center rounded-full border border-primary/20"
              accessibilityLabel="Decrease quantity"
            >
              <Ionicons name="remove" size={14} color={colors.primaryDark} />
            </TouchableOpacity>
            <Text className="font-body-bold text-sm text-textDark">{quantity}</Text>
            <TouchableOpacity
              onPress={() => updateLineQuantity(merchandiseId, quantity + 1)}
              className="h-7 w-7 items-center justify-center rounded-full border border-primary/20"
              accessibilityLabel="Increase quantity"
            >
              <Ionicons name="add" size={14} color={colors.primaryDark} />
            </TouchableOpacity>
          </View>

          <Text className="font-body-bold text-sm text-primaryDark">₹{(variant.price * quantity).toFixed(2)}</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => removeLine(merchandiseId)}
        className="h-7 w-7 items-center justify-center"
        accessibilityLabel={`Remove ${product.title} from cart`}
      >
        <Ionicons name="trash-outline" size={16} color={colors.primaryMuted70} />
      </TouchableOpacity>
    </View>
  );
}

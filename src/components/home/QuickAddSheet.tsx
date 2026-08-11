import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme';
import { Product } from '../../data/products';
import { useCartStore } from '../../store/cartStore';
import { useToastStore } from '../../store/toastStore';
import VariantPicker from '../VariantPicker';
import BottomSheet from '../BottomSheet';

type Props = {
  visible: boolean;
  product: Product;
  onClose: () => void;
};

export default function QuickAddSheet({ visible, product, onClose }: Props) {
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0].id);
  const [quantity, setQuantity] = useState(1);
  const addLine = useCartStore((state) => state.addLine);
  const showToast = useToastStore((state) => state.showToast);

  const selectedVariant = product.variants.find((v) => v.id === selectedVariantId) ?? product.variants[0];

  const handleClose = () => {
    setSelectedVariantId(product.variants[0].id);
    setQuantity(1);
    onClose();
  };

  const handleAddToCart = () => {
    addLine(`${product.id}-${selectedVariant.id}`, quantity);
    showToast(`Added ${product.title} to cart`);
    handleClose();
  };

  return (
    <BottomSheet visible={visible} onClose={handleClose}>
      <View className="flex-row items-center gap-sm">
        <Image source={{ uri: product.images[0] }} className="h-16 w-16 rounded-xs bg-creamMuted" contentFit="cover" />
        <View className="flex-1">
          <Text className="font-heading-medium text-md text-textDark" numberOfLines={1}>
            {product.title}
          </Text>
          <Text className="mt-0.5 font-body-regular text-xs text-primaryMuted70" numberOfLines={1}>
            {product.tagline}
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleClose}
          className="h-8 w-8 items-center justify-center rounded-full bg-primary/[0.06]"
          accessibilityLabel="Close"
        >
          <Ionicons name="close" size={18} color={colors.primaryDark} />
        </TouchableOpacity>
      </View>

      <View className="gap-sm">
        <Text className="font-body-medium text-sm text-primaryDark">Select size</Text>
        <VariantPicker
          variants={product.variants}
          selectedVariantId={selectedVariantId}
          onSelect={setSelectedVariantId}
        />
      </View>

      <View className="flex-row items-center justify-between">
        <Text className="font-body-medium text-sm text-primaryDark">Quantity</Text>
        <View className="flex-row items-center gap-md">
          <TouchableOpacity
            onPress={() => setQuantity((q) => Math.max(1, q - 1))}
            className="h-8 w-8 items-center justify-center rounded-full border border-primary/20"
            accessibilityLabel="Decrease quantity"
          >
            <Ionicons name="remove" size={16} color={colors.primaryDark} />
          </TouchableOpacity>
          <Text className="font-body-bold text-base text-textDark">{quantity}</Text>
          <TouchableOpacity
            onPress={() => setQuantity((q) => q + 1)}
            className="h-8 w-8 items-center justify-center rounded-full border border-primary/20"
            accessibilityLabel="Increase quantity"
          >
            <Ionicons name="add" size={16} color={colors.primaryDark} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={handleAddToCart}
        className="flex-row items-center justify-center gap-2 rounded-xs bg-accent py-sm"
        activeOpacity={0.85}
      >
        <Text className="font-body-bold text-base text-cream">
          Add to cart · ₹{(selectedVariant.price * quantity).toFixed(2)}
        </Text>
      </TouchableOpacity>
    </BottomSheet>
  );
}

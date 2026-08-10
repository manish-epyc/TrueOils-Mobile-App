import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '../../theme';
import { Product } from '../../data/products';
import { RootStackParamList } from '../../navigation/types';
import QuickAddSheet from './QuickAddSheet';

type Props = {
  product: Product;
  containerClassName?: string;
};

export default function ProductCard({ product, containerClassName = 'w-[165px]' }: Props) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const hasDiscount = !!product.compareAtPrice && product.compareAtPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.compareAtPrice! - product.price) / product.compareAtPrice!) * 100)
    : 0;

  return (
    <TouchableOpacity
      className={containerClassName}
      activeOpacity={0.85}
      onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
    >
      <View className="relative w-full overflow-hidden rounded-xs bg-creamMuted" style={{ aspectRatio: 1 }}>
        <Image source={{ uri: product.images[0] }} className="h-full w-full" resizeMode="cover" />

        {hasDiscount && (
          <View className="absolute left-2 top-2 rounded-pill bg-primary px-2 py-[3px]">
            <Text className="font-body-bold text-[10px] text-cream">{discountPercent}% off</Text>
          </View>
        )}

        <View className="absolute right-2 top-2 rounded-pill bg-cream/90 px-2 py-[3px]">
          <Text className="font-body-medium text-[10px] text-primaryDark">Sale</Text>
        </View>
      </View>

      <View className="mt-2 flex-row items-center gap-1">
        <Ionicons name="star" size={12} color={colors.accent} />
        <Text className="font-body-medium text-xs text-primaryDark">{product.rating.toFixed(1)}</Text>
        <Text className="font-body-regular text-xs text-primaryMuted70">({product.reviewsCount})</Text>
      </View>

      <Text className="mt-1 font-heading-medium text-md text-textDark" numberOfLines={1}>
        {product.title}
      </Text>
      <Text className="mt-0.5 font-body-regular text-xs text-primaryMuted70" numberOfLines={1}>
        {product.tagline}
      </Text>

      <View className="mt-2 flex-row items-center justify-between">
        <View className="flex-row items-center gap-1">
          <Text className="font-body-bold text-base text-primaryDark">₹{product.price.toFixed(2)}</Text>
          {hasDiscount && (
            <Text className="font-body-regular text-xs text-primaryMuted70 line-through">
              ₹{product.compareAtPrice!.toFixed(2)}
            </Text>
          )}
        </View>

        <TouchableOpacity
          onPress={() => setIsSheetOpen(true)}
          className="h-8 w-8 items-center justify-center rounded-full bg-accent"
          activeOpacity={0.8}
          accessibilityLabel={`Add ${product.title} to cart`}
        >
          <Ionicons name="add" size={18} color={colors.cream} />
        </TouchableOpacity>
      </View>

      <QuickAddSheet visible={isSheetOpen} product={product} onClose={() => setIsSheetOpen(false)} />
    </TouchableOpacity>
  );
}

import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { colors } from '../theme';
import { RootStackParamList } from '../navigation/types';
import { findProductById, Product } from '../data/products';
import { useCartStore } from '../store/cartStore';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VariantPicker from '../components/VariantPicker';
import ProductImageGallery from '../components/ProductImageGallery';
import Accordion, { AccordionItemData } from '../components/Accordion';
import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;

function BulletList({ items }: { items: string[] }) {
  return (
    <View className="gap-1.5">
      {items.map((item, index) => (
        <View key={index} className="flex-row gap-2">
          <Text className="font-body-regular text-sm text-primaryMuted70">•</Text>
          <Text className="flex-1 font-body-regular text-sm leading-5 text-primaryMuted70">{item}</Text>
        </View>
      ))}
    </View>
  );
}

function buildAccordionItems(product: Product): AccordionItemData[] {
  return [
    {
      id: 'description',
      title: 'Description',
      content: (
        <Text className="font-body-regular text-sm leading-5 text-primaryMuted70">{product.description}</Text>
      ),
    },
    {
      id: 'benefits',
      title: 'Benefits/Features',
      content: <BulletList items={product.benefits} />,
    },
    {
      id: 'howToUse',
      title: 'How to Use',
      content: <BulletList items={product.howToUse} />,
    },
    {
      id: 'nutrition',
      title: 'Nutritional Information',
      content:
        product.nutrition.length > 0 ? (
          <View className="gap-1.5">
            {product.nutrition.map((fact) => (
              <View key={fact.label} className="flex-row items-center justify-between">
                <Text className="font-body-regular text-sm text-primaryMuted70">{fact.label}</Text>
                <Text className="font-body-medium text-sm text-textDark">{fact.value}</Text>
              </View>
            ))}
          </View>
        ) : (
          <Text className="font-body-regular text-sm leading-5 text-primaryMuted70">
            This oil is for external use only and is not intended for consumption — no nutritional information
            applies.
          </Text>
        ),
    },
  ];
}

export default function ProductDetailScreen({ route }: Props) {
  const product = findProductById(route.params.productId);
  const addLine = useCartStore((state) => state.addLine);

  const [selectedVariantId, setSelectedVariantId] = useState(product?.variants[0].id ?? '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <View className="flex-1 bg-cream">
        <Header showBackButton showPromoBanner={false} />
        <View className="flex-1 items-center justify-center px-lg">
          <Text className="font-heading-medium text-md text-textDark">Product not found</Text>
        </View>
      </View>
    );
  }

  const selectedVariant = product.variants.find((v) => v.id === selectedVariantId) ?? product.variants[0];
  const hasDiscount = !!selectedVariant.compareAtPrice && selectedVariant.compareAtPrice > selectedVariant.price;
  const discountPercent = hasDiscount
    ? Math.round(((selectedVariant.compareAtPrice! - selectedVariant.price) / selectedVariant.compareAtPrice!) * 100)
    : 0;

  return (
    <View className="flex-1 bg-cream">
      <Header showBackButton showPromoBanner={false} />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="relative">
          <ProductImageGallery images={product.images} />

          {hasDiscount && (
            <View className="absolute left-3 top-3 rounded-pill bg-primary px-2 py-1">
              <Text className="font-body-bold text-xs text-cream">{discountPercent}% off</Text>
            </View>
          )}
        </View>

        <View className="gap-md px-lg pt-md">
          <View className="flex-row items-center gap-1">
            <Ionicons name="star" size={14} color={colors.accent} />
            <Text className="font-body-medium text-sm text-primaryDark">{product.rating.toFixed(1)}</Text>
            <Text className="font-body-regular text-sm text-primaryMuted70">({product.reviewsCount} reviews)</Text>
          </View>

          <Text className="font-heading-semibold text-xl text-textDark">{product.title}</Text>
          <Text className="font-body-regular text-sm leading-5 text-primaryMuted70">{product.tagline}</Text>

          <View className="gap-sm">
            <Text className="font-body-medium text-sm text-primaryDark">Select size</Text>
            <VariantPicker
              variants={product.variants}
              selectedVariantId={selectedVariant.id}
              onSelect={setSelectedVariantId}
            />
          </View>

          <View className="flex-row items-center gap-2">
            <Text className="font-body-bold text-xl text-primaryDark">₹{selectedVariant.price.toFixed(2)}</Text>
            {hasDiscount && (
              <Text className="font-body-regular text-sm text-primaryMuted70 line-through">
                ₹{selectedVariant.compareAtPrice!.toFixed(2)}
              </Text>
            )}
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
            onPress={() => addLine(`${product.id}-${selectedVariant.id}`, quantity)}
            className="flex-row items-center justify-center gap-2 rounded-xs bg-accent py-md"
            activeOpacity={0.85}
          >
            <Text className="font-body-bold text-base text-cream">
              Add to cart · ₹{(selectedVariant.price * quantity).toFixed(2)}
            </Text>
          </TouchableOpacity>

          <View className="flex-row gap-lg">
            <View className="flex-row items-center gap-2">
              <View className="h-9 w-9 items-center justify-center rounded-full bg-primary/[0.06]">
                <Ionicons name="rocket-outline" size={18} color={colors.primary} />
              </View>
              <Text className="font-body-medium text-xs text-primaryDark">24 Hours Dispatch</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <View className="h-9 w-9 items-center justify-center rounded-full bg-primary/[0.06]">
                <Ionicons name="refresh-circle-outline" size={18} color={colors.primary} />
              </View>
              <Text className="font-body-medium text-xs text-primaryDark">30 Day Return</Text>
            </View>
          </View>

          <Accordion items={buildAccordionItems(product)} defaultOpenId="description" />
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
}

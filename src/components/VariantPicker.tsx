import { Text, TouchableOpacity, View } from 'react-native';
import { ProductVariant } from '../data/products';

type Props = {
  variants: ProductVariant[];
  selectedVariantId: string;
  onSelect: (variantId: string) => void;
};

export default function VariantPicker({ variants, selectedVariantId, onSelect }: Props) {
  return (
    <View className="flex-row flex-wrap gap-sm">
      {variants.map((variant) => {
        const isSelected = variant.id === selectedVariantId;
        return (
          <TouchableOpacity
            key={variant.id}
            onPress={() => onSelect(variant.id)}
            className={`rounded-pill border px-md py-xs ${isSelected ? 'border-primary bg-primary' : 'border-primary/20 bg-transparent'}`}
            activeOpacity={0.8}
          >
            <Text className={`font-body-medium text-xs ${isSelected ? 'text-cream' : 'text-primaryDark'}`}>
              {variant.label} · ₹{variant.price.toFixed(2)}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

import { ScrollView, Text, View } from 'react-native';
import { Product } from '../../data/products';
import ProductCard from './ProductCard';

type Props = {
  title: string;
  subtitle?: string;
  products: Product[];
};

export default function ProductSlider({ title, subtitle, products }: Props) {
  return (
    <View className="mt-xl gap-md">
      <View className="px-lg">
        <Text className="font-heading-semibold text-lg text-primaryDark">{title}</Text>
        {subtitle && <Text className="mt-1 font-body-regular text-sm text-primaryMuted70">{subtitle}</Text>}
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-md px-lg">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ScrollView>
    </View>
  );
}

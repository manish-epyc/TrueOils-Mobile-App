import { useMemo, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { colors } from '../theme';
import { RootStackParamList } from '../navigation/types';
import { products } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SortSheet, { SortOption } from '../components/SortSheet';
import ProductCard from '../components/home/ProductCard';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductListing'>;

const SORT_LABELS: Record<SortOption, string> = {
  featured: 'Featured',
  'price-asc': 'Price: Low to High',
  'price-desc': 'Price: High to Low',
  'rating-desc': 'Top Rated',
};

export default function ProductListingScreen({}: Props) {
  const [sort, setSort] = useState<SortOption>('featured');
  const [isSortSheetOpen, setIsSortSheetOpen] = useState(false);

  const sortedProducts = useMemo(() => {
    const list = [...products];
    switch (sort) {
      case 'price-asc':
        return list.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return list.sort((a, b) => b.price - a.price);
      case 'rating-desc':
        return list.sort((a, b) => b.rating - a.rating);
      default:
        return list;
    }
  }, [sort]);

  return (
    <View className="flex-1 bg-cream">
      <Header showBackButton showPromoBanner={false} />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="flex-row items-center justify-between px-lg pt-md">
          <View>
            <Text className="font-heading-semibold text-lg text-primaryDark">Shop All</Text>
            <Text className="mt-0.5 font-body-regular text-xs text-primaryMuted70">
              {products.length} products
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => setIsSortSheetOpen(true)}
            className="flex-row items-center gap-1 rounded-pill border border-primary/20 px-md py-xs"
            activeOpacity={0.7}
          >
            <Ionicons name="swap-vertical-outline" size={14} color={colors.primaryDark} />
            <Text className="font-body-medium text-xs text-primaryDark">{SORT_LABELS[sort]}</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row flex-wrap justify-between gap-y-lg px-lg pt-md">
          {sortedProducts.map((product) => (
            <View key={product.id} style={{ width: '48%' }}>
              <ProductCard product={product} containerClassName="w-full" />
            </View>
          ))}
        </View>

        <Footer />
      </ScrollView>

      <SortSheet
        visible={isSortSheetOpen}
        selected={sort}
        onSelect={setSort}
        onClose={() => setIsSortSheetOpen(false)}
      />
    </View>
  );
}

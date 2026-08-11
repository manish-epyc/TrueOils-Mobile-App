import { useMemo, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { colors } from '../theme';
import { RootStackParamList } from '../navigation/types';
import { products } from '../data/products';
import { findCollectionByHandle } from '../data/collections';
import Header from '../components/Header';
import ListingBanner from '../components/ListingBanner';
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

export default function ProductListingScreen({ route, navigation }: Props) {
  const [sort, setSort] = useState<SortOption>('featured');
  const [isSortSheetOpen, setIsSortSheetOpen] = useState(false);

  const collectionHandle = route.params?.collectionHandle;
  const collection = collectionHandle ? findCollectionByHandle(collectionHandle) : undefined;

  const filteredProducts = useMemo(() => {
    if (!collection) return products;
    return products.filter((p) => collection.productIds.includes(p.id));
  }, [collection]);

  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
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
  }, [filteredProducts, sort]);

  return (
    <View className="flex-1 bg-cream">
      <Header showBackButton showPromoBanner={false} />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <ListingBanner title={collection ? collection.title : undefined} />

        <View className="flex-row items-center justify-between px-lg pt-md">
          <View>
            <Text className="font-heading-semibold text-lg text-primaryDark">
              {collection ? collection.title : 'Shop All'}
            </Text>
            <Text className="mt-0.5 font-body-regular text-xs text-primaryMuted70">
              {sortedProducts.length} product{sortedProducts.length === 1 ? '' : 's'}
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

        {collection && (
          <TouchableOpacity
            onPress={() => navigation.setParams({ collectionHandle: undefined })}
            className="mx-lg mt-sm flex-row items-center gap-1 self-start rounded-pill bg-primary/[0.06] px-sm py-1"
            activeOpacity={0.7}
          >
            <Text className="font-body-medium text-xs text-primaryDark">{collection.title}</Text>
            <Ionicons name="close" size={12} color={colors.primaryDark} />
          </TouchableOpacity>
        )}

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

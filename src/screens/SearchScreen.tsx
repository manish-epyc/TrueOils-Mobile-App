import { useMemo, useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { colors } from '../theme';
import { RootStackParamList } from '../navigation/types';
import { products } from '../data/products';
import ProductCard from '../components/home/ProductCard';

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

export default function SearchScreen({ navigation }: Props) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const trimmedQuery = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!trimmedQuery) return [];
    return products.filter(
      (p) => p.title.toLowerCase().includes(trimmedQuery) || p.tagline.toLowerCase().includes(trimmedQuery)
    );
  }, [trimmedQuery]);

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-cream">
      <View className="flex-row items-center gap-sm px-lg py-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="h-9 w-9 items-center justify-center rounded-pill bg-primary/[0.06]"
          accessibilityLabel="Go back"
        >
          <Ionicons name="arrow-back" size={20} color={colors.primaryDark} />
        </TouchableOpacity>

        <View
          className={`h-12 flex-1 flex-row items-center gap-2 rounded-pill border bg-cream px-md ${
            isFocused ? 'border-primary' : 'border-primary/15'
          }`}
        >
          <Ionicons name="search" size={17} color={isFocused ? colors.primary : colors.primaryMuted70} />
          <TextInput
            value={query}
            onChangeText={setQuery}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search for oils..."
            placeholderTextColor={colors.primaryMuted70}
            autoFocus
            returnKeyType="search"
            cursorColor={colors.primary}
            selectionColor={colors.primary}
            className="flex-1 font-body-regular text-sm text-textDark"
            style={[
              { paddingVertical: 0, height: '100%', borderWidth: 0 },
              { outlineStyle: 'none', outlineWidth: 0 } as object,
            ]}
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={() => setQuery('')} accessibilityLabel="Clear search" hitSlop={8}>
              <Ionicons name="close-circle" size={17} color={colors.primaryMuted70} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {trimmedQuery.length === 0 ? (
          <View className="items-center gap-sm px-lg py-xl">
            <Ionicons name="search-outline" size={40} color={colors.primaryMuted70} />
            <Text className="text-center font-body-regular text-sm text-primaryMuted70">
              Search our oils by name — try "mustard" or "castor".
            </Text>
          </View>
        ) : results.length === 0 ? (
          <View className="items-center gap-sm px-lg py-xl">
            <Ionicons name="sad-outline" size={40} color={colors.primaryMuted70} />
            <Text className="text-center font-heading-medium text-md text-textDark">No results for "{query}"</Text>
            <Text className="text-center font-body-regular text-sm text-primaryMuted70">
              Try a different name, like "coconut" or "flax".
            </Text>
          </View>
        ) : (
          <>
            <Text className="px-lg pt-sm font-body-regular text-xs text-primaryMuted70">
              {results.length} result{results.length === 1 ? '' : 's'}
            </Text>
            <View className="flex-row flex-wrap justify-between gap-y-lg px-lg pt-sm pb-xl">
              {results.map((product) => (
                <View key={product.id} style={{ width: '48%' }}>
                  <ProductCard product={product} containerClassName="w-full" />
                </View>
              ))}
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

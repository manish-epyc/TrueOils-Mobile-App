import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { collections } from '../../data/collections';

export default function CollectionsSection() {
  return (
    <View className="mt-xl gap-md">
      <View className="px-lg">
        <Text className="font-heading-semibold text-lg text-primaryDark">Our Collections</Text>
        <Text className="mt-1 font-body-regular text-sm text-primaryMuted70">
          Traditionally extracted, straight from the source.
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-md px-lg"
      >
        {collections.map((collection) => (
          <TouchableOpacity key={collection.id} className="w-[76px] items-center gap-xs" activeOpacity={0.75}>
            <View className="h-20 w-20 overflow-hidden rounded-full border border-primary/10 bg-creamMuted">
              <Image source={{ uri: collection.image }} className="h-full w-full" resizeMode="cover" />
            </View>
            <Text className="text-center font-body-medium text-xs text-textDark" numberOfLines={2}>
              {collection.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

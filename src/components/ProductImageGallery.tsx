import { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Image } from 'expo-image';
type Props = {
  images: string[];
  badge?: string;
};

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_MARGIN = 20;
const CARD_WIDTH = SCREEN_WIDTH - CARD_MARGIN * 2;
const CARD_HEIGHT = 360;

export default function ProductImageGallery({ images, badge }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<FlatList<string>>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / CARD_WIDTH);
    setActiveIndex((current) => (current === index ? current : index));
  };

  const goToIndex = (index: number) => {
    listRef.current?.scrollToIndex({ index, animated: true });
    setActiveIndex(index);
  };

  return (
    <View>
      <View
        style={{ width: CARD_WIDTH, height: CARD_HEIGHT, marginHorizontal: CARD_MARGIN }}
        className="overflow-hidden rounded-md bg-creamMuted"
      >
        <FlatList
          ref={listRef}
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          snapToInterval={CARD_WIDTH}
          disableIntervalMomentum
          bounces={false}
          onScroll={handleScroll}
          onMomentumScrollEnd={handleScroll}
          scrollEventThrottle={16}
          keyExtractor={(uri, index) => `${uri}-${index}`}
          getItemLayout={(_, index) => ({ length: CARD_WIDTH, offset: CARD_WIDTH * index, index })}
          renderItem={({ item }) => (
            <View style={{ width: CARD_WIDTH, height: CARD_HEIGHT }} className="items-center justify-center p-lg">
              <Image
                source={{ uri: item }}
                className="h-full w-full rounded-md"
                contentFit="cover"
              />
            </View>
          )}
        />

        {badge && (
          <View className="absolute left-3 top-3 rounded-pill bg-primary px-2 py-1">
            <Text className="font-body-bold text-xs text-cream">{badge}</Text>
          </View>
        )}
      </View>

      {images.length > 1 && (
        <View className="flex-row justify-center gap-sm px-lg pt-sm">
          {images.map((uri, index) => (
            <TouchableOpacity key={`${uri}-${index}`} onPress={() => goToIndex(index)} activeOpacity={0.8}>
              <View
                className={`h-14 w-14 overflow-hidden rounded-sm border ${
                  index === activeIndex ? 'border-primary' : 'border-primary/10'
                }`}
              >
                <Image
                  source={{ uri }}
                  className="h-full w-full bg-creamMuted"
                  contentFit="contain"
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

import { useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  images: string[];
};

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function ProductImageGallery({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH);
    setActiveIndex((current) => (current === index ? current : index));
  };

  const goToIndex = (index: number) => {
    scrollRef.current?.scrollTo({ x: index * SCREEN_WIDTH, animated: true });
    setActiveIndex(index);
  };

  return (
    <View>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleScroll}
        onScrollEndDrag={handleScroll}
        scrollEventThrottle={16}
      >
        {images.map((uri, index) => (
          <Image
            key={`${uri}-${index}`}
            source={{ uri }}
            style={{ width: SCREEN_WIDTH, height: 320 }}
            className="bg-white"
            resizeMode="cover"
          />
        ))}
      </ScrollView>

      {images.length > 1 && (
        <View className="flex-row items-center justify-center gap-md bg-white py-sm">
          <View className="flex-row gap-1.5">
            {images.map((_, index) => (
              <TouchableOpacity key={index} onPress={() => goToIndex(index)} hitSlop={8}>
                <View
                  className={`h-2 rounded-full ${index === activeIndex ? 'w-5 bg-primary' : 'w-2 bg-primary/25'}`}
                />
              </TouchableOpacity>
            ))}
          </View>
          <Text className="font-body-medium text-xs text-primaryMuted70">
            {activeIndex + 1} / {images.length}
          </Text>
        </View>
      )}
    </View>
  );
}

import { ScrollView, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  return (
    <View className="mt-xl gap-md">
      <View className="px-lg">
        <Text className="font-heading-semibold text-lg text-primaryDark">Voices of Real Experience</Text>
        <Text className="mt-1 font-body-regular text-sm text-primaryMuted70">
          Short stories from customers who've seen the difference.
        </Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-md px-lg">
        {testimonials.map((testimonial) => (
          <View key={testimonial.id} className="w-[260px] gap-sm rounded-sm bg-creamMuted p-md">
            <View className="flex-row items-center gap-sm">
              <Image
                source={{ uri: testimonial.avatar }}
                className="h-10 w-10 rounded-full"
                contentFit="cover"
                accessibilityLabel={testimonial.name}
              />
              <View className="flex-row gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Ionicons
                    key={i}
                    name={i < testimonial.rating ? 'star' : 'star-outline'}
                    size={13}
                    color={colors.accent}
                  />
                ))}
              </View>
            </View>

            <Text className="font-body-regular text-sm italic leading-5 text-textDark" numberOfLines={5}>
              "{testimonial.quote}"
            </Text>

            <View className="mt-xs">
              <Text className="font-body-medium text-xs text-primaryDark">
                {testimonial.name} · {testimonial.location}
              </Text>
              <Text className="mt-0.5 font-body-regular text-[11px] text-primaryMuted70">
                Product: {testimonial.product}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

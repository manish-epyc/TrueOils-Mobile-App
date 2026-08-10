import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '../../theme';
import { RootStackParamList } from '../../navigation/types';

export default function HeroBanner() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View className="h-[480px] justify-end overflow-hidden bg-accent">
      <Image
        source={require('../../../assets/homepage-banner-bg.png')}
        resizeMode="contain"
        className="absolute inset-0 h-full w-full"
      />

      <View className="gap-sm px-lg pb-xl">
        <Text className="font-heading-semibold text-display leading-[33px] text-cream">
          The thoughtful harmony of <Text className="underline">science</Text> and{' '}
          <Text className="underline">tradition</Text>.
        </Text>
        <Text className="max-w-[90%] font-body-regular text-md text-creamMuted80">
          Traditionally extracted oils, straight from the source to your kitchen.
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('ProductListing')}
          className="mt-sm flex-row items-center gap-2 self-start rounded-xs bg-primary px-lg py-sm"
          activeOpacity={0.85}
        >
          <Text className="font-body-bold text-base text-cream">Shop Now</Text>
          <Ionicons name="arrow-forward" size={16} color={colors.cream} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

import { Linking, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '../theme';
import { useToastStore } from '../store/toastStore';
import { RootStackParamList } from '../navigation/types';

const POLICY_LINKS = ['Privacy Policy', 'Refund Policy', 'Terms of Service', 'Shipping Policy'];

const ADDRESS = 'Plot 24, Industrial Model Town, Ludhiana, Punjab, India - 141003';
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

export default function Footer() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const showToast = useToastStore((state) => state.showToast);

  const openLink = (url: string, failureMessage: string) => {
    Linking.openURL(url).catch(() => showToast(failureMessage));
  };

  return (
    <View className="mt-xl gap-lg rounded-t-lg bg-primaryDark px-lg py-xl">
      <TouchableOpacity
        className="items-center gap-1"
        onPress={() => navigation.navigate('Home')}
        activeOpacity={0.7}
        accessibilityLabel="Go to home"
      >
        <Text className="font-script text-2xl text-cream">Bharat Oils</Text>
        <Text className="font-body-regular text-xs italic text-creamMuted80">Pure. Pressed. Trusted.</Text>
      </TouchableOpacity>

      <Text className="text-center font-body-regular text-xs leading-5 text-creamMuted80">
        Bharat Oils is a brand of premium cold-pressed oils by Bharat Agro Tech Pvt. Ltd. Every oil is
        single-pressed in a traditional kolhu below 40°C — no pre-heating, no roasting, no chemical
        processing.
      </Text>

      <View className="gap-sm border-t border-cream/10 pt-md">
        <TouchableOpacity
          onPress={() => openLink('mailto:info@bharatoils.in', 'No email app found')}
          className="flex-row items-center gap-2"
          activeOpacity={0.7}
        >
          <Ionicons name="mail-outline" size={16} color={colors.cream} />
          <Text className="font-body-regular text-sm text-cream">info@bharatoils.in</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => openLink('tel:+919876543210', 'No phone app found')}
          className="flex-row items-center gap-2"
          activeOpacity={0.7}
        >
          <Ionicons name="call-outline" size={16} color={colors.cream} />
          <Text className="font-body-regular text-sm text-cream">+91 98765 43210</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => openLink(MAPS_URL, 'No maps app found')}
          className="flex-row items-start gap-2"
          activeOpacity={0.7}
        >
          <Ionicons name="location-outline" size={16} color={colors.cream} className="mt-0.5" />
          <Text className="flex-1 font-body-regular text-sm text-cream">{ADDRESS}</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center justify-center gap-2 border-t border-cream/10 pt-md">
        <Ionicons name="card-outline" size={16} color={colors.creamMuted80} />
        <Text className="text-center font-body-regular text-xs text-creamMuted80">
          UPI · Cards · Google Pay · PhonePe · Paytm
        </Text>
      </View>

      <View className="flex-row flex-wrap items-center justify-center gap-x-md gap-y-1 border-t border-cream/10 pt-md">
        {POLICY_LINKS.map((link) => (
          <TouchableOpacity key={link} activeOpacity={0.7}>
            <Text className="font-body-regular text-xs text-creamMuted80 underline">{link}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text className="text-center font-body-regular text-[10px] leading-4 text-creamMuted80">
        © {new Date().getFullYear()} Bharat Oils. All rights reserved.{'\n'}FSSAI Lic. No. 10019876543210
      </Text>
    </View>
  );
}

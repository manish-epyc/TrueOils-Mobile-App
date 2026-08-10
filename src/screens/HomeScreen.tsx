import { ScrollView } from 'react-native';
import HeroBanner from '../components/home/HeroBanner';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-cream" contentContainerClassName="pb-10" showsVerticalScrollIndicator={false}>
      <HeroBanner />
    </ScrollView>
  );
}

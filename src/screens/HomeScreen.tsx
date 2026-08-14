import { ScrollView, View } from 'react-native';
import Header from '../components/Header';
import HeroBanner from '../components/home/HeroBanner';
import CollectionsSection from '../components/home/CollectionsSection';
import TrustBadges from '../components/home/TrustBadges';
import ProductSlider from '../components/home/ProductSlider';
import OurPromise from '../components/home/OurPromise';
import Testimonials from '../components/home/Testimonials';
import Footer from '../components/Footer';
import { bestSellerProducts, newArrivalProducts, topDiscountedProducts, topRatedProducts } from '../data/products';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-cream">
      <Header />
      <ScrollView className="flex-1 bg-cream" showsVerticalScrollIndicator={false}>
        <HeroBanner />
        <TrustBadges />
        <CollectionsSection />
        <ProductSlider
          title="Best Sellers"
          subtitle="Loved by our customers, again and again."
          products={bestSellerProducts}
        />
        <OurPromise />
        <ProductSlider title="Top Rated" subtitle="Highest rated oils by verified buyers." products={topRatedProducts} />
        <ProductSlider
          title="Top Discounts"
          subtitle="Best value picks, for a limited time."
          products={topDiscountedProducts}
        />
        <ProductSlider title="New Arrivals" subtitle="Freshly pressed, just added to the shelf." products={newArrivalProducts} />
        <Testimonials />
        <Footer />
      </ScrollView>
    </View>
  );
}

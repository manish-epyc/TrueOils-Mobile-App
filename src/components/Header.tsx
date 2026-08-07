import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fontFamily, fontSize, radius, spacing } from '../theme';
import { useCartStore } from '../store/cartStore';

export default function Header() {
  const cartCount = useCartStore((state) => state.lines.reduce((sum, l) => sum + l.quantity, 0));

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.promoBanner}>
        <Text style={styles.promoText}>
          The New Year's Sale <Text style={styles.promoTextUnderline}>Save 40%</Text> on all Products
        </Text>
      </View>

      <View style={styles.mainRow}>
        <Text style={styles.logo}>Trueoils</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.iconButton} accessibilityLabel="Search">
            <Ionicons name="search" size={20} color={colors.primaryDark} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.iconButton, styles.cartButton]} accessibilityLabel="Cart">
            <Ionicons name="cart" size={20} color={colors.cream} />
            {cartCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.cream,
  },
  promoBanner: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    alignItems: 'center',
  },
  promoText: {
    fontFamily: fontFamily.bodyRegular,
    fontSize: fontSize.xs,
    color: colors.cream,
  },
  promoTextUnderline: {
    textDecorationLine: 'underline',
  },
  mainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  logo: {
    fontFamily: fontFamily.displayBold,
    fontSize: fontSize.xl,
    color: colors.primaryDark,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(34,34,34,0.06)',
  },
  cartButton: {
    backgroundColor: colors.accent,
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: -2,
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  badgeText: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 9,
    color: colors.cream,
  },
});

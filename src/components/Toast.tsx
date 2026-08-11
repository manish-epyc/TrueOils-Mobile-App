import { useEffect, useRef } from 'react';
import { Animated, Modal, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';
import { useToastStore } from '../store/toastStore';

export default function Toast() {
  const message = useToastStore((state) => state.message);
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(12)).current;

  useEffect(() => {
    if (message) {
      Animated.parallel([
        Animated.timing(opacity, { toValue: 1, duration: 200, useNativeDriver: true }),
        Animated.timing(translateY, { toValue: 0, duration: 200, useNativeDriver: true }),
      ]).start();
    } else {
      Animated.timing(opacity, { toValue: 0, duration: 150, useNativeDriver: true }).start();
    }
  }, [message, opacity, translateY]);

  return (
    <Modal visible={!!message} transparent animationType="none" statusBarTranslucent onRequestClose={() => {}}>
      <View pointerEvents="none" className="flex-1 justify-end">
        <SafeAreaView edges={['bottom']} className="items-center px-lg" style={{ paddingBottom: 90 }}>
          <Animated.View
            style={{
              opacity,
              transform: [{ translateY }],
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              backgroundColor: colors.cream,
              borderWidth: 1,
              borderColor: 'rgba(47,67,35,0.12)',
              borderRadius: 40,
              paddingHorizontal: 18,
              paddingVertical: 10,
              shadowColor: '#000',
              shadowOpacity: 0.12,
              shadowRadius: 6,
              shadowOffset: { width: 0, height: 3 },
              elevation: 4,
            }}
          >
            <Ionicons name="checkmark-circle" size={16} color={colors.primary} />
            <Text style={{ color: colors.textDark, fontSize: 13 }}>{message}</Text>
          </Animated.View>
        </SafeAreaView>
      </View>
    </Modal>
  );
}

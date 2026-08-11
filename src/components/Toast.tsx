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
              backgroundColor: colors.primaryDark,
              borderWidth: 1,
              borderColor: colors.accent,
              borderRadius: 40,
              paddingHorizontal: 20,
              paddingVertical: 10,
              shadowColor: '#000',
              shadowOpacity: 0.2,
              shadowRadius: 8,
              shadowOffset: { width: 0, height: 4 },
              elevation: 6,
            }}
          >
            <Ionicons name="checkmark-circle" size={16} color={colors.accent} />
            <Text style={{ color: colors.cream, fontSize: 13 }}>{message}</Text>
          </Animated.View>
        </SafeAreaView>
      </View>
    </Modal>
  );
}

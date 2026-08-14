import { useEffect, useRef } from 'react';
import { Animated, Easing, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';

type Props = {
  minDurationMs?: number;
  onFinished?: () => void;
};

export default function LoadingScreen({ minDurationMs = 1600, onFinished }: Props) {
  const scale = useRef(new Animated.Value(0.9)).current;
  const opacity = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(scale, { toValue: 1.05, duration: 900, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
          Animated.timing(opacity, { toValue: 1, duration: 900, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        ]),
        Animated.parallel([
          Animated.timing(scale, { toValue: 0.9, duration: 900, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
          Animated.timing(opacity, { toValue: 0.4, duration: 900, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        ]),
      ])
    );
    pulse.start();

    const timer = setTimeout(() => onFinished?.(), minDurationMs);

    return () => {
      pulse.stop();
      clearTimeout(timer);
    };
  }, [opacity, scale, minDurationMs, onFinished]);

  return (
    <View className="flex-1 items-center justify-center gap-md bg-primary">
      <Animated.View
        style={{ transform: [{ scale }], opacity }}
        className="h-24 w-24 items-center justify-center rounded-full border border-cream/20 bg-cream/10"
      >
        <Ionicons name="water" size={52} color={colors.accent} />
      </Animated.View>
      <Text className="font-script text-3xl text-cream">Bharat Oils</Text>
    </View>
  );
}

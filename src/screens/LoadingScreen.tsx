import { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import { Image } from 'expo-image';

const LOGO_URL = 'https://trueoils.in/cdn/shop/files/White_TO_Logo.svg?height=60&v=1774588519';

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
    <View className="flex-1 items-center justify-center bg-primary">
      <Animated.View style={{ transform: [{ scale }], opacity }}>
        <Image source={{ uri: LOGO_URL }} style={{ width: 180, height: 68 }} contentFit="contain" />
      </Animated.View>
    </View>
  );
}

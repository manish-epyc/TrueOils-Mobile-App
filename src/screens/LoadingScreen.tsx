import { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import { fontFamily, fontSize } from '../theme';

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
      <Animated.Text
        style={{
          fontFamily: fontFamily.script,
          fontSize: fontSize.displayLg,
          transform: [{ scale }],
          opacity,
        }}
        className="text-cream"
      >
        Trueoils
      </Animated.Text>
    </View>
  );
}

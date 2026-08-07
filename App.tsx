import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Caveat_400Regular, Caveat_500Medium, Caveat_600SemiBold, Caveat_700Bold } from '@expo-google-fonts/caveat';
import { Lora_400Regular, Lora_500Medium, Lora_600SemiBold, Lora_700Bold } from '@expo-google-fonts/lora';
import HomeScreen from './src/screens/HomeScreen';
import Header from './src/components/Header';
import LoadingScreen from './src/screens/LoadingScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    Caveat_400Regular,
    Caveat_500Medium,
    Caveat_600SemiBold,
    Caveat_700Bold,
    Lora_400Regular,
    Lora_500Medium,
    Lora_600SemiBold,
    Lora_700Bold,
  });
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  if (!fontsLoaded || !minTimeElapsed) {
    return <LoadingScreen onFinished={() => setMinTimeElapsed(true)} />;
  }

  return (
    <SafeAreaProvider>
      <Header />
      <HomeScreen />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

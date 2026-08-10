import './global.css';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import HomeScreen from './src/screens/HomeScreen';
import Header from './src/components/Header';
import LoadingScreen from './src/screens/LoadingScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    ChickenHotty: require('./assets/fonts/ChickenHotty.ttf'),
    'PlayfairDisplay-Regular': require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
    'PlayfairDisplay-Medium': require('./assets/fonts/PlayfairDisplay-Medium.ttf'),
    'PlayfairDisplay-SemiBold': require('./assets/fonts/PlayfairDisplay-SemiBold.ttf'),
    'PlayfairDisplay-Bold': require('./assets/fonts/PlayfairDisplay-Bold.ttf'),
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

import { cssInterop } from 'nativewind';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

cssInterop(Image, { className: 'style' });
cssInterop(LinearGradient, { className: 'style' });
cssInterop(Ionicons, { className: 'style' });

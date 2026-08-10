import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';
import BottomSheet from './BottomSheet';

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating-desc';

const SORT_OPTIONS: { id: SortOption; label: string }[] = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating-desc', label: 'Top Rated' },
];

type Props = {
  visible: boolean;
  selected: SortOption;
  onSelect: (option: SortOption) => void;
  onClose: () => void;
};

export default function SortSheet({ visible, selected, onSelect, onClose }: Props) {
  return (
    <BottomSheet visible={visible} onClose={onClose}>
      <Text className="font-heading-medium text-md text-textDark">Sort by</Text>

      <View>
        {SORT_OPTIONS.map((option) => {
          const isSelected = option.id === selected;
          return (
            <TouchableOpacity
              key={option.id}
              onPress={() => {
                onSelect(option.id);
                onClose();
              }}
              className="flex-row items-center justify-between border-b border-primary/10 py-md"
              activeOpacity={0.7}
            >
              <Text className={`font-body-medium text-sm ${isSelected ? 'text-primary' : 'text-textDark'}`}>
                {option.label}
              </Text>
              {isSelected && <Ionicons name="checkmark" size={18} color={colors.primary} />}
            </TouchableOpacity>
          );
        })}
      </View>
    </BottomSheet>
  );
}

import { ReactNode, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';

export type AccordionItemData = {
  id: string;
  title: string;
  content: ReactNode;
};

type Props = {
  items: AccordionItemData[];
  defaultOpenId?: string;
};

export default function Accordion({ items, defaultOpenId }: Props) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(defaultOpenId ? [defaultOpenId] : []));

  const toggle = (id: string) => {
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <View className="gap-sm">
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        return (
          <View key={item.id} className="rounded-sm border border-primary/15">
            <TouchableOpacity
              onPress={() => toggle(item.id)}
              className="flex-row items-center justify-between px-md py-sm"
              activeOpacity={0.7}
            >
              <Text className="font-heading-medium text-md text-textDark">{item.title}</Text>
              <Ionicons name={isOpen ? 'remove' : 'add'} size={18} color={colors.primaryDark} />
            </TouchableOpacity>

            {isOpen && <View className="border-t border-primary/10 px-md py-sm">{item.content}</View>}
          </View>
        );
      })}
    </View>
  );
}

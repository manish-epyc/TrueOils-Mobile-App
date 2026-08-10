import { ReactNode } from 'react';
import { Modal, Pressable } from 'react-native';

type Props = {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function BottomSheet({ visible, onClose, children }: Props) {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable className="flex-1 justify-end bg-black/40" onPress={onClose}>
        <Pressable className="gap-md rounded-t-md bg-cream px-lg pb-xl pt-md">{children}</Pressable>
      </Pressable>
    </Modal>
  );
}

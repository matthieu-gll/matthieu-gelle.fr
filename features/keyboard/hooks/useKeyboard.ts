import { useDiscussionStore } from "@/features/discussion/stores/useDiscussionStore";
import { Keyboard } from "@/features/keyboard/classes/Keyboard";

export default function useKeyboard() {
  const discussion = useDiscussionStore();
  return { Keyboard: Keyboard.getInstance(discussion) };
}

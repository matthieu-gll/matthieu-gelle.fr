import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Message } from "@/features/discussion/types/Message";

export interface DiscussionState {
  messages: Message[];
  addMessage: (message: Message) => void;
  clearMessage: () => void;
}

const useDiscussionStore = create<DiscussionState>()(
  devtools(
    persist(
      (set, get) => ({
        messages: [],
        addMessage: (message) =>
          set((state) => ({ messages: [...state.messages, message] })),
        clearMessage: () => set(() => ({ messages: [] })),
      }),
      {
        name: "discussion-storage",
      }
    )
  )
);

export { useDiscussionStore };

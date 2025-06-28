import { create } from 'zustand';

interface ConversationState {
  conversationId: number | null;
  setConversationId: (id: number) => void;
  clearConversationId: () => void;
}

export const useConversationStore = create<ConversationState>(set => ({
  conversationId: null,
  setConversationId: id => set({ conversationId: id }),
  clearConversationId: () => set({ conversationId: null }),
}));

import { DiscussionState } from "@/features/discussion/stores/useDiscussionStore";

export interface Command {
  discussionState: DiscussionState;
  execute(): void;
}

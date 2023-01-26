import { Command } from "@/features/commands/interfaces/Command";
import { DiscussionState } from "@/features/discussion/stores/useDiscussionStore.js";

export default class ClearCommand implements Command {
  discussionState: DiscussionState;

  constructor(discussionState: DiscussionState) {
    this.discussionState = discussionState;
  }

  execute(): void {
    this.discussionState.clearMessage();
  }
}

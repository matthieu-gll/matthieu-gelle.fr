import { Command } from "@/features/commands/interfaces/Command";
import { DiscussionState } from "@/features/discussion/stores/useDiscussionStore";

export interface Executor {
  discussion: DiscussionState;
  executeCommand(command: Command, method: () => any): void;
}

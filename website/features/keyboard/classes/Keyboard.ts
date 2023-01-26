import { Command } from "@/features/commands/interfaces/Command";
import { DiscussionState } from "@/features/discussion/stores/useDiscussionStore";
import { Executor } from "@/features/keyboard/interfaces/Executor";

export class Keyboard implements Executor {
  private static instance: Keyboard;
  private constructor(discussion: DiscussionState) {
    this.discussion = discussion;
  }
  discussion: DiscussionState;

  executeCommand(command: Command): void {
    command.execute();
  }

  public static getInstance(discussion: DiscussionState): Keyboard {
    if (!Keyboard.instance) {
      Keyboard.instance = new Keyboard(discussion);
    }

    return Keyboard.instance;
  }
}

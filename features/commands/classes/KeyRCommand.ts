import { Command } from "@/features/commands/interfaces/Command";
import { DiscussionState } from "@/features/discussion/stores/useDiscussionStore";

export default class KeyECommand implements Command {
  discussionState: DiscussionState;

  constructor(discussionState: DiscussionState) {
    this.discussionState = discussionState;
  }

  execute(): void {
    this.discussionState.addMessage({
      type: "question",
      text: "'R' comme Raclette ?! 🤤",
    });

    this.discussionState.addMessage({
      type: "answer",
      text: "🤤🤤🤤 (j'adore ça !) <br/><br /> Plus sérieusement...  ",
    });
  }
}

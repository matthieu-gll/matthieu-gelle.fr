import { Command } from "@/features/commands/interfaces/Command";
import { DiscussionState } from "@/features/discussion/stores/useDiscussionStore";

export default class NotFoundCommand implements Command {
  discussionState: DiscussionState;
  constructor(discussionState: DiscussionState) {
    this.discussionState = discussionState;
  }
  execute(): void {
    this.discussionState.addMessage({
      type: "answer",
      text: "Je suis désolé il semble y avoir une erreur, je ne connais pas cette commande.",
    });
  }
}

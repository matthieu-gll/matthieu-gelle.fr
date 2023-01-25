import { Command } from "@/features/commands/interfaces/Command";
import { DiscussionState } from "@/features/discussion/stores/useDiscussionStore";

export default class KeyACommand implements Command {
  discussionState: DiscussionState;

  constructor(discussionState: DiscussionState) {
    this.discussionState = discussionState;
  }

  execute(): void {
    this.discussionState.addMessage({
      type: "question",
      text: "'A' comme Alternance ou encore Adobe ! Dis m'en plus ?",
    });

    this.discussionState.addMessage({
      type: "answer",
      text: "Diplomé d'un bac +5, j'ai effectué mes 3 dernières années d'études en alternance. Et oui effectivement j'ai eu l'occasion de développer mes compétences sur la suite Adobe (Photoshop, Illustrator, Adobe XD)",
    });
  }
}

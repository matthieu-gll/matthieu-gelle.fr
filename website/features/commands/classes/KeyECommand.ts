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
      text: "Que représente pour toi la lettre 'E' ?",
    });

    this.discussionState.addMessage({
      type: "answer",
      text: "'E' comme empathie.<br/><br/> Premièrement j'ai eu l'occasion de développer mes compétences en UX Design lors de mes études et lors de mes différentes participations aux projets de l'agence Insitaction. <br /><br/> En effet, étant une agence dans le milieu du Retail, je devais me mettre à la place des utilisateurs lors des développements. <br/><br /> De plus, grâce à ma formation à l'ECV qui allie le développement web et le design UX/UI. J'ai eu la chance d'avoir des cours théoriques qui m'ont permis d'approfondir mes connaissances dans ce domaine.",
    });
  }
}

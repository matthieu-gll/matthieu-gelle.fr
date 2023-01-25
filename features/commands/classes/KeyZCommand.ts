import { Command } from "@/features/commands/interfaces/Command";
import { DiscussionState } from "@/features/discussion/stores/useDiscussionStore";

export default class KeyZCommand implements Command {
  discussionState: DiscussionState;

  constructor(discussionState: DiscussionState) {
    this.discussionState = discussionState;
  }

  execute(): void {
    this.discussionState.addMessage({
      type: "question",
      text: "Qu'est-ce que tu peux me raconter avec la lettre 'Z' ?",
    });

    this.discussionState.addMessage({
      type: "answer",
      text: "La lettre 'Z' me fait penser a une librairie que j'ai utilisé lors du développement de ce site web: <a href='https://github.com/pmndrs/zustand' target='_blank'>zustand</a>.<br /><br /> C'est une librairie pour la gestion des états globaux en React.<br /><br /> D'ailleurs j'en profite pour vous partager le code source de ce site web sur ce <a href='https://github.com/matthieu-gll/matthieu-gelle.fr' target='_blank'>lien</a>.<br /><br /> Afin que vous puissiez vous faire une idée de mon niveau de compétence en développement.",
    });
  }
}

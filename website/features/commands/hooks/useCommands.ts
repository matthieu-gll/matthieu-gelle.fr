import {
  DiscussionState,
  useDiscussionStore,
} from "@/features/discussion/stores/useDiscussionStore";
import KeyACommand from "@/features/commands/classes/KeyACommand";
import NotFoundCommand from "@/features/commands/classes/NotFoundCommand";
import ClearCommand from "@/features/commands/classes/ClearCommand";
import { Command } from "@/features/commands/interfaces/Command";
import KeyZCommand from "@/features/commands/classes/KeyZCommand";
import KeyECommand from "@/features/commands/classes/KeyECommand";

export default function useCommands() {
  const discussion = useDiscussionStore();

  const getCommandFromKey = (key: string): Command => {
    switch (key) {
      case "a":
        return new KeyACommand(discussion);
      case "z":
        return new KeyZCommand(discussion);
      case "e":
        return new KeyECommand(discussion);
      case "🗑️":
        return new ClearCommand(discussion);
      default:
        return new NotFoundCommand(discussion);
    }
  };

  return { getCommandFromKey };
}

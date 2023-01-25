"use client";

import useCommands from "@/features/commands/hooks/useCommands";
import useKeyboard from "@/features/keyboard/hooks/useKeyboard";

type KeyboardKeyProps = {
  keyboardKey: string;
};

export default function KeyboardKey(props: KeyboardKeyProps) {
  const { keyboardKey } = props;
  const { Keyboard } = useKeyboard();
  const { getCommandFromKey } = useCommands();

  const handleClick = (key: string) => {
    const command = getCommandFromKey(key);
    Keyboard.executeCommand(command);
  };

  return (
    <button
      key={keyboardKey}
      className="bg-zinc-800 rounded uppercase w-8 h-10 hover:bg-zinc-600"
      onClick={() => handleClick(keyboardKey)}
    >
      {keyboardKey}
    </button>
  );
}

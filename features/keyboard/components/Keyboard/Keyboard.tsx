import keyboardKeys from "@/features/keyboard/constants/keyboardKeys";
import KeyboardKey from "@/features/keyboard/components/KeyboardKey/KeyboardKey.client";

export default function Keyboard() {
  return (
    <section className="w-full bg-zinc-900 fixed bottom-0 left-1/2 -translate-x-1/2 border-t border-zinc-400">
      <div className="p-4 flex justify-center flex-wrap max-w-xs mx-auto w-full gap-2">
        {keyboardKeys.map((keyboard) => (
          <KeyboardKey key={keyboard} keyboardKey={keyboard} />
        ))}
      </div>
    </section>
  );
}

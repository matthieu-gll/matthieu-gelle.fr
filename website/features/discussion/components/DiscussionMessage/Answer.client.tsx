"use client";

import { Message } from "@/features/discussion/types/Message";
import Image from "next/image";
import { useEffect, useState } from "react";

type AnswerProps = {
  message: Message;
};

export default function Answer(props: AnswerProps) {
  const { message } = props;

  const [text, setText] = useState("Matthieu est entrain d'écrire...");

  useEffect(() => {
    setTimeout(() => {
      setText(message.text);
    }, 1000);
  }, [message.text]);

  return (
    <div className="flex gap-2 bg-slate-700 p-2 rounded mr-4">
      <Image
        className="h-8 w-8 rounded-full"
        src={"/images/gelle-matthieu.webp"}
        height={200}
        width={200}
        alt=""
      />
      <div className="inner-html" dangerouslySetInnerHTML={{ __html: text }}></div>
    </div>
  );
}

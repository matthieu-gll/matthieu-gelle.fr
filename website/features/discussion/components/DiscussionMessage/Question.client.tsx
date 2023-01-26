"use client";

import { Message } from "@/features/discussion/types/Message";

type QuestionProps = {
  message: Message;
};

export default function Question(props: QuestionProps) {
  const { message } = props;
  return (
    <div className="bg-slate-800 p-2 rounded flex ml-4">
      <p>{message.text}</p>
    </div>
  );
}

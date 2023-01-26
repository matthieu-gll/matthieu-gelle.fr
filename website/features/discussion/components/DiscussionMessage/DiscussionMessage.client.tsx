"use client";

import { Message } from "@/features/discussion/types/Message";
import Answer from "./Answer.client";
import Question from "./Question.client";

type DiscussionMessageProps = {
  message: Message;
};

export default function DiscussionMessage(props: DiscussionMessageProps) {
  const { message } = props;

  if (message.type === "answer") {
    return <Answer message={message} />;
  }

  return <Question message={message} />;
}

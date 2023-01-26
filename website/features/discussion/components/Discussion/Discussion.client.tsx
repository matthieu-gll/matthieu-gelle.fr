"use client";

import styles from "./Discussion.module.css";
import classNames from "classnames/bind";
import DiscussionMessage from "@/features/discussion/components/DiscussionMessage/DiscussionMessage.client";
import { useDiscussionStore } from "@/features/discussion/stores/useDiscussionStore";

let cx = classNames.bind(styles);

export default function DiscussionComponent() {
  const { messages } = useDiscussionStore();

  return (
    <section className={cx("Discussion")}>
      {messages.map((message, index) => (
        <DiscussionMessage
          key={`DiscussionMessage--${index}`}
          message={message}
        />
      ))}
    </section>
  );
}

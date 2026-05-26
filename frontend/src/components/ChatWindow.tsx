"use client";

import { useState } from "react";

import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";

import { Message } from "../types/chat";

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm your AI portfolio assistant. Ask me about skills, projects, or experience.",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentInput = input;

    setInput("");

          try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/chat?prompt=${encodeURIComponent(
            currentInput
          )}`
        );

        const data = await response.json();

        const assistantMessage: Message = {
          role: "assistant",
          content: data.response,
        };

        setMessages((prev) => [...prev, assistantMessage]);

      } catch (error) {
        console.error(error);

        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Error connecting to AI backend.",
          },
        ]);
      }
  };

  return (
              <div
          className="
            w-[40vw]
            h-[60vh]
            min-w-[320px]
            max-w-[900px]
            min-h-[500px]
            bg-zinc-900
            border
            border-zinc-800
            rounded-2xl
            p-4
            md:p-6
            flex
            flex-col
            shadow-2xl
          "
        >
      <div className="mb-6 border-b border-zinc-800 pb-4">
        <h1 className="text-2xl font-bold text-white">
          AI Resume Chatbot
        </h1>

        <p className="text-zinc-400 mt-2 text-sm">
          Ask me anything about skills, projects, or experience.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((message, index) => (
          <MessageBubble
            key={index}
            message={message}
          />
        ))}
      </div>

      <ChatInput
        input={input}
        setInput={setInput}
        handleSend={handleSend}
      />
    </div>
  );
}

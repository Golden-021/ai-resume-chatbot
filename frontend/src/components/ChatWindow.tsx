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

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    const assistantMessage: Message = {
      role: "assistant",
      content:
        "This is a temporary AI response. Real AI integration coming next.",
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      assistantMessage,
    ]);

    setInput("");
  };

  return (
    <div className="w-full max-w-4xl h-[700px] bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col">
      <div className="mb-6 border-b border-zinc-800 pb-4">
        <h1 className="text-3xl font-bold text-white">
          AI Resume Chatbot
        </h1>

        <p className="text-zinc-400 mt-2">
          Ask me anything about my experience and projects.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto">
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
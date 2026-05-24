interface Props {
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
}

export default function ChatInput({
  input,
  setInput,
  handleSend,
}: Props) {
  return (
    <div className="flex gap-3 mt-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
        className="flex-1 bg-zinc-800 text-white px-4 py-3 rounded-xl outline-none border border-zinc-700"
      />

      <button
        onClick={handleSend}
        className="bg-white text-black px-6 rounded-xl font-semibold"
      >
        Send
      </button>
    </div>
  );
}
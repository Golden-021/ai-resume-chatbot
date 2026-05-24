type Props = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSend: () => void;
};

export default function ChatInput({
  input,
  setInput,
  handleSend,
}: Props) {
  return (
    <div className="flex gap-3">
      <input
        type="text"
        placeholder="Ask something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
        className="flex-1 bg-zinc-800 text-white px-4 py-3 rounded-xl outline-none border border-zinc-700"
      />

      <button
        onClick={handleSend}
        className="bg-white text-black px-5 rounded-xl font-medium hover:opacity-90 transition"
      >
        Send
      </button>
    </div>
  );
}
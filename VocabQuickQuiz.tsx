
import { useState } from "react";

const words = [
  { word: "To spark", translation: "Innescare" },
  { word: "Tactful", translation: "Diplomatico" },
  { word: "Outgoing", translation: "Estroverso" },
];

export default function VocabQuickQuiz() {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [answered, setAnswered] = useState(false);

  const current = words[index];

  const checkAnswer = () => {
    if (answered) return;
    const user = input.trim().toLowerCase();
    const correct = current.word.toLowerCase();
    setFeedback(user === correct ? "Correct!" : `Wrong. It was: ${current.word}`);
    setAnswered(true);
  };

  const nextWord = () => {
    setInput("");
    setFeedback("");
    setAnswered(false);
    setIndex((index + 1) % words.length);
  };

  return (
    <div style={{ marginTop: 20 }}>
      <p><strong>Translate:</strong> {current.translation}</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write in English"
        disabled={answered}
        style={{ padding: 8, width: "100%", marginBottom: 10 }}
      />
      <div>
        <button onClick={checkAnswer} disabled={answered} style={{ marginRight: 10 }}>Check</button>
        <button onClick={nextWord} disabled={!answered}>Next</button>
      </div>
      {feedback && <p style={{ marginTop: 10, fontStyle: "italic" }}>{feedback}</p>}
    </div>
  );
}

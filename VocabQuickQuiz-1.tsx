import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

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
    <div className="p-6 max-w-md mx-auto">
      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="text-xl font-semibold">Translate this:</h2>
          <p className="text-lg">{current.translation}</p>

          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write in English"
            disabled={answered}
          />

          <div className="flex space-x-2">
            <Button onClick={checkAnswer} disabled={answered}>Check</Button>
            <Button variant="outline" onClick={nextWord} disabled={!answered}>Next</Button>
          </div>

          {feedback && <p className="text-sm italic mt-2">{feedback}</p>}
        </CardContent>
      </Card>
    </div>
  );
}
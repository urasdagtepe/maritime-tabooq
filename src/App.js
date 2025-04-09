import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

const cards = [
  { word: "Port", taboo: ["berth", "stop", "load/unload"] },
  { word: "Bridge Room", taboo: ["captain", "rudder", "observe"] },
  { word: "Manoeuvre", taboo: ["move", "change", "course"] },
  { word: "Machinery", taboo: ["machine", "engine", "equipment"] },
  { word: "Crane", taboo: ["lift", "heavy", "machine"] },
  { word: "Ship Engineer", taboo: ["work", "sea", "fix"] },
  { word: "Stability", taboo: ["sink", "balanced", "fixed"] },
  { word: "Rudder", taboo: ["control", "steer", "direction"] },
  { word: "Master", taboo: ["captain", "leader", "crew"] },
  { word: "Tug", taboo: ["pull/push", "docking", "rope"] },
];

export default function MaritimeTabooGame() {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const { word, taboo } = cards[index];

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">⚓ Maritime Taboo Game</h1>
      <Card className="w-full max-w-md bg-white shadow-xl rounded-2xl border-blue-200">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">🎯 Word: <span className="text-black">{word}</span></h2>
          <h3 className="text-lg font-medium text-red-600 mb-1">❌ Taboo Words:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {taboo.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Button onClick={nextCard} className="mt-6 bg-blue-700 text-white hover:bg-blue-800">
        Next Card <ArrowRight className="ml-2" />
      </Button>
    </div>
  );
}

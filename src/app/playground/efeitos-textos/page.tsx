"use client";

import DottedShadowText from "@/app/components/DottedShadowText/DottedShadowText";
import { useState } from "react";
const PlaygroundTextEffects = () => {
  const [text, setText] = useState("Gilson");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <label htmlFor="texto" className="mb-2 text-sm font-medium text-gray-700">
        Digite seu texto aqui
      </label>
      <input
        id="texto"
        type="text"
        placeholder="Digite seu e-mail"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-72 p-3 text-sm border rounded-lg shadow-sm 
                   border-gray-300 focus:outline-none focus:ring-2 
                   focus:ring-blue-500 focus:border-blue-500 
                   bg-white text-gray-700"
      />
      <DottedShadowText text={text} />
    </div>
  );
};

export default PlaygroundTextEffects;

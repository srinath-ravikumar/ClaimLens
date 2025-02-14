"use client";

import { useState } from "react";
import Survey from "./Survey";
import Image from "next/image";

type Claim = {
  id: number;
  author: string;
  authorHandle: string;
  authorAvatar: string;
  text: string;
  truthfulness: string;
  harmfulness: string;
  persuasiveness: string;
  explanation: string;
};

export default function Claim({ claim }: { claim: Claim }) {
  const [showExplanation, setShowExplanation] = useState(false);
  const [currentExplanation, setCurrentExplanation] = useState("");

  const handleShowExplanation = (explanation: string) => {
    setCurrentExplanation(explanation);
    setShowExplanation(true);
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
      {/* Author and Claim Content */}
      <div className="flex items-center mb-4">
        <Image
          src={claim.authorAvatar}
          alt={claim.author}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h2 className="font-bold text-white">{claim.author}</h2>
          <p className="text-sm text-gray-400">@{claim.authorHandle}</p>
        </div>
      </div>
      <p className="text-lg text-gray-200 mb-4">{claim.text}</p>

      {/* Labels Section */}
      <div className="space-x-2 mb-4">
        {/* Truthfulness Label */}
        {claim.truthfulness && (
          <span
            onMouseEnter={() =>
              handleShowExplanation(
                `Truthfulness: ${claim.truthfulness}. ${claim.explanation}`
              )
            }
            onMouseLeave={() => setShowExplanation(false)}
            className={`px-2 py-1 rounded cursor-pointer ${
              claim.truthfulness === "True"
                ? "bg-green-500 text-white"
                : claim.truthfulness === "False"
                ? "bg-red-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            {claim.truthfulness === "True"
              ? "Likely True"
              : claim.truthfulness === "False"
              ? "Likely False"
              : "Misleading"}
          </span>
        )}

        {/* Harmfulness Label */}
        {claim.harmfulness && (
          <span
            onMouseEnter={() =>
              handleShowExplanation(
                `Harmfulness: ${claim.harmfulness}. ${claim.explanation}`
              )
            }
            onMouseLeave={() => setShowExplanation(false)}
            className={`px-2 py-1 rounded cursor-pointer ${
              claim.harmfulness === "High"
                ? "bg-red-500 text-white"
                : claim.harmfulness === "Low"
                ? "bg-orange-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            {claim.harmfulness === "High"
              ? "High Harm"
              : claim.harmfulness === "Low"
              ? "Low Harm"
              : "No Harm"}
          </span>
        )}

        {/* Persuasiveness Label */}
        {claim.persuasiveness && (
          <span
            onMouseEnter={() =>
              handleShowExplanation(
                `Persuasiveness: ${claim.persuasiveness}. ${claim.explanation}`
              )
            }
            onMouseLeave={() => setShowExplanation(false)}
            className={`px-2 py-1 rounded cursor-pointer ${
              claim.persuasiveness === "High"
                ? "bg-red-500 text-white"
                : claim.persuasiveness === "Low"
                ? "bg-orange-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            {claim.persuasiveness === "High"
              ? "Highly Persuasive"
              : claim.persuasiveness === "Low"
              ? "Mildly Persuasive"
              : "Not Persuasive"}
          </span>
        )}
      </div>

      {/* Explanation Section */}
      {showExplanation && (
        <p className="text-sm text-gray-300 italic">{currentExplanation}</p>
      )}

      {/* Survey Section */}
      <Survey claimId={claim.id} />
    </div>
  );
}

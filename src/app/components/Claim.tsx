"use client";

import { useState, useRef, useEffect } from "react";
import Survey from "./Survey";
import Image from "next/image";
import { ClaimType } from "../types";

export default function Claim({ claim }: { claim: ClaimType }) {
  const [showExplanation, setShowExplanation] = useState(false);
  const [currentExplanation, setCurrentExplanation] = useState("");
  const [claimVote, setClaimVote] = useState<'up' | 'down' | null>(null);
  const [explanationVote, setExplanationVote] = useState<'up' | 'down' | null>(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const popupRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleShowExplanation = (explanation: string, event: React.MouseEvent) => {
    setCurrentExplanation(explanation);
    const rect = event.currentTarget.getBoundingClientRect();
    setPopupPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX
    });
    setShowExplanation(true);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
  };

  const handleHideExplanation = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setShowExplanation(false);
    }, 300); // 300ms delay before closing
  };

  const handlePopupMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
  };

  const handleClaimVote = (vote: 'up' | 'down') => {
    setClaimVote(vote);
    // Here you would typically send this vote to your backend
  };

  const handleExplanationVote = (vote: 'up' | 'down') => {
    setExplanationVote(vote);
    // Here you would typically send this vote to your backend
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowExplanation(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

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

      {/* Claim Voting */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => handleClaimVote('up')}
          className={`mr-2 ${claimVote === 'up' ? 'text-green-500' : 'text-gray-400'}`}
        >
          👍
        </button>
        <button
          onClick={() => handleClaimVote('down')}
          className={claimVote === 'down' ? 'text-red-500' : 'text-gray-400'}
        >
          👎
        </button>
      </div>

      {/* Labels Section */}
      <div className="space-x-2 mb-4">
        {/* Truthfulness Label */}
        {claim.truthfulness && (
          <span
            onMouseEnter={(e) => handleShowExplanation(`Truthfulness: ${claim.truthfulness}. ${claim.explanation}`, e)}
            onMouseLeave={handleHideExplanation}
            className={`px-2 py-1 rounded cursor-pointer ${
              claim.truthfulness === "True"
                ? "bg-blue-500 text-white"
                : claim.truthfulness === "False"
                ? "bg-blue-700 text-white"
                : "bg-blue-300 text-white"
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
            onMouseEnter={(e) => handleShowExplanation(`Harmfulness: ${claim.harmfulness}. ${claim.explanation}`, e)}
            onMouseLeave={handleHideExplanation}
            className={`px-2 py-1 rounded cursor-pointer ${
              claim.harmfulness === "High"
                ? "bg-red-700 text-white"
                : claim.harmfulness === "Low"
                ? "bg-red-500 text-white"
                : "bg-red-300 text-white"
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
            onMouseEnter={(e) => handleShowExplanation(`Persuasiveness: ${claim.persuasiveness}. Manipulation Techniques: ${claim.manipulationTechniques.join(", ")}. ${claim.explanation}`, e)}
            onMouseLeave={handleHideExplanation}
            className={`px-2 py-1 rounded cursor-pointer ${
              claim.persuasiveness === "High"
                ? "bg-green-700 text-white"
                : claim.persuasiveness === "Low"
                ? "bg-green-500 text-white"
                : "bg-green-300 text-white"
            }`}
          >
            {claim.persuasiveness === "High"
              ? "Highly Persuasive"
              : claim.persuasiveness === "Low"
              ? "Mildly Persuasive"
              : "Not Persuasive"}
          </span>
        )}

        {/* Manipulation Techniques Labels */}
        {claim.manipulationTechniques.map((technique, index) => (
          <span
            key={index}
            className="px-2 py-1 rounded bg-purple-500 text-white text-sm"
          >
            {technique}
          </span>
        ))}
      </div>

      {/* Explanation Popup */}
      {showExplanation && (
        <div 
          ref={popupRef}
          className="absolute bg-gray-800 p-4 rounded-lg shadow-lg z-50"
          style={{ top: `${popupPosition.top}px`, left: `${popupPosition.left}px` }}
          onMouseEnter={handlePopupMouseEnter}
          onMouseLeave={handleHideExplanation}
        >
          <p className="text-sm text-gray-300 mb-4">{currentExplanation}</p>
          <div className="flex justify-between">
            <div>
              <button
                onClick={() => handleExplanationVote('up')}
                className={`mr-2 ${explanationVote === 'up' ? 'text-green-500' : 'text-gray-400'}`}
              >
                👍
              </button>
              <button
                onClick={() => handleExplanationVote('down')}
                className={explanationVote === 'down' ? 'text-red-500' : 'text-gray-400'}
              >
                👎
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Survey Section */}
      <Survey claimId={claim.id} />
    </div>
  );
}

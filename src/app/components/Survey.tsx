'use client';

import { useState } from 'react';

export default function Survey({ claimId }: { claimId: number }) {
  const [trustRating, setTrustRating] = useState<number | null>(null);
  const [accuracyRating, setAccuracyRating] = useState<number | null>(null);

  const handleRate = (type: string, value: number) => {
    if (type === 'trust') {
      setTrustRating(value);
    } else if (type === 'accuracy') {
      setAccuracyRating(value);
    }
    console.log(`Claim ${claimId} - ${type}: ${value}`);
  };

  return (
    <div className="mt-6 bg-gray-900 p-6 rounded-lg shadow-md text-white">
      <p className="text-lg font-semibold mb-4">Evaluate the Claim</p>

      {/* Trustworthiness Rating */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-300 mb-2">Trustworthiness (1–7):</p>
        <div className="flex space-x-3">
          {[1, 2, 3, 4, 5, 6, 7].map((value) => (
            <button
              key={value}
              onClick={() => handleRate('trust', value)}
              className={`w-10 h-10 rounded-full text-sm font-bold transition-all ${
                trustRating === value
                  ? 'bg-blue-500 text-white shadow-md scale-110'
                  : 'bg-gray-700 text-gray-300 hover:bg-blue-400 hover:text-white'
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {/* Accuracy Rating */}
      <div>
        <p className="text-sm font-medium text-gray-300 mb-2">Accuracy (1–7):</p>
        <div className="flex space-x-3">
          {[1, 2, 3, 4, 5, 6, 7].map((value) => (
            <button
              key={value}
              onClick={() => handleRate('accuracy', value)}
              className={`w-10 h-10 rounded-full text-sm font-bold transition-all ${
                accuracyRating === value
                  ? 'bg-green-500 text-white shadow-md scale-110'
                  : 'bg-gray-700 text-gray-300 hover:bg-green-400 hover:text-white'
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

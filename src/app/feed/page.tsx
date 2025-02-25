"use client";

import { useState } from "react";
import SimulatedFeed from "../components/SimulatedFeed";
import LabelFilter from "../components/LabelFilter";
import claimsData from "../data/claims";
import { useRouter } from 'next/navigation';

type Filters = {
  truthfulness: string[];
  harmfulness: string[];
  persuasiveness: string[];
};

export default function FeedPage() {
  const router = useRouter();
  const [filteredClaims, setFilteredClaims] = useState(claimsData);

  const handleFilter = (filters: Filters) => {
    const newFilteredClaims = claimsData.filter((claim) => {
      return (
        (filters.truthfulness.length === 0 || filters.truthfulness.includes(claim.truthfulness)) &&
        (filters.harmfulness.length === 0 || filters.harmfulness.includes(claim.harmfulness)) &&
        (filters.persuasiveness.length === 0 || filters.persuasiveness.includes(claim.persuasiveness))
      );
    });
    setFilteredClaims(newFilteredClaims);
  };

  return (
    <div className="min-h-screen text-white p-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => router.push('/')}
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:-translate-y-1 hover:shadow-lg"
        >
          ⬅ Back to Home
        </button>
        <h1 className="text-3xl font-bold text-center mb-6">
          Simulated Social Media Feed
        </h1>
        <LabelFilter onFilter={handleFilter} />
        <SimulatedFeed claims={filteredClaims} />
      </div>
    </div>
  );
}

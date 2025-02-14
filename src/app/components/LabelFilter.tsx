'use client';

import { useState } from 'react';

type Filters = {
    truthfulness: string;
    harmfulness: string;
    persuasiveness: string;
  };

export default function LabelFilter({ onFilter }: { onFilter: (filters: Filters) => void }) {
  const [filters, setFilters] = useState({
    truthfulness: '',
    harmfulness: '',
    persuasiveness: '',
  });

  const handleChange = (filterType: string, value: string) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold text-white mb-4">Filter Claims</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Truthfulness Dropdown */}
        <div className="flex flex-col">
          <label htmlFor="truthfulness" className="text-sm font-semibold text-gray-300 mb-2">
            Truthfulness
          </label>
          <select
            id="truthfulness"
            value={filters.truthfulness}
            onChange={(e) => handleChange('truthfulness', e.target.value)}
            className="px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All</option>
            <option value="True">True</option>
            <option value="False">False</option>
            <option value="Misleading">Misleading</option>
          </select>
        </div>

        {/* Harmfulness Dropdown */}
        <div className="flex flex-col">
          <label htmlFor="harmfulness" className="text-sm font-semibold text-gray-300 mb-2">
            Harmfulness
          </label>
          <select
            id="harmfulness"
            value={filters.harmfulness}
            onChange={(e) => handleChange('harmfulness', e.target.value)}
            className="px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">All</option>
            <option value="High">High</option>
            <option value="Low">Low</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Persuasiveness Dropdown */}
        <div className="flex flex-col">
          <label htmlFor="persuasiveness" className="text-sm font-semibold text-gray-300 mb-2">
            Persuasiveness
          </label>
          <select
            id="persuasiveness"
            value={filters.persuasiveness}
            onChange={(e) => handleChange('persuasiveness', e.target.value)}
            className="px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">All</option>
            <option value="High">High</option>
            <option value="Low">Low</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
    </div>
  );
}

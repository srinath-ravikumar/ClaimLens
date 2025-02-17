'use client';

import React, { useState } from 'react';
import Select from 'react-select';

type Filters = {
  truthfulness: string[];
  harmfulness: string[];
  persuasiveness: string[];
  manipulationTechniques: string[];
};

type Option = {
  value: string;
  label: string;
};

export default function LabelFilter({ onFilter }: { onFilter: (filters: Filters) => void }) {
  const [filters, setFilters] = useState<Filters>({
    truthfulness: [],
    harmfulness: [],
    persuasiveness: [],
    manipulationTechniques: [],
  });

  const truthfulnessOptions: Option[] = [
    { value: 'True', label: 'True' },
    { value: 'False', label: 'False' },
    { value: 'Misleading', label: 'Misleading' },
  ];

  const harmfulnessOptions: Option[] = [
    { value: 'High', label: 'High' },
    { value: 'Low', label: 'Low' },
    { value: 'No', label: 'No' },
  ];

  const persuasivenessOptions: Option[] = [
    { value: 'High', label: 'High' },
    { value: 'Low', label: 'Low' },
    { value: 'No', label: 'No' },
  ];

  const manipulationTechniquesOptions: Option[] = [
    { value: 'Conspiracy', label: 'Conspiracy' },
    { value: 'Polarization', label: 'Polarization' },
    { value: 'Emotion', label: 'Emotion' },
    { value: 'Ad Hominem', label: 'Ad Hominem' },
    { value: 'Fake Dichotomy', label: 'Fake Dichotomy' },
    { value: 'False Expert', label: 'False Expert' },
    { value: 'Incoherence', label: 'Incoherence' },
  ];

  const handleChange = (filterType: keyof Filters, selectedOptions: readonly Option[]) => {
    const newFilters = {
      ...filters,
      [filterType]: selectedOptions.map(option => option.value),
    };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold text-white mb-4">Filter Claims</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="truthfulness" className="text-sm font-semibold text-gray-300 mb-2">
            Truthfulness
          </label>
          <Select
            id="truthfulness"
            isMulti
            options={truthfulnessOptions}
            onChange={(selectedOptions) => handleChange('truthfulness', selectedOptions)}
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="harmfulness" className="text-sm font-semibold text-gray-300 mb-2">
            Harmfulness
          </label>
          <Select
            id="harmfulness"
            isMulti
            options={harmfulnessOptions}
            onChange={(selectedOptions) => handleChange('harmfulness', selectedOptions)}
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="persuasiveness" className="text-sm font-semibold text-gray-300 mb-2">
            Persuasiveness
          </label>
          <Select
            id="persuasiveness"
            isMulti
            options={persuasivenessOptions}
            onChange={(selectedOptions) => handleChange('persuasiveness', selectedOptions)}
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="manipulationTechniques" className="text-sm font-semibold text-gray-300 mb-2">
            Manipulation Techniques
          </label>
          <Select
            id="manipulationTechniques"
            isMulti
            options={manipulationTechniquesOptions}
            onChange={(selectedOptions) => handleChange('manipulationTechniques', selectedOptions)}
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>
      </div>
    </div>
  );
}

// src/types.ts
export type ClaimType = {
    id: number;
    author: string;
    authorHandle: string;
    authorAvatar: string;
    text: string;
    truthfulness: string;
    harmfulness: string;
    persuasiveness: string;
    manipulationTechniques: string[];
    explanation: string;
  };
  
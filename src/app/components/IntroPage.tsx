'use client';

import { useRouter } from 'next/navigation';

export default function IntroPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br">
      <div className="max-w-2xl mx-auto bg-gray-800 bg-opacity-90 rounded-lg shadow-xl p-8 space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-300">
          Welcome to ClaimLens
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed text-center">
          This study aims to help you better detect misinformation on social media platforms. You will be presented with a simulated social media feed containing various claims. Your task is to evaluate the validity of the labels attached to each claim.
        </p>
        <div className="text-center">
          <button
            onClick={() => router.push('/feed')}
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Start Study
          </button>
        </div>
      </div>
    </div>
  );
}

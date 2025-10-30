'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a1a] text-white p-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-xl mb-8">We're working on fixing this issue. Please try again later.</p>
      <button
        onClick={() => reset()}
        className="bg-[#DAA520] hover:bg-[#B8860B] text-[#121212] font-semibold py-2 px-6 rounded-full transition-colors"
      >
        Try again
      </button>
    </div>
  );
}

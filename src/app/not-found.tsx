import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a1a] text-white p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link 
        href="/" 
        className="bg-[#DAA520] hover:bg-[#B8860B] text-[#121212] font-semibold py-2 px-6 rounded-full transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}

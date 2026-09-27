  import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <p className="text-[#ccff00] font-bold tracking-[0.3em] text-sm mb-4">
          FITLOG
        </p>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
          404
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold mt-4">
          WORKOUT NOT FOUND
        </h2>

        <p className="text-gray-400 mt-4 text-base md:text-lg">
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center mt-8
          bg-[#ccff00] text-black font-bold px-6 py-3
          rounded-full hover:bg-[#1A2312] hover:text-[#C2F800] transition"
        >
          BACK TO HOME
        </Link>
      </div>
    </main>
  );
}
 

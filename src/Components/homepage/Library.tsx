"use client";

import React, { useEffect, useState } from "react";
import LibraryCards from "../shared/LibraryCards";
import { ILibrary } from "@/types/library.type";

const Library = () => {
  const [libraryData, setLibraryData] = useState<ILibrary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getLibrary = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
        const res = await fetch(`${baseUrl}/data.json`);

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setLibraryData(data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };

    getLibrary();
  }, []);

  if (loading) {
    return (
      <section id="library" className="container mx-auto px-4 py-16">
        <h1 className="font-bold text-4xl ">THE LIBRARY</h1>
        <p className="text-[#9CA3AF] mb-8">Twelve lifts covering every major muscle group.</p>
        <div className="flex justify-center items-center py-20">
          <span className="loading loading-spinner loading-lg text-[#C2F800]"></span>
        </div>
      </section>
    );
  }

  return (
    <section id="library" className="container mx-auto px-4 py-16">
      {/* Cards Grid */}
      <h1 className="font-bold text-4xl ">THE LIBRARY</h1>
      <p className="text-[#9CA3AF] mb-8">Twelve lifts covering every major muscle group.</p>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {libraryData.map((library: ILibrary, id: number) => {
          return <LibraryCards key={id} library={library} />;
        })}
      </div>
    </section>
  );
};

export default Library;

import dynamic from 'next/dynamic'
import React from "react";

import { ILibrary } from "@/types/library.type";
import LibraryCards from "@/Components/shared/LibraryCards";
import Banner from "@/Components/homepage/Banner";

const getLibrary = async () => {
       const res = await fetch("http://localhost:3000/data.json");

       if (!res.ok) {
              throw new Error("Failed to fetch data");
       }

       return res.json();
};

const Library = async () => {
       const libraryData = await getLibrary();

       return (
              <main>
                     {/* Banner */}
                     <Banner />

                     {/* Library */}
                     <section
                     id="library"
                      className="container mx-auto px-4 py-16">
                            {/* Heading */}
                            <h1 className="text-4xl font-bold">
                                   THE LIBRARY
                            </h1>

                            <p className="mb-8 text-[#9CA3AF]">
                                   Twelve lifts covering every major muscle group.
                            </p>

                            {/* Cards Grid */}
                            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                                   {libraryData.map((library: ILibrary) => (
                                          <LibraryCards
                                                 key={library.id}
                                                 library={library}
                                          />
                                   ))}
                            </div>
                     </section>
              </main>
       );
};

export default Library;
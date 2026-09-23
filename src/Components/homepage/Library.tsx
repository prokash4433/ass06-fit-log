import React from "react";
 
import LibraryCards from "../shared/LibraryCards";
import { ILibrary } from "@/types/library.type";

const getLibrary = async () => {
          const res = await fetch("http://localhost:3001/data.json");

          if (!res.ok) {
                    throw new Error("Failed to fetch data");
          }

          return res.json();
};

const Library = async () => {
          const libraryData = await getLibrary();

          return (
                    <section className="container mx-auto px-4 py-16">
                              {/* Cards Grid */}
                              <h1 className="font-bold text-4xl ">THE LIBRARY</h1>
                              <p className="text-[#9CA3AF] mb-8">Twelve lifts covering every major muscle group.</p>
                              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                               
                                        {libraryData.map((library:ILibrary, id:number) => {
                                                  return <LibraryCards key={id} library={library} /> 
                                        })}
                              </div>
                    </section>
          );
};

export default Library;
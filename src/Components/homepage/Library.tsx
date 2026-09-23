import React from "react";
import Image from "next/image";

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
                              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                        {libraryData.map((library: any) => (
                                                  <div
                                                            key={library.id}
                                                            className="overflow-hidden rounded-2xl border border-[#292c35] bg-[#15171d] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#b6ff00]/50 hover:shadow-2xl"
                                                  >
                                                            {/* Image */}
                                                            <div className="relative h-[205px] w-full overflow-hidden">
                                                                      <Image
                                                                                src={library.image}
                                                                                alt={library.name}
                                                                                fill
                                                                                className="object-cover transition-transform duration-500 hover:scale-105"
                                                                      />
                                                            </div>

                                                            {/* Card Content */}
                                                            <div className="px-6 py-5">
                                                                      {/* Muscle Groups */}
                                                                      <div className="mb-4 flex flex-wrap gap-2">
                                                                                {library.muscleGroups.map((muscle: string) => (
                                                                                          <span
                                                                                                    key={muscle}
                                                                                                    className="rounded-full bg-[#b6ff00] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-black"
                                                                                          >
                                                                                                    {muscle}
                                                                                          </span>
                                                                                ))}
                                                                      </div>

                                                                      {/* Exercise Name */}
                                                                      <h2 className="text-[19px] font-extrabold uppercase tracking-wide text-white">
                                                                                {library.name}
                                                                      </h2>

                                                                      {/* Equipment */}
                                                                      <p className="mt-1 text-sm text-[#8e929c]">
                                                                                {library.equipment}
                                                                      </p>

                                                                      {/* Divider */}
                                                                      <div className="my-4 h-px bg-[#292c35]" />

                                                                      {/* Stats */}
                                                                      <div className="flex items-center gap-5 text-sm text-[#9ca0aa]">
                                                                                {/* Duration */}
                                                                                <div className="flex items-center gap-1.5">
                                                                                          <span className="text-[16px]">◷</span>
                                                                                          <span>{library.duration} min</span>
                                                                                </div>

                                                                                {/* Calories */}
                                                                                <div className="flex items-center gap-1.5">
                                                                                          <span className="text-[15px]">●</span>
                                                                                          <span>{library.caloriesBurned} kcal</span>
                                                                                </div>

                                                                                {/* Rating */}
                                                                                <div className="flex items-center gap-1.5">
                                                                                          <span className="text-[17px]">☆</span>
                                                                                          <span>{library.rating}</span>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        ))}
                              </div>
                    </section>
          );
};

export default Library;
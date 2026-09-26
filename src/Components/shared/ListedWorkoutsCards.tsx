import { ILibrary } from '@/types/library.type';
import Image from 'next/image';
import Link from 'next/link';
 
import React from 'react';

interface IListedWourkoutsCardsProps {
          library: ILibrary
}

const ListedWorkoutsCards = ({ library }: IListedWourkoutsCardsProps ) => {
          return (
                    /* Workout Card */
                    <div
                              
                              className="mb-4 w-full rounded-2xl border border-[#292c35] bg-[#15171d] p-3 sm:p-4"
                    >
                              <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

                                        {/* Left Side - Image + Content */}
                                        <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">

                                                  {/* Image */}
                                                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-32">
                                                            <Image
                                                                      src={library.image}
                                                                      alt={library.name}
                                                                      fill
                                                                      className="object-cover"
                                                            />
                                                  </div>

                                                  {/* Content */}
                                                  <div className="min-w-0 flex-1">

                                                            {/* Workout Name */}
                                                            <h2 className="truncate text-base font-bold uppercase text-white sm:text-lg">
                                                                      {library.name}
                                                            </h2>

                                                            {/* Equipment */}
                                                            <p className="truncate text-xs text-gray-400 sm:text-sm">
                                                                      {library.equipment}
                                                            </p>

                                                            {/* Stats */}
                                                            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400 sm:gap-4 sm:text-sm">

                                                                      {/* Duration */}
                                                                      <span className="flex items-center gap-1 whitespace-nowrap">
                                                                                <span className="text-lime-400">◷</span>
                                                                                {library.duration} min
                                                                      </span>

                                                                      {/* Calories */}
                                                                      <span className="flex items-center gap-1 whitespace-nowrap">
                                                                                <span className="text-lime-400">♨</span>
                                                                                {library.caloriesBurned} kcal
                                                                      </span>

                                                                      {/* Rating */}
                                                                      <span className="flex items-center gap-1 whitespace-nowrap">
                                                                                <span className="text-lime-400">☆</span>
                                                                                {library.rating}
                                                                      </span>

                                                            </div>
                                                  </div>
                                        </div>

                                        {/* Right Side - Buttons */}
                                        <div className="flex w-full shrink-0 items-center gap-2 sm:gap-3 lg:w-auto">

                                                  {/* View Details */}
                                                  <Link href={`/library/${library.id}`}> 
                                                  <button
                                                            type="button"
                                                            className="flex-1 rounded-full border border-[#374151] px-3 py-2 text-xs text-white transition hover:bg-[#242730] sm:px-5 sm:text-sm lg:flex-none"
                                                  >
                                                            View Details
                                                  </button>
                                        </Link>

                                                  {/* Mark as Done */}
                                                  <button
                                                            type="button"
                                                            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-lime-400 px-3 py-2 text-xs font-semibold text-black transition hover:bg-lime-300 sm:gap-2 sm:px-5 sm:text-sm lg:flex-none"
                                                  >
                                                            <span>✓</span>
                                                            <span>Mark as Done</span>
                                                  </button>

                                                  {/* Remove */}
                                                  <button
                                                            type="button"
                                                            className="shrink-0 px-1 text-xl text-gray-500 transition hover:text-white sm:text-2xl"
                                                  >
                                                            ×
                                                  </button>

                                        </div>
                              </div>
                    </div>
          );
};

export default ListedWorkoutsCards;
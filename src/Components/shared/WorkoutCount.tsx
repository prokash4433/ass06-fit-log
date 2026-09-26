'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import { WorkoutsContext } from '@/context/WorkoutsContext';

const WorkoutCount = () => {
          const { addWorkouts, savedlist } = useContext(WorkoutsContext);

          return (
                    <div className="flex items-center gap-0 sm:gap-1">

                              {/* Plan */}
                              <Link
                                        href="/my-plan"
                                        className="flex cursor-pointer items-center gap-1.5 rounded-full px-2 py-2 text-xs font-medium text-gray-400 transition hover:bg-[#1A2312] hover:text-[#C2F800] sm:px-3"
                              >
                                        <span>Plan</span>

                                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#c6ff00] text-[10px] font-bold text-black">
                                                  {addWorkouts.length}
                                        </span>
                              </Link>

                              {/* Saved */}
                              <Link
                                        href="/my-plan"
                                        className="flex cursor-pointer items-center gap-1.5 rounded-full px-2 py-2 text-xs font-medium text-gray-400 transition hover:bg-[#1A2312] hover:text-[#C2F800] sm:px-3"
                              >
                                        <span>Saved</span>

                                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-600 text-[10px] text-gray-300">
                                                  {savedlist.length}
                                        </span>
                              </Link>

                    </div>
          );
};

export default WorkoutCount;
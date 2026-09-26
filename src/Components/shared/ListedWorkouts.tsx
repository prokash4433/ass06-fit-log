'use client';

import React, { useContext } from 'react';

import { WorkoutsContext } from '@/context/WorkoutsContext';

import { ILibrary } from '@/types/library.type';

import ListedWorkoutsCards from './ListedWorkoutsCards';

const ListedWorkouts = () => {
          const {
                    addWorkouts,
                    savedlist,
          } = useContext(WorkoutsContext);

          return (
                    <div>

                              {/* Today's Plan */}
                              <div>
                                        <h2 className="mb-4 text-xl font-bold text-white">
                                                  Today&apos;s Plan
                                        </h2>

                                        {addWorkouts.length > 0 ? (
                                                  addWorkouts.map((library: ILibrary) => (
                                                            <ListedWorkoutsCards
                                                                      key={library.id}
                                                                      library={library}
                                                                      type="today"
                                                            />
                                                  ))
                                        ) : (
                                                  <p className="text-gray-400">
                                                            No workouts in today&apos;s plan.
                                                  </p>
                                        )}
                              </div>

                              {/* Saved */}
                              <div className="mt-10">
                                        <h2 className="mb-4 text-xl font-bold text-white">
                                                  Saved
                                        </h2>

                                        {savedlist.length > 0 ? (
                                                  savedlist.map((library: ILibrary) => (
                                                            <ListedWorkoutsCards
                                                                      key={library.id}
                                                                      library={library}
                                                                      type="saved"
                                                            />
                                                  ))
                                        ) : (
                                                  <p className="text-gray-400">
                                                            No saved workouts.
                                                  </p>
                                        )}
                              </div>

                    </div>
          );
};

export default ListedWorkouts;
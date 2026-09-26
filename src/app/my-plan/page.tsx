 
'use client';

import LibraryCards from '@/Components/shared/LibraryCards';
import ListedWorkoutsCards from '@/Components/shared/ListedWorkoutsCards';
import { WorkoutsContext } from '@/context/WorkoutsContext';
import { ILibrary } from '@/types/library.type';
import Image from 'next/image';
import React, { useContext } from 'react';

const ListedWorkouts = () => {
  const { addWorkouts, savedlist } = useContext(WorkoutsContext);

  console.log(addWorkouts, savedlist, 'addWorkouts', 'savelist');

  return (
    <div className="mx-auto container px-2 py-10 sm:px-3 lg:px-4">

      <div className="mb-2">
        <h1 className="text-4xl font-bold text-white">
          MY PLAN
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="stats mt-2 w-full rounded-2xl border border-[#292c35] bg-[#15171d] shadow-none">

        <div className="stat">
          <div className="stat-title text-gray-400">
            Exercises
          </div>

          <div className="stat-value text-lime-400">
            0
          </div>
        </div>

        <div className="stat">
          <div className="stat-title text-gray-400">
            Minutes
          </div>

          <div className="stat-value text-white">
            0
          </div>
        </div>

        <div className="stat">
          <div className="stat-title text-gray-400">
            Calories
          </div>

          <div className="stat-value text-white">
            0
          </div>
        </div>

      </div>

      {/* Tabs */}
      <div className="tabs tabs-lift">

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Today’s Plan"
        />

        <div className="tab-content border-base-300 bg-base-100 p-6">

          {addWorkouts.length > 0 ? (
            addWorkouts.map((library: ILibrary) => {
              return (
                <ListedWorkoutsCards key={library.id} library={library} />
              );
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              No workouts found
            </p>
          )}

        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Saved"
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-6">

                          {savedlist.length > 0 ? (
                                savedlist.map((library: ILibrary) => {
                                      return (
                                            <ListedWorkoutsCards key={library.id} library={library} />
                                      );
                                })
                          ) : (
                                <p className="text-center text-lg font-semibold">
                                      No saved found
                                </p>
                          )}
        </div>

      </div>

    </div>
  );
};

export default ListedWorkouts;
 

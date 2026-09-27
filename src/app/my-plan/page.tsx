'use client';

import EmptyStateCard from '@/Components/shared/EmptyStateCard';
import ListedWorkoutsCards from '@/Components/shared/ListedWorkoutsCards';
import { WorkoutsContext } from '@/context/WorkoutsContext';
import { ILibrary } from '@/types/library.type';
import React, { useContext, useMemo, useState } from 'react';

type SortOption = 'calories' | 'rating' | 'duration';

const ListedWorkouts = () => {
  const { addWorkouts, savedlist } = useContext(WorkoutsContext);

  // Active tab
  const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');

  // Sort option
  const [sortBy, setSortBy] =
    useState<SortOption>('calories');

  // Current tab data
  const currentWorkouts =
    activeTab === 'today'
      ? addWorkouts
      : savedlist;

  // Sort workouts
  const sortedWorkouts = useMemo(() => {
    return [...currentWorkouts].sort(
      (a: ILibrary, b: ILibrary) => {
        if (sortBy === 'calories') {
          return b.caloriesBurned - a.caloriesBurned;
        }

        if (sortBy === 'rating') {
          return b.rating - a.rating;
        }

        if (sortBy === 'duration') {
          return b.duration - a.duration;
        }

        return 0;
      }
    );
  }, [currentWorkouts, sortBy]);

  // Dynamic stats
  const totalExercises = currentWorkouts.length;

  const totalMinutes = currentWorkouts.reduce(
    (total: number, workout: ILibrary) =>
      total + workout.duration,
    0
  );

  const totalCalories = currentWorkouts.reduce(
    (total: number, workout: ILibrary) =>
      total + workout.caloriesBurned,
    0
  );

  return (
    <div className="container mx-auto px-2 py-10 sm:px-3 lg:px-4">

      {/* Header */}
      <div className="mb-2">
        <h1 className="text-4xl font-bold text-white">
          MY PLAN
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Stats */}
      <div className="stats mt-2 w-full rounded-2xl border border-[#292c35] bg-[#15171d] shadow-none">

        {/* Exercises */}
        <div className="stat">
          <div className="stat-title text-gray-400">
            Exercises
          </div>

          <div className="stat-value text-lime-400">
            {totalExercises}
          </div>
        </div>

        {/* Minutes */}
        <div className="stat">
          <div className="stat-title text-gray-400">
            Minutes
          </div>

          <div className="stat-value text-white">
            {totalMinutes}
          </div>
        </div>

        {/* Calories */}
        <div className="stat">
          <div className="stat-title text-gray-400">
            Calories
          </div>

          <div className="stat-value text-white">
            {totalCalories}
          </div>
        </div>

      </div>

      
      
      
      
      {/* Sort */}
      <div className="flex justify-end py-5">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(
              e.target.value as SortOption
            )
          }
          className="w-full max-w-[220px] cursor-pointer rounded-xl border border-[#292c35] bg-[#1A2312] hover:text-[#C2F800] text-[#C2F800] px-4 py-3 text-sm font-semibold  outline-none focus:border-lime-400"
        >
          <option value="calories">
            Calories
          </option>

          <option value="rating">
            Rating
          </option>

          <option value="duration">
            Duration
          </option>
        </select>
      </div>

      
      
      {/* Tabs */}
      <div className="tabs tabs-lift py-[30px]">

        {/* Today's Plan */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab  rounded-2xl   transition-all duration-200 hover:bg-[#1A2312] hover:text-[#C2F800] checked:bg-[#C2F800] checked:text-black font-semibold  bg-[#1A2312] text-[#C2F800] "
          aria-label="Today's Plan"
          checked={activeTab === 'today'}
          onChange={() => setActiveTab('today')}
        />

        <div className="tab-content p-6">
          {activeTab === 'today' && (
            <>
              {sortedWorkouts.length > 0 ? (
                sortedWorkouts.map(
                  (library: ILibrary) => (
                    <ListedWorkoutsCards
                      key={library.id}
                      library={library}
                      type="today"
                    />
                  )
                )
              ) : (
                <EmptyStateCard
                  title="NOTHING HERE YET"
                  description="Browse the library and add a lift to get today moving."
                  buttonText="Go to workouts"
                />
              )}
            </>
          )}
        </div>

        {/* Saved */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab  rounded-2xl   transition-all duration-200 hover:bg-[#1A2312] hover:text-[#C2F800] checked:bg-[#C2F800] checked:text-black font-semibold  bg-[#1A2312] text-[#C2F800]"
          aria-label="Saved"
          checked={activeTab === 'saved'}
          onChange={() => setActiveTab('saved')}
        />

        <div className="tab-content p-6">
          {activeTab === 'saved' && (
            <>
              {sortedWorkouts.length > 0 ? (
                sortedWorkouts.map(
                  (library: ILibrary) => (
                    <ListedWorkoutsCards
                      key={library.id}
                      library={library}
                      type="saved"
                    />
                  )
                )
              ) : (
                <EmptyStateCard
                  title="NO SAVED WORKOUTS"
                  description="Save your favorite workouts and find them here."
                  buttonText="Browse workouts"
                />
              )}
            </>
          )}
        </div>

      </div>

    </div>
  );
};

export default ListedWorkouts;
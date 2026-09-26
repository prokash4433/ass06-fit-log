'use client';

import EmptyStateCard from '@/Components/shared/EmptyStateCard';
import ListedWorkoutsCards from '@/Components/shared/ListedWorkoutsCards';
import { WorkoutsContext } from '@/context/WorkoutsContext';
import { ILibrary } from '@/types/library.type';
import React, { useContext, useMemo, useState } from 'react';

type SortOption = 'calories' | 'rating' | 'duration';

type TabType = 'today' | 'saved';

const ListedWorkouts = () => {
  const { addWorkouts, savedlist } = useContext(WorkoutsContext);

  // Active tab
  const [activeTab, setActiveTab] = useState<TabType>('today');

  // Sort option
  const [sortBy, setSortBy] = useState<SortOption>('calories');

  // =========================
  // CURRENT ACTIVE WORKOUTS
  // =========================

  const currentWorkouts =
    activeTab === 'today' ? addWorkouts : savedlist;

  // =========================
  // SORT WORKOUTS
  // =========================

  const sortedWorkouts = useMemo(() => {
    return [...currentWorkouts].sort(
      (a: ILibrary, b: ILibrary) => {
        if (sortBy === 'calories') {
          return b.caloriesBurned - a.caloriesBurned;
        }

        if (sortBy === 'rating') {
          return b.rating - a.rating;
        }

        return b.duration - a.duration;
      }
    );
  }, [currentWorkouts, sortBy]);

  // =========================
  // DYNAMIC STATS
  // =========================

  // Total exercises
  const totalExercises = currentWorkouts.length;

  // Total minutes
  const totalMinutes = currentWorkouts.reduce(
    (total: number, workout: ILibrary) =>
      total + workout.duration,
    0
  );

  // Total calories
  const totalCalories = currentWorkouts.reduce(
    (total: number, workout: ILibrary) =>
      total + workout.caloriesBurned,
    0
  );

  return (
    <div className="container mx-auto px-2 py-10 sm:px-3 lg:px-4">

      {/* =========================
          HEADER
      ========================= */}
      <div className="mb-2">
        <h1 className="text-4xl font-bold text-white">
          MY PLAN
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* =========================
          DYNAMIC STATS
      ========================= */}
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

      {/* =========================
          TABS + SORT
      ========================= */}
      <div className="flex flex-col gap-4 py-[30px] sm:flex-row sm:items-center sm:justify-between">

        {/* Tabs */}
        <div className="flex w-fit rounded-xl bg-[#15171d] p-1">

          {/* Today's Plan */}
          <button
            type="button"
            onClick={() => setActiveTab('today')}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${activeTab === 'today'
                ? 'bg-[#0d1016] text-lime-400'
                : 'text-gray-400 hover:text-white'
              }`}
          >
            Today's Plan
          </button>

          {/* Saved */}
          <button
            type="button"
            onClick={() => setActiveTab('saved')}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${activeTab === 'saved'
                ? 'bg-[#0d1016] text-lime-400'
                : 'text-gray-400 hover:text-white'
              }`}
          >
            Saved
          </button>

        </div>

        {/* =========================
            SORT BY
        ========================= */}
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as SortOption)
          }
          className="w-full cursor-pointer rounded-xl border border-[#292c35] bg-[#15171d] px-4 py-3 text-sm text-white outline-none focus:border-lime-400 sm:w-[180px]"
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

      {/* =========================
          TODAY'S PLAN
      ========================= */}
      {activeTab === 'today' && (
        <div>

          {sortedWorkouts.length > 0 ? (

            sortedWorkouts.map((library: ILibrary) => (
              <ListedWorkoutsCards
                key={library.id}
                library={library}
                type="today"
              />
            ))

          ) : (

            <EmptyStateCard
              title="NOTHING HERE YET"
              description="Browse the library and add a lift to get today moving."
              buttonText="Go to workouts"
            />

          )}

        </div>
      )}

      {/* =========================
          SAVED
      ========================= */}
      {activeTab === 'saved' && (
        <div>

          {sortedWorkouts.length > 0 ? (

            sortedWorkouts.map((library: ILibrary) => (
              <ListedWorkoutsCards
                key={library.id}
                library={library}
                type="saved"
              />
            ))

          ) : (

            <EmptyStateCard
              title="NO SAVED WORKOUTS"
              description="Save your favorite workouts and find them here."
              buttonText="Browse workouts"
            />

          )}

        </div>
      )}

    </div>
  );
};

export default ListedWorkouts;
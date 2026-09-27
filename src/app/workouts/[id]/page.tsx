import dynamic from 'next/dynamic'
import AddButton from '@/Components/workutsDetails/AddButton';
import SaveButton from '@/Components/workutsDetails/SaveButton';
import { ILibrary } from '@/types/library.type';
import Image from 'next/image';
import React from 'react';

interface IWorkoutsDetailsPage {
  params: Promise<{
    id: string;
  }>;
}

const getLibrary = async () => {
  const res = await fetch('http://localhost:3000/data.json');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const WorkoutDetailsPage = async ({
  params,
}: IWorkoutsDetailsPage) => {
  const { id } = await params;

  const libraryData = await getLibrary();

  const library = libraryData.find(
    (library: ILibrary) => String(library.id) === String(id)
  );

  if (!library) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0d0f12] px-4 text-center text-white">
        <div>
          <h1 className="text-2xl font-bold">
            Workout Not Found
          </h1>

          <p className="mt-2 text-sm text-[#8e929c]">
            The workout you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0f12] text-white">

      {/* Main */}
      <main className="px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="mx-auto max-w-6xl">

          {/* Main Grid */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8">

            {/* ================= IMAGE ================= */}
            <div className="relative h-[220px] w-full overflow-hidden rounded-xl sm:h-[340px] md:h-[420px] lg:h-[540px]">

              <Image
                src={library.image}
                alt={library.name}
                fill
                priority
                className="object-cover"
              />

            </div>

            {/* ================= CONTENT ================= */}
            <div className="flex min-w-0 flex-col">

              {/* Title */}
              <h1 className="text-xl font-extrabold uppercase leading-tight tracking-tight sm:text-2xl md:text-3xl">
                {library.name}
              </h1>

              {/* Description */}
              <p className="mt-1.5 max-w-xl text-xs leading-5 text-[#8e929c] sm:text-sm">
                A compound press that builds chest, triceps, and pressing
                power from a stable bench.
              </p>

              {/* Muscle Groups */}
              <div className="mt-3 flex flex-wrap gap-2">
                {library.muscleGroups.map((muscle: string) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#C2F800] px-3 py-1 text-[9px] font-extrabold uppercase text-black sm:text-[10px]"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              {/* ================= DETAILS ================= */}
              <div className="mt-4 overflow-hidden rounded-xl border border-[#252932] bg-[#15181e]">

                {/* Equipment */}
                <div className="flex items-center justify-between gap-3 border-b border-[#252932] px-4 py-2.5 sm:px-5 sm:py-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-[#8e929c] sm:text-sm">
                    Equipment
                  </span>

                  <span className="max-w-[60%] text-right text-xs font-bold text-[#f1f1f1] sm:text-sm">
                    {library.equipment}
                  </span>
                </div>

                {/* Difficulty */}
                <div className="flex items-center justify-between gap-3 border-b border-[#252932] px-4 py-2.5 sm:px-5 sm:py-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-[#8e929c] sm:text-sm">
                    Difficulty
                  </span>

                  <span className="text-right text-xs font-bold text-[#f1f1f1] sm:text-sm">
                    {library.difficulty}
                  </span>
                </div>

                {/* Sets */}
                <div className="flex items-center justify-between gap-3 border-b border-[#252932] px-4 py-2.5 sm:px-5 sm:py-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-[#8e929c] sm:text-sm">
                    Sets
                  </span>

                  <span className="text-right text-xs font-bold text-[#f1f1f1] sm:text-sm">
                    {library.sets}
                  </span>
                </div>

                {/* Reps */}
                <div className="flex items-center justify-between gap-3 border-b border-[#252932] px-4 py-2.5 sm:px-5 sm:py-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-[#8e929c] sm:text-sm">
                    Reps
                  </span>

                  <span className="text-right text-xs font-bold text-[#f1f1f1] sm:text-sm">
                    {library.reps}
                  </span>
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between gap-3 border-b border-[#252932] px-4 py-2.5 sm:px-5 sm:py-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-[#8e929c] sm:text-sm">
                    Duration
                  </span>

                  <span className="text-right text-xs font-bold text-[#f1f1f1] sm:text-sm">
                    {library.duration} min
                  </span>
                </div>

                {/* Calories */}
                <div className="flex items-center justify-between gap-3 border-b border-[#252932] px-4 py-2.5 sm:px-5 sm:py-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-[#8e929c] sm:text-sm">
                    Calories
                  </span>

                  <span className="text-right text-xs font-bold text-[#f1f1f1] sm:text-sm">
                    {library.caloriesBurned} kcal
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between gap-3 px-4 py-2.5 sm:px-5 sm:py-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-[#8e929c] sm:text-sm">
                    Rating
                  </span>

                  <span className="text-right text-xs font-bold text-[#f1f1f1] sm:text-sm">
                    {library.rating}
                  </span>
                </div>

              </div>

              {/* ================= INSTRUCTIONS ================= */}
              <div className="mt-4">

                <h2 className="text-[10px] font-extrabold uppercase tracking-wide text-white sm:text-xs">
                  Instructions
                </h2>

                <ol className="mt-2 space-y-1.5">

                  {library.instructions?.map(
                    (instruction: string, index: number) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-[9px] leading-4 text-[#9a9fa9] sm:text-xs sm:leading-5"
                      >
                        <span className="shrink-0 text-[#666b76]">
                          {index + 1}.
                        </span>

                        <span className="min-w-0">
                          {instruction}
                        </span>
                      </li>
                    )
                  )}

                </ol>

              </div>

              {/* ================= BUTTONS ================= */}
              <div className="mt-4 flex w-full flex-col gap-2 pb-6 sm:flex-row sm:flex-wrap">

                <div className="w-full sm:w-auto">
                  <AddButton library={library} />
                </div>

                <div className="w-full sm:w-auto">
                  <SaveButton library={library} />
                </div>

              </div>

            </div>

          </div>

        </div>
      </main>

    </div>
  );
};

export default WorkoutDetailsPage;
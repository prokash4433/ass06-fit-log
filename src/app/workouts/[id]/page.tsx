 
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
  const res = await fetch("http://localhost:3000/data.json");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
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

  console.log(library, "library");

  return (
    <div>
      <div className="min-h-screen bg-[#0d0f12] px-4 py-8 text-white">
        <div className="mx-auto max-w-6xl">

          {/* Main Card */}
          <div className="grid gap-7 lg:grid-cols-[1fr_1fr]">

            {/* LEFT - IMAGE */}
            <div className="relative h-[420px] overflow-hidden rounded-lg sm:h-[500px] lg:h-[570px]">
              <Image
                src={library.image}
                alt={library.name}
                fill 
                priority
                className="object-cover"
              />
            </div>

            {/* RIGHT - CONTENT */}
            <div className="flex flex-col">

              {/* Title */}
              <h1 className="text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
                {library.name}
              </h1>

              {/* Description */}
              <p className="mt-2 max-w-xl text-xs leading-5 text-[#8e929c]">
                A compound press that builds chest, triceps, and pressing
                power from a stable bench.
              </p>

              
              
              {/* Muscle Groups */}
              <div className="mt-3 flex flex-wrap gap-2">
                {library.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#C2F800] px-3 py-1 text-[9px] font-extrabold uppercase text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              {/* Details Table */}
              <div className="mt-5 overflow-hidden rounded-xl border border-[#252932] bg-[#15181e]">

                {/* Equipment */}
                <div className="flex items-center justify-between border-b border-[#252932] px-5 py-4">
                  
                  <span className="text-sm font-semibold uppercase tracking-wide text-[#8e929c]">Equipment</span>

                  <span className="text-sm font-bold text-[#f1f1f1]">
                    {library.equipment}
                  </span>
                </div>

                {/* Difficulty */}
                <div className="flex items-center justify-between border-b border-[#252932] px-5 py-4">
                  <span className="text-sm font-semibold uppercase tracking-wide text-[#8e929c]"> Difficulty </span>

                  <span className="text-sm font-bold text-[#f1f1f1]">
                    {library.difficulty}
                  </span>
                </div>

                {/* Sets */}
                <div className="flex items-center justify-between border-b border-[#252932] px-5 py-4">
                  <span className="text-sm font-semibold uppercase tracking-wide text-[#8e929c]">Sets</span>

                  <span className="text-sm font-bold text-[#f1f1f1]">
                    {library.sets}
                  </span>
                </div>

                {/* Reps */}
                <div className="flex items-center justify-between border-b border-[#252932] px-5 py-4">
                  <span className="text-sm font-semibold uppercase tracking-wide text-[#8e929c]">Reps</span>

                  <span className="text-sm font-bold text-[#f1f1f1]">
                    {library.reps}
                  </span>
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between border-b border-[#252932] px-5 py-4">
                  <span className="text-sm font-semibold uppercase tracking-wide text-[#8e929c]">Duration</span>

                  <span className="text-sm font-bold text-[#f1f1f1]">
                    {library.duration} min
                  </span>
                </div>

                {/* Calories */}
                <div className="flex items-center justify-between border-b border-[#252932] px-5 py-4">
                  <span className="text-sm font-semibold uppercase tracking-wide text-[#8e929c]">Calories</span>

                  <span className="text-sm font-bold text-[#f1f1f1]">
                    {library.caloriesBurned} kcal
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-sm font-semibold uppercase tracking-wide text-[#8e929c]">Rating</span>

                  <span className="text-sm font-bold text-[#f1f1f1]">
                    {library.rating}
                  </span>
                </div>

              </div>

              {/* Instructions */}
              <div className="mt-5">
                <h2 className="text-[11px] font-extrabold uppercase tracking-wide text-white">Instructions</h2>

                <ol className="mt-3 space-y-2">
                  {library.instructions?.map(
                    (instruction: string, index: number) => (
                      <li
                        key={index}
                        className="flex gap-3 text-[10px] leading-4 text-[#9a9fa9]"
                      >
                        <span className="text-[#666b76]">
                          {index + 1}.
                        </span>

                        <span>{instruction}</span>
                      </li>
                    )
                  )}
                </ol>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-2">

                {/* Add To Plan */}
                <AddButton library={library}/>

                {/* Save */}
                {/* <button
                  className="flex items-center gap-2 rounded-lg border border-[#30343d] px-4 py-2.5 text-[10px] font-medium text-[#a5a9b1] transition-all duration-300 hover:border-[#C2F800] hover:bg-[#1A2312] hover:text-[#C2F800]"
                >
                  <span>♡</span>
                  Save for later
                </button> */}

                <SaveButton library={library} />

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
 

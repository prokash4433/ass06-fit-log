"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import AddButton from "@/Components/workutsDetails/AddButton";
import SaveButton from "@/Components/workutsDetails/SaveButton";

import { ILibrary } from "@/types/library.type";

interface WorkoutDetailsContentProps {
  id: string;
}

const WorkoutDetailsContent = ({ id }: WorkoutDetailsContentProps) => {
  const [library, setLibrary] = useState<ILibrary | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

        const res = await fetch(`${baseUrl}/data.json`);

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data: ILibrary[] = await res.json();

        const found = data.find(
          (item: ILibrary) => String(item.id) === String(id)
        );

        setLibrary(found || null);
      } catch (error) {
        console.error("Error fetching workout details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchWorkout();
    }
  }, [id]);

  // ================= LOADING =================
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0d0f12] text-white">
        <span className="loading loading-spinner loading-lg text-[#C2F800]" />
      </div>
    );
  }

  // ================= NOT FOUND =================
  if (!library) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0d0f12] px-4 text-center text-white">
        <div>
          <h1 className="text-2xl font-bold">Workout Not Found</h1>

          <p className="mt-2 text-sm text-[#8e929c]">
            The workout you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0f12] text-white">
      <main className="px-3 py-3 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="mx-auto max-w-6xl">

          {/* ================= MAIN GRID ================= */}
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-8">

            {/* ================= IMAGE ================= */}
            <div
              className="
                relative
                h-[150px]
                w-full
                overflow-hidden
                rounded-xl
                sm:h-[340px]
                md:h-[420px]
                lg:h-[540px]
              "
            >
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

              {/* ================= TITLE ================= */}
              <h1 className="text-lg font-extrabold uppercase leading-tight tracking-tight sm:text-2xl md:text-3xl">
                {library.name}
              </h1>

              {/* ================= DESCRIPTION ================= */}
              <p className="mt-1 max-w-xl text-[10px] leading-4 text-[#8e929c] sm:text-xs">
                {library.description ||
                  "A compound press that builds chest, triceps, and pressing power from a stable bench."}
              </p>

              {/* ================= MUSCLE GROUPS ================= */}
              <div className="mt-1.5 flex flex-wrap gap-1">
                {library.muscleGroups.map((muscle: string) => (
                  <span
                    key={muscle}
                    className="
                      rounded-full
                      bg-[#C2F800]
                      px-2.5
                      py-0.5
                      text-[7px]
                      font-extrabold
                      uppercase
                      text-black
                      sm:px-3
                      sm:py-1
                      sm:text-[9px]
                    "
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              {/* ================= DETAILS ================= */}
              <div className="mt-2 overflow-hidden rounded-lg border border-[#252932] bg-[#15181e]">

                {/* Equipment */}
                <div className="flex items-center justify-between border-b border-[#252932] px-3 py-1.5 sm:px-4 sm:py-2.5">
                  <span className="text-[8px] font-semibold uppercase text-[#8e929c] sm:text-[11px]">
                    Equipment
                  </span>

                  <span className="text-[9px] font-bold text-white sm:text-xs">
                    {library.equipment}
                  </span>
                </div>

                {/* Difficulty */}
                <div className="flex items-center justify-between border-b border-[#252932] px-3 py-1.5 sm:px-4 sm:py-2.5">
                  <span className="text-[8px] font-semibold uppercase text-[#8e929c] sm:text-[11px]">
                    Difficulty
                  </span>

                  <span className="text-[9px] font-bold text-white sm:text-xs">
                    {library.difficulty}
                  </span>
                </div>

                {/* Sets */}
                <div className="flex items-center justify-between border-b border-[#252932] px-3 py-1.5 sm:px-4 sm:py-2.5">
                  <span className="text-[8px] font-semibold uppercase text-[#8e929c] sm:text-[11px]">
                    Sets
                  </span>

                  <span className="text-[9px] font-bold text-white sm:text-xs">
                    {library.sets}
                  </span>
                </div>

                {/* Reps */}
                <div className="flex items-center justify-between border-b border-[#252932] px-3 py-1.5 sm:px-4 sm:py-2.5">
                  <span className="text-[8px] font-semibold uppercase text-[#8e929c] sm:text-[11px]">
                    Reps
                  </span>

                  <span className="text-[9px] font-bold text-white sm:text-xs">
                    {library.reps}
                  </span>
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between border-b border-[#252932] px-3 py-1.5 sm:px-4 sm:py-2.5">
                  <span className="text-[8px] font-semibold uppercase text-[#8e929c] sm:text-[11px]">
                    Duration
                  </span>

                  <span className="text-[9px] font-bold text-white sm:text-xs">
                    {library.duration} min
                  </span>
                </div>

                {/* Calories */}
                <div className="flex items-center justify-between border-b border-[#252932] px-3 py-1.5 sm:px-4 sm:py-2.5">
                  <span className="text-[8px] font-semibold uppercase text-[#8e929c] sm:text-[11px]">
                    Calories
                  </span>

                  <span className="text-[9px] font-bold text-white sm:text-xs">
                    {library.caloriesBurned} kcal
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between px-3 py-1.5 sm:px-4 sm:py-2.5">
                  <span className="text-[8px] font-semibold uppercase text-[#8e929c] sm:text-[11px]">
                    Rating
                  </span>

                  <span className="text-[9px] font-bold text-white sm:text-xs">
                    {library.rating}
                  </span>
                </div>
              </div>

              {/* ================= INSTRUCTIONS ================= */}
              <div className="mt-2">
                <h2 className="text-[8px] font-extrabold uppercase text-white sm:text-[11px]">
                  Instructions
                </h2>

                <ol className="mt-1 space-y-0.5">
                  {library.instructions?.map(
                    (instruction: string, index: number) => (
                      <li
                        key={index}
                        className="
                          flex
                          items-start
                          gap-1.5
                          text-[7px]
                          leading-3
                          text-[#9a9fa9]
                          sm:text-[10px]
                          sm:leading-4
                        "
                      >
                        <span className="shrink-0 text-[#666b76]">
                          {index + 1}.
                        </span>

                        <span>{instruction}</span>
                      </li>
                    )
                  )}
                </ol>
              </div>

              {/* ================= BUTTONS ================= */}
              <div className="mt-2 flex w-full flex-col gap-2 pb-4 sm:flex-row">
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

export default WorkoutDetailsContent;
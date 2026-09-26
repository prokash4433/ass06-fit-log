import { ILibrary } from '@/types/library.type';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ILibraryCardsProps {
  library: ILibrary;
}

const LibraryCards = ({ library }: ILibraryCardsProps) => {
  return (
    <div className="group block cursor-pointer overflow-hidden rounded-2xl border border-[#292c35] bg-[#15171d] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#b6ff00]/60 hover:shadow-[0_15px_40px_rgba(182,255,0,0.12)]">

      {/* Image */}
      <div className="relative h-[205px] w-full overflow-hidden">
        <Image
          src={library.image}
          alt={library.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#15171d]/80 via-transparent to-transparent opacity-70" />
      </div>

      {/* Card Content */}
      <div className="px-6 py-5">

        {/* Muscle Groups + Watch Details */}
        <div className="mb-4 flex items-center justify-between gap-3">

          {/* Muscle Groups */}
          <div className="flex flex-wrap gap-2">
            {library.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#b6ff00] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-black transition-all duration-300 hover:bg-[#1A2312] hover:text-[#C2F800]"
              >
                {muscle}
              </span>
            ))}

          </div>

          {/* Watch Details Button */}
          <Link
            href={`/workouts/${library.id}`}
            className="shrink-0 rounded-lg bg-[#b6ff00] px-3 py-2 text-[11px] font-bold text-black transition-all duration-300 hover:bg-[#1A2312] hover:text-[#C2F800]"
          >
            Watch Details
          </Link>

        </div>

        {/* Exercise Name */}
        <h2 className="text-[19px] font-extrabold uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-[#b6ff00]">
          {library.name}
        </h2>

        {/* Equipment */}
        <p className="mt-1 text-sm text-[#8e929c]">
          {library.equipment}
        </p>

        {/* Divider */}
        <div className="my-4 h-px bg-[#292c35]" />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">

          {/* Duration */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#b6ff00]/10 text-[#b6ff00]">
              <span>◷</span>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wide text-[#666b76]">
                Time
              </p>

              <p className="text-xs font-semibold text-white">
                {library.duration} min
              </p>
            </div>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#b6ff00]/10 text-[#b6ff00]">
              <span>♨</span>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wide text-[#666b76]">
                Calories
              </p>

              <p className="text-xs font-semibold text-white">
                {library.caloriesBurned} kcal
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#b6ff00]/10 text-[#b6ff00]">
              <span>☆</span>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wide text-[#666b76]">
                Rating
              </p>

              <p className="text-xs font-semibold text-white">
                {library.rating}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LibraryCards;
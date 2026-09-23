 
import React from 'react';
import bannerImage from '@/assets/banner.png';
import Image from 'next/image';

const Banner = () => {
          return (
                    <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
                              <div className="container mx-auto grid items-center gap-8 overflow-hidden rounded-3xl bg-[#222630] p-6 sm:p-8 lg:grid-cols-2 lg:p-12">


                    <div className="max-w-xl">
                    <p className="mb-3 text-sm font-bold tracking-widest text-[#C2F800]">WORKOUT LIBRARY</p>

                    <h1 className="mb-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">TRAIN WITH INTENT. LOG <br className="hidden sm:block" />EVERY SET.</h1>

                    <p className="mb-7 max-w-lg text-sm leading-6 text-[#9CA3AF] sm:text-base"> FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.</p>

                    <button className="rounded-md bg-[#C2F800] px-5 py-3 text-sm font-bold text-black transition duration-200 hover:bg-[#1A2312] hover:text-[#C2F800] cursor-pointer"> BROWSE WORKOUTS
                    </button>
                    </div>


                    <div className="relative flex justify-center lg:justify-end">
                    <Image
                    src={bannerImage}
                    alt="Workout"
                    priority
                    className="w-full max-w-md object-contain lg:max-w-lg" />
                                        </div>

                              </div>
                    </section>
          );
};

export default Banner;
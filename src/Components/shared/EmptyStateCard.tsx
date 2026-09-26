 import Link from 'next/link';
import React from 'react';
 
interface EmptyStateCardProps {
          title: string;
          description: string;
          buttonText: string;
}

const EmptyStateCard = ({
          title,
          description,
          buttonText,
}: EmptyStateCardProps) => {
          return (
                    <div className="w-full  p-2 sm:p-3 md:p-4">
                              <div className="flex min-h-[300px]  flex-col items-center justify-center rounded-xl border border-dashed   border-[#292c35]  px-4  text-center sm:min-h-[350px] md:min-h-[400px]">

                                        <h2 className="text-lg font-extrabold tracking-wide text-white sm:text-xl md:text-2xl">
                                                  {title}
                                        </h2>

                                        <p className="mt-2 max-w-md text-xs leading-5 text-[#8b909c] sm:text-sm">
                                                  {description}
                                        </p>
                                         
                                         <Link href="/workouts">
                                        <button className="mt-6 rounded-full bg-[#c8ff00] px-6 py-3 text-sm font-bold text-black transition hover:scale-105">
                                                  {buttonText}
                                        </button>
                                        </Link>

                              </div>
                    </div>
          );
};

export default EmptyStateCard;
 
 

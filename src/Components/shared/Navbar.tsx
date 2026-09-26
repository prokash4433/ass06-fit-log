import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';
import Link from 'next/link';
import WorkoutCount from './WorkoutCount';
 

const Navbar = () => {
          return (
            <nav className="sticky top-0 z-50 bg-[#0d0f12] border-b border-neutral-800">
          <div className=" navbar container mx-auto">
                <div className="navbar min-h-[68px] px-2 sm:px-3 lg:px-4 ">

                               {/* LEFT */}
                     <div className="navbar-start">

                              {/* Hamburger - Mobile */}
                     <div className="dropdown lg:hidden mr-2">
                     <div     
                              tabIndex={0}
                              role="button"
                              className="btn btn-ghost btn-sm text-white" >
                    <svg
                              aria-label="Menu"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                               viewBox="0 0 24 24"
                              stroke="currentColor" >
                    <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h8m-8 6h16"/>
                    </svg>
                    </div>

                                        {/* Mobile Menu */}
                    <ul
                              tabIndex={-1}
                              className="menu menu-sm dropdown-content z-[10] mt-3 w-44 rounded-xl border border-neutral-800 bg-[#15181d] p-2 shadow-xl">
                    <li>
                    <a className="text-gray-300 hover:bg-neutral-800 hover:text-white"> Workout</a>
                      </li>

                    <li>
                    <a className="text-gray-300 hover:bg-neutral-800 hover:text-white">My Plan</a>
                    </li>
                    </ul>
                    </div>

                                                  {/* Logo */}
                    <div className="flex items-center gap-2">
                              <Image
                              src={logo}
                              alt="FITLOG"
                              width={28}
                              height={28}
                              className="object-contain"/>

                    <h1 className="text-base font-bold tracking-wide text-white sm:text-lg">FITLOG</h1>
                    </div>
                     </div>


                              {/* CENTER - Desktop */}
                     <div className="navbar-center hidden lg:flex">
                     <div className="flex items-center gap-1    p-1">

                    
                      <Link
                        href="/workouts"
                        className="cursor-pointer rounded-full px-5 py-2 text-xs font-semibold text-white transition hover:bg-[#1A2312] hover:text-[#C2F800]"
                      >
                        Workout
                      </Link>

                      <Link
                        href="/my-plan"
                        className="cursor-pointer rounded-full px-5 py-2 text-xs font-semibold text-white transition hover:bg-[#1A2312] hover:text-[#C2F800]"
                      >
                        My Plan
                      </Link>

                    </div>
                    </div>


                              {/* RIGHT */}
                    <div className="navbar-end">
                    <div className="flex items-center gap-0 sm:gap-1">

                                        {/* Plan */}
                      {/* <button className="flex items-center gap-1.5 rounded-full px-2 py-2 text-xs font-medium text-gray-400 transition hover:bg-[#1A2312] hover:text-[#C2F800] sm:px-3 cursor-pointer">
                    <span>Plan</span>

                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#c6ff00] text-[10px] font-bold text-black cursor-pointer">0</span>
                    </button> */}   

                      <WorkoutCount />



                                        {/* Saved */}
                    {/* <button className="flex items-center gap-1.5 rounded-full px-2 py-2 text-xs font-medium text-gray-400 transition hover:bg-[#1A2312] hover:text-[#C2F800]  sm:px-3 cursor-pointer">
                    <span>Saved</span>

                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-600 text-[10px] text-gray-300">0</span>
                                                            </button> */}

                                                  </div>
                                        </div>

                              </div>
                    </div>
                    </nav>
          );
};

export default Navbar;
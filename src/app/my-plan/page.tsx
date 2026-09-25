'use client';

import { WorkoutsContext } from '@/context/WorkoutsContext';
import React, { useContext } from 'react';

const ListedWorkouts = () => {
      const { addWorkouts, savedlist } = useContext(WorkoutsContext);

      console.log(addWorkouts, savedlist, 'addWorkouts', 'savelist');

      return (
            <div className="mx-auto   container px-4 py-10">

                   
                  <div className="mb-2">
                        <h1 className="text-4xl font-bold   text-white">
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
                  
                  
                  
                  
                  {/* name of each tab group should be unique */}
                   

            </div>
      );
};

export default ListedWorkouts;
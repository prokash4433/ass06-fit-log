'use client';

import React, { useState } from 'react';
import { toast } from 'react-toastify';
 

const MarkAsDoneButton = () => {
          const [isCompleted, setIsCompleted] = useState(false);

          const handleMarkAsDone = () => {
                    setIsCompleted(true);

                    toast.success('Logged completion. Good job!');
          };

          return (
                    <button
                              type="button"
                              onClick={handleMarkAsDone}
                              disabled={isCompleted}
                              className={`flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition sm:gap-2 sm:px-5 sm:text-sm lg:flex-none ${isCompleted
                                                  ? 'cursor-not-allowed bg-[#292c35] text-gray-400'
                                                  : 'bg-lime-400 text-black hover:bg-lime-300'
                                        }`}
                    >
                              <span>✓</span>

                              <span>
                                        {isCompleted ? 'Completed' : 'Mark as Done'}
                              </span>
                    </button>
          );
};

export default MarkAsDoneButton;
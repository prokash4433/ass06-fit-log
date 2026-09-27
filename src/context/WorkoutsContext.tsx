'use client';

import React, {
          createContext,
          ReactNode,
          useState,
          useEffect,
} from 'react';

import { toast } from 'react-toastify';

import { ILibrary } from '@/types/library.type';

export const WorkoutsContext = createContext<any>({});

const WorkoutsProvider = ({ children }: { children: ReactNode }) => {
          const [addWorkouts, setAddWorkouts] = useState<ILibrary[]>([]);

          const [savedlist, setSavedlist] = useState<ILibrary[]>([]);

          // Loading state
          const [loading, setLoading] = useState(true);

          useEffect(() => {
                    const timer = setTimeout(() => {
                              setLoading(false);
                    }, 500);

                    return () => clearTimeout(timer);
          }, []);

          const removeWorkout = (
                    id: number,
                    type: 'today' | 'saved'
          ) => {
                    if (type === 'today') {
                              setAddWorkouts((prev) =>
                                        prev.filter((workout) => workout.id !== id)
                              );

                              toast.success('Workout removed from Today list!');
                    }

                    if (type === 'saved') {
                              setSavedlist((prev) =>
                                        prev.filter((workout) => workout.id !== id)
                              );

                              toast.success('Workout removed from Saved list!');
                    }
          };

          const shareData = {
                    addWorkouts,
                    setAddWorkouts,

                    savedlist,
                    setSavedlist,

                    removeWorkout,

                    loading,
          };

          return (
                    <WorkoutsContext.Provider value={shareData}>
                              {children}
                    </WorkoutsContext.Provider>
          );
};

export default WorkoutsProvider;
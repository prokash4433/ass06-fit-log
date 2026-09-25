 
'use client';

import { WorkoutsContext } from '@/context/WorkoutsContext';
import { ILibrary } from '@/types/library.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const AddButton = ({ library }: { library: ILibrary }) => {
  const { addWorkouts, setAddWorkouts } = useContext(WorkoutsContext);

  const handleAddWorkouts = () => {
    console.log('add workout triggered', library);

    const alreadyAdded = addWorkouts.some(
      (workout) => workout.id === library.id
    );

    if (alreadyAdded) {
              toast.info(`" is already ${library.name}" added in your plan`);
      return;
    }

    setAddWorkouts([...addWorkouts, library]);

    toast.success(`"${library.name}" added to today's plan`);
  };

return (
          <button
                    className="flex items-center gap-2 rounded-lg bg-[#C2F800] px-4 py-2.5 text-[10px] font-bold text-black transition-all duration-300 hover:bg-[#1A2312] hover:text-[#C2F800]"
                    onClick={handleAddWorkouts}
          >
                    <span>▣</span>
                    Add to today's plan
          </button>
);
};

export default AddButton;
 

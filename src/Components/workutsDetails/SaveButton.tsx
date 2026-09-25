'use client';

import { WorkoutsContext } from '@/context/WorkoutsContext';
import { ILibrary } from '@/types/library.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const SaveButton = ({ library }: { library: ILibrary }) => {
          const { savedlist, setSavedlist } = useContext(WorkoutsContext);

          const handleAddSave = () => {
                    console.log('add workout triggered', library);

                    
                    const alreadySaved = savedlist.some((workout) => workout.id === library.id);

                    if (alreadySaved) {
                              toast.error(`Already "${library.name}" Saved in your later`);
                              return;
                    }

                    // Add workout
                    setSavedlist([...savedlist, library]);

                    toast.success(` "${library.name}" Save for later`);
          };

          return (
                    <button
                              onClick={handleAddSave}
                              className="flex items-center gap-2 rounded-lg border px-4 py-2.5 text-[10px] font-bold text-black bg-[#C2F800] transition-all duration-300 hover:border-[#C2F800] hover:bg-[#1A2312] hover:text-[#C2F800]"
                    >
                              <span>♡</span>
                              Save for later
                    </button>
          );
};

export default SaveButton;
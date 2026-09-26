'use client';

import React, { useContext } from 'react';

import { WorkoutsContext } from '@/context/WorkoutsContext';

interface IRemoveButtonProps {
          id: number;
          type: 'today' | 'saved';
}

const RemoveButton = ({ id,type}: IRemoveButtonProps) => {
          const { removeWorkout } = useContext(WorkoutsContext);

          const handleRemove = () => {
                    removeWorkout(id, type);
          };

          return (
                    <button
                              type="button"
                              onClick={handleRemove}
                              className="shrink-0 px-1 text-xl text-gray-500 transition hover:text-red-400 sm:text-2xl"
                    >
                              ×
                    </button>
          );
};

export default RemoveButton;
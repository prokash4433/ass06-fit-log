'use client'

import React, { createContext, ReactNode, useState } from 'react';
 

export const WorkoutsContext = createContext({});

const WorkoutsProvider = ({children}: {children: ReactNode}) => {
const [addWorkouts, setAddWorkouts] = useState([]);
const [savedlist, setSavedlist] = useState([]);

const shareData = {
          addWorkouts,
          setAddWorkouts,
          savedlist,
          setSavedlist,
};

          return (
                    <WorkoutsContext.Provider value = {shareData}>{children}</WorkoutsContext.Provider>
          );
};

export default WorkoutsProvider; 
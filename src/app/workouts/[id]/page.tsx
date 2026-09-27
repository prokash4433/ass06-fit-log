"use client";

import dynamic from "next/dynamic";
import React, { use } from "react";

interface IWorkoutsDetailsPage {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailsContent = dynamic(
  () => import("@/Components/workutsDetails/WorkoutDetailsContent"),
  {
    ssr: false,
  }
);

const WorkoutDetailsPage = ({ params }: IWorkoutsDetailsPage) => {
  const { id } = use(params);

  return <WorkoutDetailsContent id={id} />;
};

export default WorkoutDetailsPage;

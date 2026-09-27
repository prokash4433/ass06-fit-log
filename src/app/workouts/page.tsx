"use client";

import dynamic from "next/dynamic";
import React from "react";
import Banner from "@/Components/homepage/Banner";

const Library = dynamic(() => import("@/Components/homepage/Library"), {
  ssr: false,
});

const WorkoutsPage = () => {
  return (
    <main>
      <Banner />
      <Library />
    </main>
  );
};

export default WorkoutsPage;

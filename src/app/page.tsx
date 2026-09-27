"use client";

import dynamic from "next/dynamic";
import Banner from "@/Components/homepage/Banner";
import React from "react";

const Library = dynamic(() => import("@/Components/homepage/Library"), {
  ssr: false,
});

const page = () => {
  return (
    <div>
      <Banner />
      <Library />
    </div>
  );
};

export default page;
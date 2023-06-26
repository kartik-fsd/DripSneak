import React from "react";
import VideoPlayer from "./Video/VideopLayer";
import { Section } from "./Section/Section";
import { VideosSection } from "./Card/CradSection";
import { CategoriesSection } from "./CategorySection/Category";

function Home() {
  return (
    <>
      <VideoPlayer />
      <Section />
      <VideosSection />
      <CategoriesSection />
    </>
  );
}

export default Home;

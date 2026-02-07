import React from "react";
import HomeSection from "../Components/HomeSection";
import SectionOne from "../Components/SectionOne";
import ServicesSection from "../Components/ServicesSection";
import ArticlesSection from "../Components/ArticleSection";
import InstagramFeed from "../Components/InstagramFeed";
import FooterSection from "../Components/FooterSection";


export default function Home() {
  return (
    <>
      <HomeSection/>
      <SectionOne/>
      <ServicesSection/>
      <ArticlesSection/>
      <InstagramFeed/>
      <FooterSection/>
    </>
  );
}

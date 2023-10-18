"use client";
import RecentComments from "@/components/RecentComments/RecentComments";
import Intro from "./_parts/Intro";
import SalonRegistration from "./_parts/SalonRegistration";
import SalonSlider from "./_parts/SalonSlider";
import Feedback from "./_parts/Feedback/Feedback";
import About from "./_parts/About";

export default function Home() {
  return (
    <section className="min-h-screen">
      <Intro />
      {/* slider of limited salons */}
      <SalonSlider />
      {/* new salon registeration */}
      <SalonRegistration />
      {/* recent comments */}
      <RecentComments />

      <div>
        {/* feedback form */}
        <Feedback />
        {/* about us */}
        <About />
      </div>
    </section>
  );
}

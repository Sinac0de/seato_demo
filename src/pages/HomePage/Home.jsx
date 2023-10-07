import SalonSlider from "./parts/SalonSlider";
import SalonRegistration from "./parts/SalonRegistration";
import RecentComments from "src/components/RecentComments/RecentComments";
import Feedback from "./parts/Feedback/Feedback";
import AboutUs from "./parts/About";
import Intro from "./parts/Intro";
import LoginModal from "../../components/Modal/LoginModal";

function Home() {
  return (
    <section className="min-h-screen">
      <LoginModal defaultType="login" />
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
        <AboutUs />
      </div>
    </section>
  );
}

export default Home;

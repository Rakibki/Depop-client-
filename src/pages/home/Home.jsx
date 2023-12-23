import Banner from "./Banner";
import Collection from "./Collection";
import Tshirts from "./Tshirts";
import UpcomingCollection from "./UpcomingCollection";
import Gallery from "./Gallery";
import Services from "./Services";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div data-aos="fade-up">
        <Banner />
      </div>
      <Collection />

      <div data-aos="fade-up">
        <UpcomingCollection />
      </div>
      <Tshirts />
      <Gallery />
      <Services />
    </div>
  );
};

export default Home;

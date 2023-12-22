import Banner from "./Banner";
import Collection from "./Collection";
import Tshirts from "./Tshirts";
import UpcomingCollection from "./UpcomingCollection";
import Gallery from "./Gallery";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Collection />
      <UpcomingCollection />
      <Tshirts />
      <Gallery />
      <Services />
    </div>
  );
};

export default Home;

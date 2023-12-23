import upcammimgDress from "../../assets/image/deal_timer_bg.jpg";
import Countdown from "react-countdown";
// const { getDay } = require("date-fns");

const UpcomingCollection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${upcammimgDress})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="items-center mt-16 overflow-hidden h-screen p-16 bg-[#f5e6e0]"
    >
      <div className="text-5xl md:text-8xl mt-24">
        <h2 className="text-5xl md:text-7xl mb-8 font-bold">Spring Collection</h2>
        <Countdown date={Date.now() + 1000000000} />
      </div>
    </div>

    // <Countdown date={Date.now() + 1000000000} />
  );
};

export default UpcomingCollection;

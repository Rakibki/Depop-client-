import banner1 from "../../assets/image/banner1.png";
import banner2 from "../../assets/image/banner2.png";
import slideshow from "../../assets/image/slideshow.png";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${slideshow})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="grid items-center overflow-hidden h-screen p-16 bg-[#f5e6e0] grid-cols-3"
    >
      <div className="col-span-2">
        <h2 className="mb-2 text-7xl">Summer Sale Stylish</h2>
        <h2 className="mb-3 text-8xl">Womens</h2>
        <button className="text-lg font-medium">Discover More</button>
      </div>
      <div>
        <img className="h-full" src={banner1} alt="" />
      </div>
    </div>
  );
};

export default Banner;

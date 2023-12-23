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
      className="md:grid items-center overflow-hidden min-h-screen p-16 bg-[#f5e6e0] grid-cols-3"
    >
      <div className="col-span-2">
        <h2 className="mb-2 text-6xl md:text-7xl">Summer Sale Stylish</h2>
        <h2 className="mb-3 text-7xl md:text-8xl">Womens</h2>
        <div className="text-[#222222]">
          <button className="text-lg font-medium">Discover More</button>
          <div className="w-20 transition-all hover:w-[120px] h-1 bg-[#222222]"></div>
        </div>
      </div>
      <div>
        <div data-aos="fade-left">
          <img className="h-full" src={banner1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

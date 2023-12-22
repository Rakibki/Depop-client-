import banner_1 from "../../assets/image/banner_1.jpg";
import banner_2 from "../../assets/image/banner_2.jpg";

const Tshirts = () => {
  return (
    <div className="grid gap-2 grid-cols-2">
      <div className="text-white relative">
        <img src={banner_1} alt="" />
        <div className="absolute bottom-5 left-6">
          <h2 className="text-lg">Starting At $19</h2>
          <h2 className="text-2xl">Women's T-Shirts</h2>
          <div className="text-white]">
            <button className="text-base mt-4 font-medium">
              Discover More
            </button>
            <div className="w-20 transition-all hover:w-[120px] h-1 bg-[#fff]"></div>
          </div>
        </div>
      </div>

      <div className="relative">
        <img src={banner_2} alt="" />
        <div className="absolute bottom-5 left-6">
          <h2 className="text-lg">Starting At $19</h2>
          <h2 className="text-2xl">Women's T-Shirts</h2>
          <div className="text-[#222222]">
            <button className="text-base mt-4 font-medium">
              Discover More
            </button>
            <div className="w-20 transition-all hover:w-[120px] h-1 bg-[#222222]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tshirts;

import girlCollection from "../../assets/image/collection_grid_1.jpg";
import boyCollection from "../../assets/image/collection_grid_2.jpg";
import collection_grid from "../../assets/image/collection_grid_3.jpg";

const Collection = () => {
  return (
    <div className="grid gap-3 grid-cols-2">
      <div className="relative">
        <img className="w-full h-full" src={girlCollection} alt="" />
        <div className="absolute left-10 bottom-4">
          <h2 className="mb-2">Hot List</h2>
          <h1 className="text-4xl mb-4">Women Collection</h1>
          <div className="text-[#222222]">
            <button className="text-lg font-medium">SHOP NOW</button>
            <div className="w-20 transition-all hover:w-[120px] h-1 bg-[#222222]"></div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative">
          <img className="w-full h-full" src={boyCollection} alt="" />
          <div className="absolute left-10 bottom-4">
            <h2 className="mb-2">Hot List</h2>
            <h1 className="text-4xl mb-4">Women Collection</h1>
            <div className="text-[#222222]">
              <button className="text-lg font-medium">SHOP NOW</button>
              <div className="w-20 transition-all hover:w-[120px] h-1 bg-[#222222]"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="relative">
            <img className="w-full h-full" src={collection_grid} alt="" />
            <div className="absolute left-10 bottom-4">
              <h2 className="mb-2">Hot List</h2>
              <h1 className="text-4xl mb-4">Women Collection</h1>
              <div className="text-[#222222]">
                <button className="text-lg font-medium">SHOP NOW</button>
                <div className="w-20 transition-all hover:w-[120px] h-1 bg-[#222222]"></div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img className="w-full h-full" src={boyCollection} alt="" />
            <div className="absolute left-10 bottom-4">
              <h2 className="mb-2">Hot List</h2>
              <h1 className="text-4xl mb-4">Women Collection</h1>
              <div className="text-[#222222]">
                <button className="text-lg font-medium">SHOP NOW</button>
                <div className="w-20 transition-all hover:w-[120px] h-1 bg-[#222222]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

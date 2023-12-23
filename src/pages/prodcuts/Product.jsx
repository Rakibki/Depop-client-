import { FaRegEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { BiShoppingBag } from "react-icons/bi";
import "./style.css";

const Product = ({ product }) => {
  const handleAddToCard = (id) => {
    alert(id);
  };

  return (
    <div id="prodctImg" className="hover:relative overflow-hidden z-40">
      <img
        className="h-[280px] w-full"
        src={product?.image}
        alt=""
      />
      <div className="absolute flex flex-col gap-2 text-xl transition-all top-3 right-[10px]">
        <FaRegEye className="cursor-pointer" />
        <FaRegHeart className="cursor-pointer" />
        <BiShoppingBag className="cursor-pointer" />
      </div>
      <button
      id="btn"
        onClick={() => handleAddToCard(product?._id)}
        className="bg-white hidden   absolute transition-all w-[90%] cursor-pointer font-semibold mx-auto top-[230px] right-[10px] text-black py-2"
      >
        ADD TO CARD
      </button>
      <div className="px-2 py-4">
        <p className="text-sm text-[#767676]">Dresses</p>
        <h1 className="text-xl text-[#2b2b2b]">{product?.title}</h1>
        <h1 className="text-xl text-[#767676]">${product?.price}</h1>
      </div>
    </div>
  );
};

export default Product;

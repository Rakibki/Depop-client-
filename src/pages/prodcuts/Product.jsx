import { FaRegEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { BiShoppingBag } from "react-icons/bi";
import "./style.css";
import useAxiosLocal from "../../hooks/useAxiosLocal";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvaider";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const axiosLocal = useAxiosLocal();
  const { user } = useContext(authContext);

  const handleAddToCard = async (product) => {
    if (!user && !user?.email) {
      return toast.warn("Please login first", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    const res = await axiosLocal.post("/card", {
      name: product?.name,
      desc: product?.desc,
      image: product?.image,
      price: product?.price,
      ratting: product?.ratting,
      quantity: product?.quantity,
      email: user?.email,
    });

    if (res?.data?.insertedId) {
      toast.success("Card added successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div id="prodctImg" className="hover:relative overflow-hidden z-40">
      <img className="h-[280px] w-full" src={product?.image} alt="" />
      <div className="absolute flex flex-col gap-2 text-xl transition-all top-3 right-[10px]">
        <Link to={`/product/${product?._id}`}>
          <FaRegEye className="cursor-pointer" />
        </Link>
        <FaRegHeart className="cursor-pointer" />
        <BiShoppingBag className="cursor-pointer" />
      </div>
      <button
        id="btn"
        onClick={() => handleAddToCard(product)}
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

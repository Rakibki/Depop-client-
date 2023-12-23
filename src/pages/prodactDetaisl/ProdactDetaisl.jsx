import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import useAxiosLocal from "../../hooks/useAxiosLocal";
import { useQuery } from "@tanstack/react-query";
import PageTitle from "../../components/pageTitle/PageTitle";
import { Rate } from "antd";
import { useState } from "react";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvaider";
import { toast } from "react-toastify";

const ProdactDetaisl = () => {
  const { id } = useParams();
  const axiosLocal = useAxiosLocal();
  const [count, setCount] = useState(0);
  const { user } = useContext(authContext);

  const { isLoading, data: product } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosLocal.get(`/product/${id}`);
      return res?.data;
    },
  });

  if (isLoading) <Loader />;

  const handleINc = () => {
    if (product.quantity > count) {
      setCount(count + 1);
    }
  };

  const handleDsc = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleCard = async () => {
    if (!user && !user?.email) {
      toast.warn("Please login first", {
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
    <div>
      <PageTitle text={"product Details"} />

      <div className="m-10 gap-3 h-[500px] overflow-hidden grid grid-cols-2">
        <div>
          <img className="w-full h-full" src={product?.image} alt="" />
        </div>
        <div className="p-7">
          <h1 className="mb-4 text-3xl">{product?.title}</h1>
          <Rate disabled defaultValue={4} />
          <h1 className="mt-4 text-3xl">${product?.price}</h1>

          <p className="mt-7 text-lg">{product?.desc}</p>

          <div className="flex mt-8 items-center gap-3">
            <div className="border-2 flex gap-2 py-3 px-6">
              <button onClick={handleINc}>+</button>
              {count}
              <button onClick={handleDsc}>-</button>
            </div>
            <button
              onClick={handleCard}
              className=" bg-[#c32929] py-3 px-6 text-lg font-medium text-white  hover:opacity-80"
            >
              ADD TO CARD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdactDetaisl;

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Single_Oder_Row from "./Single_Oder_Row.jsx";
import Loader from "../../components/loader/Loader.jsx";
import { authContext } from "../../providers/AuthProvaider.jsx";
import { toast } from "react-toastify";

const ViewCard = () => {
  const { user } = useContext(authContext);
  const axiosSecure = useAxiosSecure();

  const {
    isPending,
    data: myCard,
    refetch,
  } = useQuery({
    queryKey: ["myCarddall"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/myCard/${user?.email}`);
      return res?.data;
    },
  });

  const totalPrice = myCard?.reduce((acc, curr) => acc + curr?.price, 0);

  const handleDeleteFood = async (id) => {
    const res = await axiosSecure.delete(`/myCard/${id}`);
    if (res?.data?.deletedCount > 0) {
      toast.success("Deleted Successdully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      refetch()
    }
  };

  if (isPending) <Loader />;

  return (
    <div>
      <div className="grid grid-cols-7">
        <div className="col-span-5">
          {myCard?.length > 0 && (
            <div className="mt-10 p-6">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Action</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {myCard?.map((food) => (
                      <Single_Oder_Row
                        handleDeleteFood={() => handleDeleteFood(food._id)}
                        key={food?._id}
                        food={food}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        <div className="col-span-2">
          <div className="mt-24 h-[350px] rounded-xl p-6 w-full border-2">
            <h2 className="text-2xl font-semibold mb-4">Cart Totals</h2>

            <div className="flex mt-2 justify-between">
              <h2 className="text-[#838fa2] text-lg">Sub-total</h2>
              <h2 className="text-[#838fa2] text-lg">${totalPrice}</h2>
            </div>

            <div className="flex mt-2 justify-between">
              <h2 className="text-[#838fa2] text-lg">Delivery</h2>
              <h2 className="text-[#838fa2] text-lg">Free</h2>
            </div>

            <div className="flex mt-2 justify-between">
              <h2 className="text-[#838fa2] text-lg">Discount</h2>
              <h2 className="text-[#838fa2] text-lg">$7</h2>
            </div>

            <div className="flex mt-2 mb-3 justify-between">
              <h2 className="text-[#838fa2] text-lg">Tax</h2>
              <h2 className="text-[#838fa2] text-lg">$3</h2>
            </div>

            <hr />
            <div>
              <div className="flex mt-2 mb-3 justify-between">
                <h2 className="text-[#2d323b] text-xl">Total</h2>
                <h2 className="text-[#2d323b] text-xl">
                  ${totalPrice - 7 + 3}
                </h2>
              </div>
            </div>

            <button className="px-6 w-full mt-4 py-2 rounded-lg hover:opacity-80 bg-[#c32929] border-none font-semibold outline-none text-white">
              Proceed to Checkout
            </button>
          </div>

          <div className="mt-10 h-[200px] rounded-xl p-6 w-full border-2">
            <h2 className="text-2xl font-semibold mb-4">Coupon Code</h2>

            <div className="form-control">
              <input
                type="text"
                placeholder="Enter Coupon Code"
                className="input rounded-none input-bordered"
                required
                name="code"
              />
            </div>

            <button className="px-6 w-full mt-4 py-2 rounded-lg hover:opacity-80 bg-[#c32929] border-none font-semibold outline-none text-white">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCard;

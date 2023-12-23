import { useQuery } from "@tanstack/react-query";
import useAxiosLocal from "../../hooks/useAxiosLocal";
import Loader from "../../components/loader/Loader";
import PageTitle from "../../components/pageTitle/PageTitle";
import Product from "./Product";

const Products = () => {
  const axiosLocal = useAxiosLocal();

  const { isLoading, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosLocal.get("/products");
      return res?.data;
    },
  });

  if (isLoading) <Loader />;

  return (
    <div className="overflow-hidden">
      <div className="mb-6">
        <PageTitle text={"Products"} />
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-2 md:block hidden">
          filter
        </div>
        <div className="col-span-10 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products?.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

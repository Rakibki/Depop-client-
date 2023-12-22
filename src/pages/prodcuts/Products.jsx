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
    <div>
      <div className="mb-6">
        <PageTitle text={"Products"} />
      </div>

      <div>
        {products?.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Products;

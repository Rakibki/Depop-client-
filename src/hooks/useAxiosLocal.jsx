import axios from "axios";

const axiosLocal = axios.create({
  baseURL: "https://depop-alpha.vercel.app",
});

const useAxiosLocal = () => {
  return axiosLocal;
};

export default useAxiosLocal;

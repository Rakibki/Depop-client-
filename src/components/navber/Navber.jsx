import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../providers/AuthProvaider";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { MdOutlineClose } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import MyCard from "./MyCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Navber = () => {
  const { user } = useContext(authContext);
  const [openCard, setOpenCard] = useState(false);
  const axiosSecure = useAxiosSecure();

  const handleLogout = () => {
    signOut(auth);
  };

  const { data: cardLength } = useQuery({
    queryKey: ["cardLength"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/cardLength/${user?.email}`);
      return res?.data?.count;
    },
  });



  const navItems = (
    <div className="flex gap-6">
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>Blog</NavLink>
      </li>
      <li>
        <NavLink>Products</NavLink>
      </li>
    </div>
  );

  return (
    <div className="navbar overflow-hidden bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center text-2xl gap-4">
          {/* shopping card */}
          <div
            onClick={() => setOpenCard(!openCard)}
            className="relative mr-6 cursor-pointer"
          >
            <FiShoppingCart className="text-2xl" />
            <div className="badge bg-[#c32929] border-[#c32929] text-white font-semibold absolute -top-3 left-3 badge-secondary">
              {
                cardLength ? cardLength : 0
              }
            </div>
          </div>

          {/* card body */}
          <div
            className={` z-50 menu bg-black bg-opacity-60 shadow rounded-box absolute duration-500 transition-all w-[380px] right-16 px-6 py-10 top-20 ${
              openCard ? "mr-0" : "-mr-[1000px]"
            }`}
          >
            <div className="flex mb-2 items-center justify-between">
              <h1 className="text-xl text-white">Shoping Cart</h1>
              <h1>
                <MdOutlineClose
                  onClick={() => setOpenCard(false)}
                  className="text-3xl text-[#c32929] cursor-pointer "
                />
              </h1>
            </div>
            <hr />

            {/* body */}
            <MyCard setOpenCard={setOpenCard} />
          </div>

          <FaRegUser />
          <FaRegHeart />
          <div>
            {user ? (
              <button
                onClick={handleLogout}
                className=" bg-[#c32929] pb-2 pt-1 px-6 text-lg font-medium rounded-md text-white  hover:opacity-80"
              >
                Logout
              </button>
            ) : (
              <Link to={"/login"}>
                <button className=" bg-[#c32929] pb-2 pt-1 px-6 text-lg font-medium rounded-md text-white  hover:opacity-80">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;

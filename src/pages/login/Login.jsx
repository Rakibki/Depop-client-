import {Link} from "react-router-dom"


const Login = () => {
 const handleLogin = () => {
  alert("clcik")
 }
 
  return (
    <div className="flex w-[60%] gap-6 mx-auto my-16 h-[450px] border-2">
      <div className="flex-1">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <input
              type="email"
              placeholder="email*"
              className="input rounded-none input-bordered"
              required
              name="email"
            />
          </div>

          <div className="form-control">
            <input
              type="password"
              placeholder="password"
              className="input rounded-none input-bordered"
              required
              name="password"
            />

            <div className="flex mt-3 gap-2 flex-cols-2">
              <div className="w-[50%]">
                <input
                  name="image"
                  type="file"
                  placeholder="password"
                  required
                />
              </div>
            </div>

            <div className="flex items-center mt-3 justify-between">
              <button
                type="submit"
                className="px-5 py-2 mt-2 bg-[#ffa41f] transition-all  text-white font-bold hover:opacity-80"
              >
                Register
              </button>
            </div>
            <Link to={"/login"}>
              <p className="mt-3 transition-all hover:underline cursor-pointer hover:text-[#ffa41f]">
                Login account
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

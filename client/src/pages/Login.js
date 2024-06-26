import React, { useState } from "react";
import loginIcons from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="login">
      <div className="mx-auto container p-5">
        <div className="bg-white p-4 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcons} alt="login-icon" />
          </div>
          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Email : </label>
              <div className="bg-slate-100 p-2 ">
                {" "}
                <input
                  type="email"
                  placeholder="enter email"
                  name="email"
                  value={data.email}
                  className="w-full h-full outline-none bg-transparent"
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div>
              <label>Password : </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  placeholder="enter Password"
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link
                to="/forgot-password"
                className="block w-fit ml-auto hover:underline hover:text-red-600"
              >
                Forgot Password ?
              </Link>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white w-full max-w-[150px] rounded-full hover:scale-110 transition-all py-2 px-6 mx-auto block mt-6">
              {" "}
              Login
            </button>
          </form>
          <p className="my-5">
            Don't have account ?{" "}
            <Link
              to="/sign-up"
              className="text-red-600 hover:text-red-700 hover:underline"
            >
              {" "}
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;

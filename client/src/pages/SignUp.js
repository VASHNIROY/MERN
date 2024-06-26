import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginIcons from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import ImageTobase64 from "../helpers/imageTobase64";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];

    const imagePic = await ImageTobase64(file);
    console.log("pic", imagePic);

    setData((prev) => ({
      ...prev,
      profilePic: imagePic,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="signup">
      <div className="mx-auto container p-5">
        <div className="bg-white p-4 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.profilePic || loginIcons} alt="login-icon" />
            </div>
            <form>
              <label>
                <div className="text-xs bg-opacity-80 bg-slate-200 cursor-pointer pb-4 pt-2 text-center absolute bottom-0 w-full">
                  Upload Photo{" "}
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUploadPic}
                />
              </label>
            </form>
          </div>

          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Name : </label>
              <div className="bg-slate-100 p-2 ">
                {" "}
                <input
                  type="text"
                  placeholder="enter your name"
                  name="name"
                  value={data.name}
                  className="w-full h-full outline-none bg-transparent"
                  onChange={handleOnChange}
                  required
                />
              </div>
            </div>
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
                  required
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
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>

            <div>
              <label>Confirm Password : </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="ConfirmPassrod"
                  value={data.showConfirmPassword}
                  onChange={handleOnChange}
                  placeholder="enter Confirm Password"
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  <span>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white w-full max-w-[150px] rounded-full hover:scale-110 transition-all py-2 px-6 mx-auto block mt-6">
              {" "}
              Sign Up
            </button>
          </form>

          <p className="my-5">
            Already have account ?{" "}
            <Link
              to="/login"
              className="text-red-600 hover:text-red-700 hover:underline"
            >
              {" "}
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

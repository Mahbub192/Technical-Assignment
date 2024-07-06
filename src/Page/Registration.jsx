import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import SocalLogin from "./SocalLogin";
import Swal from "sweetalert2";
import bannerImage from "../assets/103084-new-yoga.json";
import Lottie from "lottie-react";

const Registration = () => {
  // eslint-disable-next-line no-unused-vars
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setError("");
    console.log("data", data);

    if (
      (data.confirmPassword === data.password && data.nid.length == 10) ||
      data.nid.length == 13 ||
      (data.nid.length == 17 && data.number.length == 11)
    ) {
      createUser(data.email, data.password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          reset();
          Swal.fire({
            icon: "success",
            title: "User created successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setError(
        "Confirm password and password are not the same. Please try again!"
      );
    }
  };

  return (
    <div className="hero min-h-[80vh] pt-20">
      <div className="hero-content w-full flex flex-col md:flex-row">
        <div className="w-1/2">
          <Lottie animationData={bannerImage} loop={true} />
        </div>
        <div className="card flex-shrink-0 md:w-1/3 shadow-2xl bg-base-100">
          <h1 className="text-xl font-semibold text-center mt-10">
            Registration
          </h1>
          <p className="text-center text-red-500 text-lg">{error}</p>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">{errors.name.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="tel"
                {...register("number", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^01[1-9]\d{8}$/,
                    message:
                      "Enter a valid Bangladeshi phone number (11 digits)",
                  },
                })}
                placeholder="Phone Number"
                className="input input-bordered"
              />
              {errors.number && (
                <span className="text-red-600">{errors.number.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">NID Number</span>
              </label>
              <input
                type="tel"
                {...register("nid", {
                  required: "NID number is required",
                  pattern: {
                    value: /^(?:\d{10}|\d{13}|\d{17})$/,
                    message: "NID number must be 10, 13, or 17 digits long",
                  },
                })}
                placeholder="NID Number"
                className="input input-bordered"
              />
              {errors.nid && (
                <span className="text-red-600">{errors.nid.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "password" : "text"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password cannot exceed 20 characters",
                  },
                })}
                placeholder="Password"
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
              <FaRegEye
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 bottom-4 text-xl cursor-pointer"
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type={showConfirmPassword ? "password" : "text"}
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  minLength: {
                    value: 6,
                    message: "Confirm Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Confirm Password cannot exceed 20 characters",
                  },
                })}
                placeholder="Confirm Password"
                className="input input-bordered"
              />
              {errors.confirmPassword && (
                <p className="text-red-600">{errors.confirmPassword.message}</p>
              )}
              <FaRegEye
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-2 bottom-4 text-xl cursor-pointer"
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-cyan-300 hover:bg-cyan-600 hover:text-white"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-cyan-500">Login</span>
            </Link>
          </p>
          <SocalLogin />
        </div>
      </div>
    </div>
  );
};

export default Registration;

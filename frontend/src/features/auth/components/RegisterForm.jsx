import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../shared/Loading";



const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const { handleRegister , loading } = useAuth();

  if(loading){
    return <Loading/>
  }


  async function submitHandler(data) {
    try {
      const result = await handleRegister(data);
      if (result.success) {
        reset();
        toast.success(result.message);
        navigate("/");
      } else {
        console.log(result.message);
        toast.error(result.message);
      }

    } catch (error) {
      console.log(error.message);
      toast.error("something went wrong");
    }
  }

  return (
    <form
      className="flex flex-col gap-7 w-90 text-white"
      onSubmit={handleSubmit(submitHandler)}
    >
      <input
        {...register("username")}
        className="px-3 py-2.5 bg-[#2E1E16] rounded-sm w-full border border-[#444242]  outline-none"
        type="text"
        placeholder="username goes here  Ex.ChefMaster "
      />
      <input
        {...register("email")}
        className="px-3 py-2.5 bg-[#2E1E16] rounded-sm w-full border border-[#444242]  outline-none"
        type="email"
        placeholder="email goes here    Ex.chef@example.com"
      />
      <input
        {...register("password")}
        className="px-3 py-2.5 bg-[#2E1E16] rounded-sm w-full border border-[#444242]  outline-none"
        type="password"
        placeholder="password goes here"
      />
      <button
        className="bg-[#F46A25] rounded-md py-2.5 font-semibold cursor-pointer"
        type="submit"
      >
        Create Account
      </button>
    </form>
  );
};

export default RegisterForm;

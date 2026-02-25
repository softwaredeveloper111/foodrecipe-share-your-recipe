import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Loading from "../../shared/Loading";
import { toast } from "react-toastify";



const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { handleLogin, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  async function submitHandler(data) {
    try {
      const result = await handleLogin(data);
   
      if (result.success) {
        reset();
        toast.success("user logged insucessfully");
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
        {...register("identifier")}
        className="px-3 py-2.5 bg-[#2E1E16] rounded-sm w-full border border-[#444242]  outline-none"
        type="text"
        placeholder="username or email goes here."
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
        Log in
      </button>
    </form>
  );
};

export default LoginForm;

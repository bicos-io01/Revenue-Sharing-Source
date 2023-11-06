"use client";
import { useEffect } from "react";
// import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "@/reusebaeComponents/button";
import Inputs from "@/reusebaeComponents/inputs";
import Form from "@/reusebaeComponents/form";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import LineInputs from "@/reusebaeComponents/LineInput";
import { useToggle } from "@/functonality/navBarController";

interface fromData {
  email: string;
  password: string;
}

function SignIn() {
  const router = useRouter();

  const handleCancel = () => {
    router.push("/Landing");
  };

  const form = useForm<fromData>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data: fromData) => {
    console.log("form submitted", data);
  };

  return (
    <div className=" ">
      <Form
        bg="white"
        shadow="md"
        title="Hey welcome back!"
        // @ts-ignore
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        description="SignIn to your SummitShare Account"
        inputs={
          <div className="space-y-5">
            <LineInputs
              length="[350px]"
              label="Email"
              name="email"
              type="email"
              id="email"
              message="Email name required!"
              register={register}
            />

            <p className="text-xs text-red-500 font-light">
              {errors.email?.message}
            </p>
            <LineInputs
              length="[350px]"
              label="Password"
              name="password"
              type="password"
              id="password"
              message="Password name required!"
              register={register}
            />
            <p className="text-xs text-red-500 font-light">
              {errors.password?.message}
            </p>
          </div>
        }
        submit={
          <div className="flex flex-row gap-2">
            <Button
              text="Sign in"
              type="submit"
              backGroundColor="bg-orange-500"
              textColor="text-white"
              hover="hover:bg-orange-950/90"
            />
            <Button
              // @ts-ignore
              click={handleCancel}
              text="Cancel"
              type="button"
              borderColor=" border border-stone-300"
              textColor="text-stone-500"
              hover=""
            />
          </div>
        }
      />
    </div>
  );
}

export default SignIn;
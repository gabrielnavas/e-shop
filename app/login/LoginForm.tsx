'use client';

import { FC, useState } from "react";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Heading from "../components/Heading";
import { Input } from "../components/inputs/input";
import Button from "../components/Button";
import Link from "next/link";

import { AiOutlineGoogle } from 'react-icons/ai'
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface ILoginFormProps { };

export const LoginForm: FC<ILoginFormProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const {
    register, handleSubmit, formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    let loginWithSuccess = false;
    let hasError = false

    setIsLoading(true);
    debugger
    try {
      const response = await signIn('credentials', {
        ...data,
        redirect: false,
      })
      if (response?.ok) {
        if (response?.ok) {
          router.push('/cart')
          router.refresh()
          loginWithSuccess = true;
        }
        if (response?.error) {
          toast.error(response.error)
        }
      }
    }
    catch (err) {
      console.error(err);
      hasError = true;
    }
    finally {
      setIsLoading(false);
    }

    if (loginWithSuccess) {
      toast.success("Logged in");
    } else if (hasError) {
      toast.error("Error! Call the admin!");
    } else {
      toast.error("E-mail or Password incorrect")
    }
  }

  return (
    <>
      <Heading title="Sign In to E~Shop" />
      <hr className="bg-slate-300 w-full h-px" />
      <Button
        outline
        label="Sign In with Google"
        Icon={AiOutlineGoogle}
        onClick={() => { }} />
      <Input
        id="email"
        label="E-mail *"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="email"
      />
      <Input
        id="password"
        label="Password *"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Button label={
        isLoading
          ? 'Loading'
          : 'Login'}
        onClick={handleSubmit(onSubmit)} />
      <p className="text-sm">
        Do not have an account? {' '}
        <Link href='/register' className="underline">
          Create account
        </Link>
      </p>
    </>
  );
}

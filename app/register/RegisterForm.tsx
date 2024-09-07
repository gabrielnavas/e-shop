'use client';

import { FC, useState } from "react";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Heading from "../components/Heading";
import { Input } from "../components/inputs/input";
import Button from "../components/Button";
import Link from "next/link";

import { AiOutlineGoogle } from 'react-icons/ai'
import axios from "axios";
import toast from "react-hot-toast";

import {signIn} from 'next-auth/react'
import { useRouter } from "next/navigation";

interface IRegisterFormProps { };

export const RegisterForm: FC<IRegisterFormProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register, handleSubmit, formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios.post("/api/register", data)
      .then((result) => {
        console.log(result);
        toast.success("Account created");

        // TODO: remove from client
        signIn('credentials', {
          email: data.email,
          password: data.password,
          redirect: false, 
        }).then(callback => {
          if(callback?.ok) {
            router.push('/cart')
            // router.refresh()
            toast.success("Logged in");
          }
          if(callback?.error) {
            toast.error(callback.error)
          }
        })
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error! Call the admin!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <Heading title="Sign Up to E~Shop" />
      <hr className="bg-slate-300 w-full h-px" />
      <Button
        outline
        label="Sign up with Google"
        Icon={AiOutlineGoogle}
        onClick={() => { }} />
      <Input
        id="name"
        label="Name *"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
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
          : 'Sign Up'}
        onClick={handleSubmit(onSubmit)} />
      <p className="text-sm">
        Already have an account? {' '}
        <Link href='/login' className="underline">
          Log in
        </Link>
      </p>
    </>
  );
}

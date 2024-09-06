'use client';

import { FC, useState } from "react";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Heading from "../components/Heading";
import { Input } from "../components/inputs/input";
import Button from "../components/Button";
import Link from "next/link";

import { AiOutlineGoogle } from 'react-icons/ai'

interface ILoginFormProps { };

export const LoginForm: FC<ILoginFormProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register, handleSubmit, formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    new Promise(resolve => setTimeout(() => {
      console.log(data);
      setIsLoading(false);
    }, 1000))
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

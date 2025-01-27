"use client";

import React from "react";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {zodResolver} from "@hookform/resolvers/zod";
import {validationSchema} from "@/utils/validationSchema";

interface LoginForm {
  name: string;
  email: string;
  password: string;
}

const Practice28 = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginForm>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: LoginForm) => console.log(data);

  return (
    <div className="mx-auto max-w-2xl mt-8">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-3xl">React Hook Formの練習</h1>
          <p className="text-xl">zodバリデーションを利用してみた！</p>
        </div>
        <div
          className=" p-9 bg-white rounded-2xl border border-gray-300
            flex flex-col items-center justify-center
         shadow-2xl"
        >
          <div className="min-w-80 max-w-96 flex flex-col gap-4 items-center">
            <h1 className="text-2xl">Login Form</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="min-w-72 max-w-96 flex flex-col gap-4"
            >
              <label htmlFor="name">・名前</label>
              <Input id="name" type="text" {...register("name")} />
              <p className="text-red-500">
                {errors.name?.message as React.ReactNode}
              </p>
              <label htmlFor="email">・メールアドレス</label>
              <Input id="email" type="text" {...register("email")} />
              <p className="text-red-500">
                {errors.email?.message as React.ReactNode}
              </p>
              <label htmlFor="password">・パスワード</label>
              <Input id="password" type="password" {...register("password")} />
              <p className="text-red-500">
                {errors.password?.message as React.ReactNode}
              </p>
              <Button type="submit" className="mt-2 bg-blue-400">
                送信
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice28;

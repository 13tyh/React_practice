"use client";

import React from "react";
import {useForm, FieldErrors} from "react-hook-form";
import {Button} from "@/components/ui/button";

interface FormValues {
  name: string;
  email: string;
  gender: string;
  memo: string;
}

const defaultValues = {
  name: "aaa",
  email: "aaa@gmail.com",
  gender: "male",
  memo: "aaaaaa",
};

const Practice27 = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>({defaultValues});

  const onSubmit = (data: FormValues) => console.log(data);
  const onError = (errors: FieldErrors<FormValues>) => console.log(errors);

  return (
    <div className="mx-auto max-w-2xl mt-8">
      <div className="flex flex-col items-center">
        <h1>React Hook Formの練習</h1>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          noValidate
          className="mt-4 border border-gray-400 p-4 rounded-sm min-w-[400px] flex flex-col gap-4 items-center"
        >
          <label htmlFor="name" className="ml-20">
            名前:
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "名前は必須です",
                maxLength: {
                  value: 10,
                  message: "名前は10文字以内で入力してください",
                },
              })}
              className="ml-2 border border-gray-400 p-1 rounded"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </label>
          <label htmlFor="email" className="ml-1">
            メールアドレス:
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "メールアドレスは必須です",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "有効なメールアドレスを入力してください",
                },
              })}
              className="ml-2 border border-gray-400 p-1 rounded"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </label>
          <div className="flex flex-row gap-4 ml-3">
            性別:
            <div className="flex gap-4">
              <label htmlFor="gender"></label>
              <label>
                <input
                  type="radio"
                  value="male"
                  {...register("gender", {
                    required: "性別は必須です",
                  })}
                />
                男性
              </label>
              <label>
                <input
                  type="radio"
                  {...register("gender", {required: "性別は必須です"})}
                />
                女性
              </label>
              <div>{errors.gender?.message}</div>
            </div>
          </div>
          <div className="ml-20">
            <label htmlFor="memo" style={{marginLeft: "7px"}}>
              メモ:
              <br />
              <textarea
                id="memo"
                {...register("memo", {
                  required: "メモは必須です",
                  maxLength: {
                    value: 100,
                    message: "メモは100文字以内で入力してください",
                  },
                })}
                className="ml-12 border border-gray-400 p-1 rounded"
              />
              {errors.memo && <p>{errors.memo.message}</p>}
            </label>
          </div>
          <div>
            <Button type="submit" className="bg-blue-500 hover:bg-blue-400">
              送信
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Practice27;

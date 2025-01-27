import z from "zod";

export const validationSchema = z.object({
  name: z
    .string()
    .nonempty("名前は必須です。")
    .min(4, "名前は4文字以上で入力してください。")
    .max(10),
  email: z
    .string()
    .nonempty("emailは必須です。")
    .email("有効なemailを入力してください。"),
  password: z
    .string()
    .nonempty("パスワードは必須です。")
    .min(8, "パスワードは8〜15文字で入力してください。")
    .max(15),
});

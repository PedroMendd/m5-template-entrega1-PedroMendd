import { z } from "zod";
import { taskSchema } from "./task.schemas";
import { categorySchema } from "./category.schemas";

export const userSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1),
  email: z.string().email().min(1),
  password: z.string().min(1),
  tasks: z.array(taskSchema).optional(),
  categories: z.array(categorySchema).optional(),
});

export type TUser = z.infer<typeof userSchema>;

export const userRegisterBodySchema = userSchema.omit({
  id: true,
  tasks: true,
  categories: true,
});

export type TUserRegisterBody = z.infer<typeof userRegisterBodySchema>;

export const userLoginBodySchema = userRegisterBodySchema.omit({ name: true });

export type TUserLoginBody = z.infer<typeof userLoginBodySchema>;

export const userReturnSchema = userSchema.omit({
  password: true,
  tasks: true,
  categories: true,
});

export type TUserReturn = z.infer<typeof userReturnSchema>;

export type TUserLoginReturn = {
  accessToken: string;
  user: TUserReturn;
};

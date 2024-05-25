import z, { string } from "zod";
export  const signupinput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional(),
    email:z.string().email(),
})
 export type Signupinput = z.infer<typeof signupinput>

 export const signinInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

export type SigninInput = z.infer<typeof signinInput>

export const createblogInput = z.object({
    title: z.string(),
    content: z.string(),
})
export type CreateblogInput = z.infer<typeof createblogInput>

export const updateblogInput = z.object({
    title: z.string(),
    content: z.string(),
    id:z.number(),
})
export type UpdateblogInput = z.infer<typeof updateblogInput> 
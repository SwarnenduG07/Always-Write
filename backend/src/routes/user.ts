import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {  sign } from 'hono/jwt'
import { signupinput , signinInput} from "@swarnendug07/common";



export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    }
}>();

userRouter.post("/signup", async (c) =>{
    const body = await c.req.json()

    const  succes  = signupinput.safeParse(body);
    if(!succes) {
        c.status(411)
        return c.json({
            Error:"inputs are not correct"
        })
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
     try {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          username: body.username,
          password: body.password,
          name: body.name
          
        }
      })
      const jwt = await sign({
        id: user.id}, 
        c.env.JWT_SECRET)

      return c.text(jwt)
     } catch(e) { 
      console.log(e)
    c.status(411);
       return c.text("invalid")
     }
  })
  
  userRouter.post("/signin", async (c)=> {
    const body = await c.req.json()
     const  succes  = signinInput.safeParse(body);
    if(!succes) {
        c.status(411)
        return c.json({
            message:"inputs are not correct"
        })
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
   
    try {
      const user = await prisma.user.findFirst({
        where: {
          username: body.username,
          password: body.password,
         
        }
      })
      if (!user) {
        c.status(403)
        return c.json({message: "Incorreect password or email"})
      }
      const jwt = await sign({id: user.id},c.env.JWT_SECRET);
      return c.text(jwt)
     } catch (e) {
      console.log(e);
       c.status(411);
       return c.text("Invalid")
     }
  
  })
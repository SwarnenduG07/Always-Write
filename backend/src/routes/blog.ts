import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createblogInput, updateblogInput } from "@swarnendug07/common";
import { Hono } from "hono";
import { verify } from "hono/jwt";


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
    Variables: {
        responseId: string;
    }
}>();

blogRouter.use("/*", async (c,next)=> {
    
    const header = c.req.header("authorization") || "";
    const token = header.split(" ")[1] // for Bearer

        try {
            const response = await verify(token, c.env.JWT_SECRET) 
            if (response) {  
                c.set("responseId", response.id);
            await next()
            } else {
            c.status(403)
            return c.json({error: "Plese Signup"})
            } 
        } catch (e) {
            c.status(403)
            return c.json({ massage: "You are not logged in"})
        }

        
 }) 


blogRouter.post("/",  async (c)=> {
    const body = await c.req.json()
    const success  = createblogInput.safeParse(body);
    if (!success) {
        c.status(411)
        return c.json({
            message: "Inputes not correct"
        })
    }
    const autherId = c.get("responseId")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

   const blog =  await prisma.blog.create({
        data:  {
            title: body.title,
            content: body.content,
            authorId: Number(autherId)
        }

    })

    return c.json({
        id: blog.id
    })
  })
  
blogRouter.put("/", async (c)=> {
    const body = await c.req.json();
    const success  = updateblogInput.safeParse(body);
    if (!success) {
        c.status(411)
        return c.json({
            message: "Inputes not correct"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());  
    
    const blog = await prisma.blog.update({
        where: {
            id: body.id,
        },
        data: {
            title: body.title,
            content: body.content
        }
    })

    return c.json({
        id:blog.id
    })
  })



  
blogRouter.get("/:id", async (c)=> {
    const id =  c.req.param("id")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

  try {
    const blog = await prisma.blog.findFirst({
        where: {
            id: Number(id)
        }, 
    })
    return c.json({
        blog
    })
     } catch (e) {
     c.status(411);
    return  c.json({
        message: "Error while fetching blog post"
      })
   }
 })

 blogRouter.post("/bulk", async (c) => {
    const prisma =  new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const blog = await prisma.blog.findMany();
        
    return c.json({
        blog
    })
    
})
  

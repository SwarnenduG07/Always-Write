
import { Blog } from "../hooks"
import { Appbar } from "./AppBar"
import { Avater } from "./BlogCard"

export const  FullBlog = ({blog}: {blog: Blog | any}) => {
    return <div>
        <Appbar/> 
            <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className=" col-span-8">
                    <div className="text-3xl font-extrabold">
                            {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Posted on 6.12.2023
                    </div>
                    <div className="">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                         <div  className="text-slate-600 text-lg">
                           Auther 
                      </div>
                        <div className="flex w-full">
                            <div className="pr-4 flex flex-col justify-center">
                            <Avater size="big" name={blog.author.name || "Steve Jobs"}/>
                            </div>  
                        <div>
                          </div>
                            <div className="text-xl font-bold">
                            {blog.author.name || "Steve Jobs"}
                            <div className="pt-2 text-slate-500">
                                Random catch phrese about the authers writing skills
                           </div>  
                     </div>
                                                   
                 </div>                 
             </div>        
        </div> 
    </div>
 </div>

}


         
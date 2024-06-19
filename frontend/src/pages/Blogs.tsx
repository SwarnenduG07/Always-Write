
import { Appbar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogsSkiliton } from "../components/Blogskalitons";
import { useBlog } from "../hooks"

export const Blogs = () => {
    const {loading, blogs} = useBlog();

    if (loading) {
        return <div>
            <Appbar/>
            <div className="flex justify-center">
                <div>
                <div><BlogsSkiliton/></div>
                     <BlogsSkiliton/> 
                     <BlogsSkiliton/>
                     <BlogsSkiliton/>
                     <BlogsSkiliton/>
                </div>
            </div>
        </div>
    }

    return <div>
             <div className="">
                <Appbar/>
            </div>
            <div className="flex justify-center">
               <div className="max-w-xl">
                  {blogs. map(blog => <BlogCard            
                         id = {blog.id}
                        authorName = {blog.author.name || "Stive Jobs"}
                        title = {blog.title}
                        content = {blog.content}
                        publishedDate = {"5/26/2024"}
                      />)}
                  </div>
             </div>
        </div>
 }
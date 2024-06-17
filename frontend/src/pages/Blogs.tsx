
import { Appbar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlog } from "../hooks"

export const Blogs = () => {
    const {loading, blogs} = useBlog();

    if (loading) {
        return <div>
            loading...
        </div>
    }

    return <div>
             <div>
                <Appbar/>
            </div>
            <div className="flex justify-center">
               <div className="max-w-xl">
                  {blogs. map(blog => <BlogCard
                        authorName = {blog.author.name || "Thala"}
                        title = {blog.title}
                        content = {blog.content}
                        publishedDate = {"5/26/2024"}
                      />)}
                  </div>
             </div>
        </div>
 }
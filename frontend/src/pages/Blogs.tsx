import App from "../App"
import { Appbar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {
    return <div>
           <div>
            <Appbar/>
            </div>
            <div className="flex justify-center">
             <div className="max-w-xl">
                 <BlogCard
                    authorName = {"swarnendu Ghosh"}
                    title = {"How an ugly single page website makes $5000 a month without afiliate marketing"}
                    content = {"How an ugly single page website makes $5000 a month without afiliate mrketing"}
                    publishedDate = {"5/26/2024"}
                  />
                  <BlogCard
                    authorName = {"swarnendu Ghosh"}
                    title = {"How an ugly single page website makes $5000 a month without afiliate marketing"}
                    content = {"How an ugly single page website makes $5000 a month without afiliate marketing"}
                    publishedDate = {"5/26/2024"}
                  />
                  <BlogCard
                    authorName = {"swarnendu Ghosh"}
                    title = {"How an ugly single page website makes $5000 a month without afiliate marketing"}
                    content = {"How an ugly single page website makes $5000 a month without afiliate marketing"}
                    publishedDate = {"5/26/2024"}
                  />
                  </div>
             </div>
        </div>
 }
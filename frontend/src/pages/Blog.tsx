
import { useParams } from "react-router-dom";
import { useBlogs } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { BlogsSkiliton } from "../components/Blogskalitons";
import { Appbar } from "../components/AppBar";
export const Blog = () => {
    const { id } = useParams();
    const {loading , blog} = useBlogs({
        id: id || ""
    });
    if (loading) {
        return <div>
            <Appbar />
            <div className="flex justify-center">
              <div>
                <BlogsSkiliton />
                <BlogsSkiliton />
                <BlogsSkiliton />
              </div>
            </div>
        </div>
    }
    return <div>
          <FullBlog blog={blog} />
    </div>
}
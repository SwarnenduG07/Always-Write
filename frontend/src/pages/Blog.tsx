
import { useParams } from "react-router-dom";
import { useBlogs } from "../hooks";
import { FullBlog } from "../components/FullBlog";
export const Blog = () => {
    const { id } = useParams();
    const {loading , blog} = useBlogs({
        id: id || ""
    });
    if (loading) {
        return <div>
            loading...
        </div>
    }
    return <div>
          <FullBlog blog={blog} />
    </div>
}
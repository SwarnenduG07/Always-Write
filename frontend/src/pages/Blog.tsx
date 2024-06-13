import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks";

export const Blog = () => {
    //@ts-ignore
    const {loading,blog} = useBlog();

    if (loading) {
        return <div>
                loading...
        </div>
    }
    return <div>
        <FullBlog></FullBlog>
    </div>
}
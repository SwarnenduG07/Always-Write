import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface Blog {
    content: string;
    title: string;
    id: string;
    author: {
        name: string;
    };
}
 export  const useBlogs = ({ id }:{id:string}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlogs] = useState<Blog>();
    const [error, setError] = useState(null);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    },
                    cancelToken: source.token
                });
                setBlogs(response.data.blog || []);
                setLoading(false);
            } catch (e) {
                if (axios.isCancel(e)) {
                    console.log('Request canceled', e.message);
                } else {
                    //@ts-ignore
                    setError(e);
                    setLoading(false);
                }
            }
        };

        fetchBlogs();

        return () => {
            source.cancel("Operation canceled by the user.");
        };
    }, [id]);

    return {
        loading,
        blog,
        error
    };
 
 }

export const useBlog = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    },
                    cancelToken: source.token
                });
                setBlogs(response.data.blog || []);
                setLoading(false);
            } catch (e) {
                if (axios.isCancel(e)) {
                    console.log('Request canceled', e.message);
                } else {
                    //@ts-ignore
                    setError(e);
                    setLoading(false);
                }
            }
        };

        fetchBlogs();

        return () => {
            source.cancel("Operation canceled by the user.");
        };
    }, []);

    return {
        loading,
        blogs,
        error
    };
};

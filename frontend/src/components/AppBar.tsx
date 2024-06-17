import { Link } from "react-router-dom"
import { Avater } from "./BlogCard"

 export const Appbar = () => {
    return <div className="border-b-2 flex justify-between px-10 py-1.5">
        <Link to={'/blogs'}>
            <div className="pl-10 m-3 cursor-pointer">
                Medium
            </div>
        </Link> 
        <div className="pt-1.5 pb-1.5">
        <Link to={'/publish'}>  
            <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">New post</button>
        </Link> 
                <Avater size={"big"} name="swarnendu" />
               
        </div>

    </div>
 }
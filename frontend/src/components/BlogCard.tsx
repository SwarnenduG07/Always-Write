import { Link } from "react-router-dom";

 interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number | string;
 }
 export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
 }: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
    <div className="bg-gray-100 pt-3 p-4 border-b border-slate-200 pb-3.5
    w-screen-md cursor-pointer">
               <div className="flex">
                <Avater name={authorName} size={"small"} />
                  
          
             <div className="font-extralight pl-2 text-sm flex justify-center flex-col">{authorName}
             </div>
             <div className="pl-2">
                 &#9679;
             </div>

             <div className="pl-2 font-thin text-slate-500 text-sm pt-0.5">
             {publishedDate}
             </div>

            </div>
            <div className="text-xl font-semibold pt-2">
                {title} 
            </div>
            <div className="thin-md font-thin">
                {content.slice(0,100) + "..."}
            </div>
            <div className="text-slate-400 text-sm font-thin pt-4">
                { `${Math.ceil(content.length / 100)} minutes`}
            </div>
            <div className="">
                 
            </div>

      </div> 
    </Link> 
 }

   export function Avater({name, size = "small"}: {name: string, size: "small" | "big"}) {
     return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
        <span className={`${size ==="small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}></span>
            {name[0]}
     </div>
   }
   
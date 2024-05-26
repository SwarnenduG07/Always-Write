 

 interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
 }
 export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
 }: BlogCardProps) => {
    return <div>
            <div>
                {authorName} . {publishedDate}
            </div>
            <div>
                {title} 
            </div>
            <div>
                {content.slice(0,100) + "..."}
            </div>
            <div>
                { `${Math.ceil(content.length / 100)} minutes`}
            </div>
            <div className="bg-slate-200 h-1 w-full">

            </div>

    </div>
 }
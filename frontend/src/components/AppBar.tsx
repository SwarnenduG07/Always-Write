import { Avater } from "./BlogCard"

 export const Appbar = () => {
    return <div className="border-b-2 flex justify-between px-10">
        <div className="pl-10 m-3">
            Medium
        </div>
        <div>
                <Avater size={"big"} name="swarnendu" />
        </div>

    </div>
 }
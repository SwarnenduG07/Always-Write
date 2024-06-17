import { Signin } from "../pages/Signin"
import { Avater } from "./BlogCard"

 export const Appbar = () => {
    return <div className="border-b-2 flex justify-between px-10 py-1.5">
        <div className="pl-10 m-3">
            Medium
        </div>
        <div className="pt-1.5 pb-1.5">
                <Avater size={"big"} name="swarnendu" />
               
        </div>

    </div>
 }
import { Signupinput } from "@swarnendug07/common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({type}: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<Signupinput>({ 
        name: "",
        email: "",
        username: "",
        password: "" ,         
    });

    async function sendRequest() {
       try {
        const responce =   await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
        const jwt = responce.data;
        localStorage.setItem("token", jwt);
        navigate("/blogs");
       } catch (e) {
         //Todo
       }
    }

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <div className="px-10">
                        <div className="text-2xl font-extrabold">
                            Create an account
                        </div>
                        <div className="text-slate-500">
                           {type === "signin" ? "Don't have a account" : "already have an account"}
                            <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin" }> 
                            {type === "signin" ? "Sign Up" : "sign in"} </Link>
                        </div>
                    </div>
                    <div>
                        {type === "signup" ? <LabelInput label="Name" placeholder="Full Name" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                name: e.target.value,
                            })
                        }} /> : null }
                        {type === "signup" ?  <LabelInput label="Email" placeholder="Email" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                email: e.target.value,
                            })
                        }} /> : null }
                        <LabelInput label="Username" placeholder="Enter Your username" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                username: e.target.value,
                            })
                        }} />
                        <LabelInput label="Password" type="password" placeholder="Enter Password" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                password: e.target.value,
                            })
                        }} />
                        <button onClick={sendRequest } type="button" className=" mt-4 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mx-0.5">
                            {type === "signup" ? "Sign Up" : "Sign In"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface LabelInputTypes {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelInput({ label, placeholder, onChange, type = "text" }: LabelInputTypes) {
    return (
        <div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
                <input onChange={onChange} type={type} className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-blue-600 dark:placeholder-gray-400 text-purple-600 font-semibold dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
            </div>
        </div>
    );
}

import Login from "@/source/modules/pages/Login/Login";
import { getLocalStorage } from "@/source/services/helpers/localStorage";
import { useState, useEffect } from "react";

export default function Index(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        setIsLoggedIn(getLocalStorage(process.env.NEXT_PUBLIC_DEFAULT_AUTH_TOKEN))
    }, [])
    return(
        <>
            <section className="min-h-screen ">
                <div className="">
                    <Login/>
                </div>
            </section>
        </>
    )
}
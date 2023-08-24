import Register from "@/source/modules/pages/Register/Register";
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
                    <Register/>
                </div>
            </section>
        </>
    )
}
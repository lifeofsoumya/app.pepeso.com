import { getLocalStorage } from "@/source/services/helpers/localStorage";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'

export default function Index(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter()
    useEffect(()=>{
        if(getLocalStorage(process.env.NEXT_PUBLIC_DEFAULT_AUTH_TOKEN)) router.push('/login')
    }, [])

    return(
        <>
            This is profile
        </>
    )

}
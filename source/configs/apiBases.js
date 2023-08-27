let apiBaseURL = (name) =>{
    return{
        auth: process.env.NEXT_PUBLIC_AUTH_URL,
        jsonData: process.env.NEXT_PUBLIC_JSONDATA_URL,
        packEnd: process.env.NEXT_PUBLIC_PACKEND_URL
    }[name]
}

export {apiBaseURL}
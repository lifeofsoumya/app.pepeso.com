import { useEffect, useState } from "react";

export default function isMobile(){
    const [mobCheck, setMobCheck] = useState("");
    useEffect(()=>{
        if(window?.innerWidth < 540) setMobCheck(true);
        else setMobCheck(false)
    }, [])
    return mobCheck;
} 
// const isMobileDevice = (req) => {
//     return Boolean((req
//         ? req.headers['user-agent']
//         : navigator.userAgent).match(
//             /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
//         ))
// };


// export default function isMobile(){
//     return typeof window !== 'undefined' && window.matchMedia('(max-width: 540px)').matches;
// }

// export default function isMobile(){
//     return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
// }
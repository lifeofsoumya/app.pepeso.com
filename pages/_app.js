import "../styles/globals.css";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import NProgress from 'nprogress';
import '../public/styles/nprogress.css';
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';
import Meta from "@/components/Meta";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
      NProgress.start();
    };
    const handleComplete = () => {
      setIsLoading(false);
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return(
    <>
    <NavBar/>
    <Meta path={router.pathname}/>
    <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-WYTYXQXVK6`} />
    <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-WYTYXQXVK6', {
                    page_path: window.location.pathname,
                    });
                `}
    </Script>
    <Toaster/>
    <Component {...pageProps} />
    {isLoading && <div className="nprogress-custom-parent"><div className="nprogress-custom-bar"/></div>}
    <Footer/>

    </>
  ) 
}
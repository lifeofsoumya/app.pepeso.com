import Head from 'next/head'
import metaConfig from '@/source/configs/metaConfig'

const Meta = ({path, image, title, keywords, description, url}) =>{
    const imgPath = image || `${process.env.NEXT_PUBLIC_BASE_URL}${metaConfig[path]}` || '';
    const ogTitle = title || process.env.NEXT_PUBLIC_SITE_NAME
    const keyWords = keywords || process.env.NEXT_PUBLIC_SITE_NAME
    const ogDesc = description || process.env.NEXT_PUBLIC_SITE_DESC
    const ogURL = url || process.env.NEXT_PUBLIC_BASE_URL

    return(
        <Head>
            <title>{`${title} | app.pepeso.com`}</title>
            <meta property="og:image" content={imgPath} key="image" />
            <meta property="og:title" content={ogTitle}/>
            <meta name="description" content={ogDesc} />
            <meta name="keywords" content = {keyWords} />
            <meta property="og:title" content={ogTitle} key="title" />
            <meta property="og:description" content={ogDesc} key="description" />
            <meta property="og:url" content={ogURL} key="url" />
            <meta name="twitter:title" content={ogTitle} />
            <meta name="twitter:description" content={ogDesc} />
            <meta name="twitter:image" content={imgPath} />
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="icon" href="/images/favicon.ico" />
        </Head>
    )
}

export default Meta;
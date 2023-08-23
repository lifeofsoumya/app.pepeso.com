import Head from 'next/head'
import metaConfig from '@/source/configs/metaConfig'

const Meta = ({path, image, title, keywords, description}) =>{
    const imgPath = image || metaConfig[path] || '';
    const ogTitle = title || process.env.NEXT_PUBLIC_SITE_NAME
    const keyWords = keywords || process.env.NEXT_PUBLIC_SITE_NAME
    const ogDesc = description || process.env.NEXT_PUBLIC_SITE_DESC

    return(
        <Head>
            <meta property="og:image" content={imgPath} />
            <meta property="og:title" content={ogTitle}/>
            <meta property="og:description" content={ogDesc}/>
            <meta name="keywords" content = {keyWords} />
        </Head>
    )
}

export default Meta;
import Head from 'next/head'
import { useMemo } from 'react'
import { OpenGraphProps } from "../type"

const PostMeta:React.VFC<{openGraph: OpenGraphProps, articleSection?: string[], date: string, modified: string }> = ({openGraph, articleSection, date, modified}) => {
	const imgSize = openGraph.opengraphImage?parserImageSize(openGraph.opengraphImage.sizes):{}
	const openGraphFix = useMemo(()=>{
		return openGraph
	},[])
	let schemas = JSON.parse(openGraph.schema.raw);

	schemas['@graph'] = schemas['@graph'].map((schema: any) => {
		if(schema["@type"] === "Organization"){
			delete schema.image;
			return schema;
		}

		if(schema["@type"] === "WebSite" || schema["@type"] === "WebPage"){
			delete schema.potentialAction;
			return schema;
		}

		if(schema["@type"] === "ImageObject" || schema["@type"] === "Person"){
			delete schema.contentUrl;
			return schema;
		}

		if(schema["@type"] === "Article" ){
			if(articleSection){
				schema.articleSection = articleSection
			}

			delete schema.potentialAction
			delete schema.commentCount
			delete schema.keywords
			delete schema.isPartOf
			delete schema.thumbnailUrl
		}

		return schema;
	})

	return (
	<Head>
		
		<title>{openGraphFix.title}</title>
		<meta name="pub_date" content={modified} />
		<meta name="description" content={openGraphFix.metaDesc} />
		<link rel="canonical" href={openGraphFix.canonical} />

		<meta property="article:publisher" content={openGraphFix.opengraphPublisher} />
		<meta property="article:author" content={openGraphFix.opengraphPublisher} />
		<meta property="article:published_time" content={date} />
		<meta property="article:modified_time" content={modified} />
		
		<meta property="og:site_name" content={openGraphFix.opengraphSiteName} />
		<meta property="og:type" content={openGraphFix.opengraphType} />
		<meta property="og:title" content={openGraphFix.opengraphTitle} />
		<meta property="og:description" content={openGraphFix.opengraphDescription} />
		<meta property="og:url" content={openGraphFix.opengraphUrl} />  
		{ openGraphFix.opengraphImage && (
			<>
			<meta property="og:image" content={openGraphFix.opengraphImage.sourceUrl.replace("https://healthykitchen101.com/wp-content/uploads/","https://cdn.healthykitchen101.com/uploads/")} />
			<meta property="og:image:width" content={imgSize.width} />
			<meta property="og:image:height" content={imgSize.height} />
			</>
		)}
		
		<link rel="icon" type="image/png" href="/favicon.ico" />
		<link rel="apple-touch-icon" href="/favicon.ico" />
		
		<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemas)}}></script>

	</Head>
	)
}

const parserImageSize = (vwSize: string) => {
	try{
		let size = vwSize.replace(/.*\s(\d{3,4})px.*\s(\d{3,4})px/g, '{"width":"$1", "height": "$2"}')
		return JSON.parse(size)
	} catch(e){
		console.log(e, vwSize)
		return {width: 0, height: 0}
	}
}

export default PostMeta
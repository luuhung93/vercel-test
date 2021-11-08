import Head from 'next/head'

const IndexMeta:React.VFC = () => {

	const hk101Org = {
		"@context":"https://schema.org",
		"@type":"Organization",
		"name": "Healthy Kitchen 101",
		"legalName": "Healthy Kitchen 101, LLC",
		"address":
			 {"@type": "PostalAddress",
			  "streetAddress" : "100 Pine Street, Suite 1250",
			  "addressLocality" : "San Francisco",
			  "addressRegion" : "CA",
			  "postalCode" : "94111"}, 
		"url":"https://healthykitchen101.com/",
		"founder": "Luna Regina",
		"image": "https://cdn.healthykitchen101.com/uploads/2019/08/healthykitchen101.jpg",
		"@id": "https://healthykitchen101.com/#organization",
		"description": "Recipes that can make healthy eating an easy and sustainable choice taste-wise, time-wise, and nutrition-wise. Because you deserve real foods.",
		"sameAs":["https://www.facebook.com/healthykitchen101/","https://www.instagram.com/_healthykitchen101/","https://www.linkedin.com/company/healthykitchen101/","http://pinterest.com/healthykitchen101","https://twitter.com/healthykitch101"]
	}

	return (
	<Head>
		
		<title>Healthy Kitchen 101 - The Heart of the Home Beats in the Kitchen</title>
		<meta name="description" content="Smart kitchen tips and tricks and well-researched buying guides and reviews for kitchen appliances to make life easier for the home cook." />
		<link rel="canonical" href="https://healthykitchen101.com/" />

		<meta property="og:locale" content="en_US" />
		<meta content="US" name="geo_locale" />
		<meta name="content-language" content="en" />

		<meta property="og:site_name" content="Healthy Kitchen 101" />
		<meta property="article:publisher" content="https://www.facebook.com/healthykitchen101/" />

		<meta property="og:type" content="website" />
		<meta property="og:title" content="Healthy Kitchen 101 - The Heart of the Home Beats in the Kitchen" />
		<meta property="og:description" content="Smart kitchen tips and tricks and well-researched buying guides and reviews for kitchen appliances to make life easier for the home cook." />
		<meta property="og:url" content="https://healthykitchen101.com/" />  
		<meta property="og:image" content="https://cdn.healthykitchen101.com/uploads/2019/08/healthykitchen101.jpg" />
		<meta property="og:image:width" content={"800"} />
		<meta property="og:image:height" content={"164"} />

		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:site" content="@healthykitch101" />
		
		<link rel="icon" type="image/x-icon" href="/favicon.ico" />
		<link rel="apple-touch-icon" href="/favicon.ico" />
		
		{/* <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemas)}}></script> */}
		<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(hk101Org)}}></script>
		<meta name="google-site-verification" content="ydBGg0ZurSAhjCxoPdPhBMDmvCHV6Yp_ypDuyTobuVI" />
		<meta name="msvalidate.01" content="B5D22B5C046FA36E3E0E877D0F7B7CE4" />
		<meta name="p:domain_verify" content="aae86b6ca1b897fb9125b30fba903971" />
	</Head>
	)
}

export default IndexMeta
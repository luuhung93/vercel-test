import { fetchAPI } from "../fetch";

export async function getAllPagePaths() {
    const data = await fetchAPI(
        `query { pages(where: {status: PUBLISH}, first: 100) { nodes { uri slug } } }`
    );
    return data?.pages?.nodes;
}
export async function getPage(slug: string) {
    const data = await fetchAPI(
        `query MyQuery($uri: String = "") { 
			pageBy(uri: $uri) {
				 blocks {
					name
					attributesJSON
					innerBlocks {
						name
						attributesJSON
						innerBlocks {
							name
							attributesJSON
							order
						}
						order
					}
					order
				}
				opengraph: seo {
					opengraphType
					opengraphUrl
					opengraphTitle
					opengraphAuthor
					opengraphSiteName
					opengraphDescription
					schema {
						raw
					}
					opengraphPublisher
					opengraphImage {
						sourceUrl(size: _2048X2048)
						sizes(size: _2048X2048)
					}
					canonical
					title
					metaDesc
				}
				dateGmt
				modifiedGmt
				excerpt
				featuredImage {
					node {
						altText
						sourceUrl
						srcSet
					}
				}
				pageId
				slug
				title
				uri
            } 
        }`,
        {
            variables: { uri: slug },
        }
    );
    return data?.pageBy;
}
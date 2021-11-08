import { fetchAPI } from '../fetch'

const PostFields = `fragment PostFields on Post {
	excerpt
	featuredImage {
		node {
			id
			sourceUrl
			altText
		}
	}
	postId
	title
	uri
	slug
	categories {
		nodes {
			slug
			uri
		}
	}
}`

export async function getAllBuyingGuidesPosts() {
	const data = await fetchAPI(
		`query { posts(first: 999, where: {categoryId: 14138, status: PUBLISH}) { nodes { uri } } }`
	);
	return data?.posts?.nodes;
}

export async function getAllReviewsPosts() {
	const data = await fetchAPI(
		`query { posts(first: 999, where: {categoryId: 6, status: PUBLISH}) { nodes { uri } } }`
	);
	return data?.posts?.nodes;
}

export async function getAllBlogPosts() {
	const data = await fetchAPI(
		`query { posts(first: 999, where: {categoryId: 14136, status: PUBLISH}) { nodes { uri } } }`
	);
	return data?.posts?.nodes;
}

export async function getDataPostByCategory(slug: string) {
	const data = await fetchAPI(
		`
		${PostFields}
		query MyQuery($id: ID = "water-filters") {
			category(id: $id, idType: SLUG) {
				categoryId
				description
				name
				slug
				uri
				
				latest: posts(
					where: {status: PUBLISH, orderby: {field: MODIFIED, order: DESC}}
					first: 20
				) {
					nodes {
						...PostFields
					}
					pageInfo {
						endCursor
						hasNextPage
						hasPreviousPage
						startCursor
					}
				}
				
			}
		}				 
		`,
		{
			variables: { id: slug },
		}
	);

	return { data: data } || {};
}

export async function getMorePostOfCategory(categoryName: string, after: string) {
	const data = await fetchAPI(
		`
		${PostFields}
		query MyQuery($categoryName: String, $after: String) {
			posts(
				where: {categoryName: $categoryName, status: PUBLISH, orderby: {field: MODIFIED, order: DESC}}
				first: 20
				after: $after
			) {
				nodes {
					...PostFields
				}
				pageInfo {
					endCursor
					hasNextPage
					hasPreviousPage
					startCursor
				}
			}
		}		
		`,
		{
			variables: { categoryName: categoryName, after: after },
		}
	);
	return data?.posts;
}
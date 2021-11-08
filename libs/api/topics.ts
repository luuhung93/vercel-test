import { fetchAPI } from '../fetch'

const TopicFields = `fragment TopicFields on Tag {
	description
	name
	slug
	tagId
	uri
}`

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

export async function getAllTopics() {
	const data = await fetchAPI(
		`query { tags(first: 999) { nodes { uri slug } } }`
	);
	return data?.tags.nodes;
}

//for /topics/[topic-name]

export async function getAllPostOfTopic(topic: string) {
	const data = await fetchAPI(
		`
${TopicFields}
${PostFields}
query MyQuery($id: ID = "water-filters") {
	tag(id: $id, idType: SLUG) {
		...TopicFields
		popular: posts(
			where: {onlySticky: true, status: PUBLISH, orderby: {field: MODIFIED, order: DESC}}
			first: 5
		) {
			nodes {
				...PostFields
			}
		}
		latest: posts(
			where: {status: PUBLISH, orderby: {field: MODIFIED, order: DESC}}
			first: 6
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
		tips: posts(
			where: {categoryName: "blog", status: PUBLISH, orderby: {field: MODIFIED, order: DESC}}
			first: 6
		) {
			nodes {
				...PostFields
			}
		}
	}

}`,
		{
			variables: { id: topic },
		}
	);
	
	return data;
}

export async function getMorePostsOfTopic(tag: string, after: string) {
	const data = await fetchAPI(
		`
		${PostFields}
		query MyQuery($tag: String, $after: String) {
			posts(
				where: {tag: $tag, status: PUBLISH, orderby: {field: MODIFIED, order: DESC}}
				first: 6
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
			variables: { tag: tag, after: after },
		}
	);
	return data?.posts;
}

export async function getPostsOnTopic() {
	const data = await fetchAPI(
		`
		${PostFields} 
		query MyQuery {
			tags(first: 999) {
			  nodes {
				name
				slug
				buyingGuides: posts(where: {categoryName: "buying-guides"}, first: 1) {
				  nodes {
					...PostFields
				  }
				}
				otherPosts: posts(where: {categoryNotIn: [14136]}, first: 6) {
				  nodes {
					...PostFields
				  }
				}
			  }
			}
		  }						  
		`
	);
	return data?.tags?.nodes || {};
}

export async function getMorePostsOfAllTopics($after: String) {
	const data = await fetchAPI(
		`
		${PostFields} 
		query Query($after: String) {
			latest: posts(
				where: {status: PUBLISH, orderby: {field: MODIFIED, order: DESC}}
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
			variables: { after: $after },
		}
	);
	return data || {};
}


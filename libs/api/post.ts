import { fetchAPI } from '../fetch'

const PostFields = `
fragment PostFields on Post {
	excerpt
	featuredImage {
		node {
			altText
			id
			sourceUrl
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
}
`;

export async function getPost(slug: string) {
	const data = await fetchAPI(
		`
		query MyQuery($id: ID!) {
			post(id: $id, idType: SLUG) {
				author {
					node {
						name
						uri
					}
				}
				tags {
					nodes {
						tagId
						name
						slug
					}
				}
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
				postId
				slug
				title
				uri
			}
		}		
		`,
		{ variables: { id: slug } }
	);
	return data?.post;
}

//for post in reviews category
// get more posts in same topic
export async function getRelatedPostsForPostInReviewCat(tagId: string, postId: [string]) {
	const data = await fetchAPI(
		`
		${PostFields} 
		query MyQuery($tagId: String, $postId: [ID]) {
			reviewsPosts: posts(
				where: {tagId: $tagId, notIn: $postId,  categoryName: "reviews", status: PUBLISH, orderby: {field: MODIFIED, order: DESC}}
				first: 6
			) {
				nodes {
					...PostFields
				}
			}
			buyingGuidesPosts: posts(
				where: {tagId: $tagId, notIn: $postId, categoryName: "buying-guides", status: PUBLISH, orderby: {field: MODIFIED, order: DESC}}
				first: 6
			) {
				nodes {
					...PostFields
				}
			}
		}		
		`,
		{ variables: { tagId: tagId, postId: postId } }
	);

	const reviewsPosts = data?.reviewsPosts?.nodes;
	const buyingGuidesPosts = data?.buyingGuidesPosts?.nodes;

	const posts = []
	let i = 0;
	while (posts.length < 6 && (reviewsPosts[i] || buyingGuidesPosts[i])) {
		reviewsPosts[i] && posts.push(reviewsPosts[i])
		buyingGuidesPosts[i] && posts.push(buyingGuidesPosts[i])

		i++
	}

	return posts.slice(0, 6)
}

// for post in blog category
// get more posts in same topic | posts in blog cat
export async function getRelatedPostsForPostInBlogCat(tagId?: string, postId?: [string]) {
	const data = await fetchAPI(
		tagId ?
			`${PostFields} 
		query MyQuery($tagId: String, $postId: [ID]) {
			blogPosts: posts(
				where: {tagId: $tagId, notIn: $postId, categoryName: "blog", status: PUBLISH, orderby: {field: MODIFIED, order: DESC}}
				first: 6
			) {
				nodes {
					...PostFields
				}
			}
			buyingGuidesPosts: posts(
				where: {tagId: $tagId, notIn: $postId, categoryName: "buying-guides", status: PUBLISH, orderby: {field: MODIFIED, order: DESC}}
				first: 6
			) {
				nodes {
					...PostFields
				}
			}
		}`:
			`${PostFields} 
		query MyQuery($postId: [ID]) {
			blogPosts: posts(
				where: {categoryName: "blog", tagId: "", notIn: $postId, status: PUBLISH, orderby: {field: MODIFIED, order: DESC}}
				first: 10
			) {
				nodes {
					...PostFields
				}
			}
		}`,
		{ variables: { tagId: tagId, postId: postId } }
	);

	if (tagId) {
		const blogPosts = data?.blogPosts?.nodes;
		const buyingGuidesPosts = data?.buyingGuidesPosts?.nodes;

		const posts = []
		let i = 0;
		while (posts.length < 6 && (blogPosts[i] || buyingGuidesPosts[i])) {
			blogPosts[i] && posts.push(blogPosts[i])
			buyingGuidesPosts[i] && posts.push(buyingGuidesPosts[i])

			i++
		}

		return posts.slice(0, 6)
	} else {
		return data?.blogPosts?.nodes;
	}
}

// for post in blog category
// get more posts in same topic | posts in blog cat
export async function getRelatedPostsForPostInBuyingGuidesCat(tagId: string, postId: [string]) {
	const data = await fetchAPI(
		`${PostFields} 
		query MyQuery($tagId: String, $postId: [ID]) {
			reviewsPosts: posts(
				where: {tagId: $tagId, notIn: $postId, categoryName: "reviews", status: PUBLISH, orderby: {field: MODIFIED, order: DESC}}
				first: 6
			) {
				nodes {
					...PostFields
				}
			}
			blogPosts: posts(
				where: {tagId: $tagId, notIn: $postId, categoryName: "blog", status: PUBLISH, orderby: {field: MODIFIED, order: DESC}}
				first: 6
			) {
				nodes {
					...PostFields
				}
			}
			buyingGuidesPosts: posts(
				where: {tagId: $tagId, notIn: $postId, categoryName: "buying-guides", status: PUBLISH, orderby: {field: MODIFIED, order: DESC}}
				first: 6
			) {
				nodes {
					...PostFields
				}
			}
		}`,
		{ variables: { tagId: tagId, postId: postId } }
	);

	const reviewsPosts = data?.reviewsPosts?.nodes;
	const blogPosts = data?.blogPosts?.nodes;
	const buyingGuidesPosts = data?.buyingGuidesPosts?.nodes;

	const posts = []
	let i = 0;
	while (posts.length < 10 && (reviewsPosts[i] || blogPosts[i] || buyingGuidesPosts[i])) {
		reviewsPosts[i] && posts.push(reviewsPosts[i])
		blogPosts[i] && posts.push(blogPosts[i])
		buyingGuidesPosts[i] && posts.push(buyingGuidesPosts[i])

		i++
	}

	return posts.slice(0, 10)
}

export async function getPostHome() {
	let popularIds = process.env.popularIds || [];
	let tagIds = process.env.tagIds || [];
	const data = await fetchAPI(
		`
		${PostFields} 
		query Query($popular: [ID], $tipId: Int, $waterFilters: String, $juicers: String, $kitchenKnives: String, $tags: [ID]) {
			popular: posts(
				first: 5
				where: {in: $popular, status: PUBLISH, orderby: {field: MODIFIED, order: DESC}}
			) {
				nodes {
					...PostFields
				}
			}
			tips: posts(
				first: 6
				where: {categoryId: $tipId, status: PUBLISH, orderby: {field: MODIFIED, order: DESC}}
			) {
				nodes {
					...PostFields
				}
			}
			waterFilters: posts(
				first: 6
				where: {tag: $waterFilters, status: PUBLISH, orderby: {field: MODIFIED, order: DESC}}
			) {
				nodes {
					...PostFields
				}
			}
			juicers: posts(
				first: 6
				where: {tag: $juicers, status: PUBLISH, orderby: {field: MODIFIED, order: DESC}}
			) {
				nodes {
					...PostFields
				}
			}
			kitchenKnives: posts(
				first: 12
				where: {tag: $kitchenKnives, status: PUBLISH, orderby: {field: MODIFIED, order: DESC}}
			) {
				nodes {
					...PostFields
				}
			}
			tags: tags(where: {include: $tags}) {
				nodes {
					tagId
					name
					slug
					uri
				}
			}
		}		
		`,
		{
			variables: {
				popular: popularIds,
				tipId: 14136,
				waterFilters: "water-filters",
				juicers: "juicers",
				kitchenKnives: "kitchen-knives",
				tags: tagIds
			},
		}
	);
	return data || {};
}

export async function getPostSearch(search: string) {
	const data = await fetchAPI(
		`${PostFields} 
		query MyQuery($search: String = "") { 
			posts(where: {search: $search}, first: 20) { nodes { ...PostFields } } 
		}`,
		{ variables: { search: search } }
	);
	return data?.posts?.nodes || [];
}

//posts for author page - and api/author load more.
export async function getPostByEditorGuide(slug: string, after: string = "") {
	let editorGuideID = -1;
	switch (slug) {
		case "kori":
			editorGuideID = 719;
			break;
		case "tyler":
			editorGuideID = 721;
			break;
		case "donna":
			editorGuideID = 723;
			break;
	}
	const data = await fetchAPI(`
${PostFields}
query MyQuery($editorGuide: Int = -1, $after: String = "") {
	posts(first: 20, where: {editorGuide: $editorGuide}, after: $after) {
		nodes {
			...PostFields
		}
			pageInfo {
			endCursor
			hasNextPage
		}
	}
}
		`,
		{
			variables: { editorGuide: editorGuideID, after: after },
		}
	);

	return data?.posts;
}
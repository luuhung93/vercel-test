import { GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link"
import ErrorPage from "next/error"
import { useRouter } from "next/router"
import React from "react"
import PostMeta from "../../components/meta/postMeta"
import { ContentFunc } from "../../components/content"
import Header from "../../components/header"
import Footer from '../../components/footer';
import TableOfContents from '../../components/tableOfContents';
import RelatedPosts from '../../components/relatedPosts';
import { BreadcrumbPros, PostProps } from "../../components/type"
import { AuthorBox, Breadcrumb, SearchBox } from "../../components/widget"
import { getPost, getRelatedPostsForPostInBuyingGuidesCat } from "../../libs/api/post"
import { getAllBuyingGuidesPosts } from "../../libs/api/categories"


const Single: React.VFC<{ post: PostProps, posts: PostProps[] }> = ({ post, posts }) => {
	const router = useRouter();

	if (!router.isFallback && !post?.slug) return <ErrorPage statusCode={404} />

	const breadcrumbs: BreadcrumbPros[] = [
		{
			title: 'Home',
			url: '/'
		},
		post?.tags?.nodes[0] ?
		{
			title: post?.tags?.nodes[0]?.name,
			url: '/topics/' + post?.tags?.nodes[0]?.slug
		} :
		{
			title: "Buying Guides",
			url: '/buying-guides/'
		}
	]

	let articleSection = post?.tags?.nodes[0] ? [post?.tags?.nodes[0]?.name, "Buying Guides"] : ["Buying Guides"]

	const externalLinkRel = { rel: "nofollow" };
	const date = new Date(post.modifiedGmt).toLocaleDateString("en-US", {year: 'numeric', month: 'short', day: 'numeric' });

	return (
		<>
			<Header />
			<main className="text-base antialiased text-gray-700">
				{router.isFallback ? (
					<div>Loading... </div>
				) : (
					<div className="mt-6 sm:mt-5 md:mt-8 mx-auto max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-5xl grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-7 lg:rid-flow-col-dense lg:px-6">
						<article className="px-2 sm:px-0 lg:col-start-1 lg:col-span-5">
							<PostMeta openGraph={post.opengraph} articleSection={articleSection} date={post?.dateGmt} modified={post?.modifiedGmt} />
							<Breadcrumb breadcrumbs={breadcrumbs} />
							<header className="mt-5 mb-7">
								<h1 className="text-2xl font-semibold mb-4"
									dangerouslySetInnerHTML={{ __html: post?.title }}></h1>
								<div className="text-gray-500 text-sm font-medium">
									{"By "}
									<Link href={post.author.node.uri}>
										<a className="text-cyan-700">{post?.author.node.name}</a>
									</Link>
									{" | Updated "}
									<time>{date}</time>
								</div>
							</header>
							<div className="text-gray-500 text-sm leading-6 border-l-2 border-dashed border-gray-400 pl-4 mb-4">
								Our recommendations are made independently through research and testing
								following our{" "}
								<Link href="/product-review-procedures/">
									<a {...externalLinkRel} className="!text-cyan-700" target="_blank">review procedure</a>
								</Link>. We may receive commissions from purchases made via our links at no additional costs to you.
							</div>
							<ContentFunc blocks={post.blocks} />
							<AuthorBox />
						</article>
						<aside className="px-2 sm:px-6 lg:px-0 lg:block lg:col-start-6 lg:col-span-2 lg:mt-6">
							<SearchBox style="block" />
							<div className="fixed -inset-x-0 top-0 lg:sticky">
								<TableOfContents />
							</div>
						</aside>
						<div className="lg:row-start-2 lg:col-span-7 mb-8">
							<RelatedPosts posts={posts} />
						</div>
					</div>
				)}
			</main>
			<Footer />
		</>
	);
};

export default Single;

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getAllBuyingGuidesPosts();
	return {
		paths: posts.map((e: { slug: string }) => '/buying-guides/' + e.slug) || [],
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	let slug: string = params?.slug ?
		(typeof params?.slug === 'string' ? params?.slug : params?.slug[0]) :
		"";
	const post = await getPost(slug);

	const tagId: string = post?.tags?.nodes[0]?.tagId;
	const posts: PostProps[] = tagId ? await getRelatedPostsForPostInBuyingGuidesCat(String(post?.tags?.nodes[0]?.tagId), [String(post?.postId)]) : [];

	return {
		props: { post: post, posts: posts },
		revalidate: 86400, // In seconds
	};
};

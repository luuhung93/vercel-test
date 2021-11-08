import { GetStaticProps } from "next";
import ErrorPage from "next/error";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { TopicPost } from "../../components/post";
import { BreadcrumbPros, PostProps, TagProps } from "../../components/type";
import { AsFeaturedOn, Breadcrumb, OurTeam, SearchBox, Title } from "../../components/widget";
import { getPostsOnTopic } from "../../libs/api/topics";

type Props = TagProps & { posts: PostProps[] }

const Topic: React.FC<{ topics: Props[] }> = ({ topics }) => {
	const router = useRouter();
	if (!router.isFallback && !topics.length)
		return <ErrorPage statusCode={404} />;

	const breadcrumbs: BreadcrumbPros[] = [
		{ title: 'Home', url: '/' },
		{ title: 'Topics', url: '/topics/' },
	]
	return (
		<>
			<Header />
			<main className="text-base antialiased text-gray-700">
				{router.isFallback ? (
					"Loading…"
				) : (
					<>
						<SearchBox />
						<section className="mx-auto px-2 sm:px-0 lg:px-6 max-w-xl md:max-w-2xl lg:max-w-5xl mt-6 sm:mt-5 md:mt-8">
							<Breadcrumb breadcrumbs={breadcrumbs} />
						</section>

						<div className="bg-gray-50 sm:bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4 sm:gap-6 lg:gap-y-10 lg:gap-x-8 mx-auto px-2 sm:px-0 lg:px-6 max-w-xl md:max-w-2xl lg:max-w-5xl pt-4 sm:pt-0 mt-4 sm:mt-5 md:mt-8">
							{topics.map((topic) => (
								<section key={topic.tagId}>
									{topic?.posts.length > 0 && (
										<>
											{topic?.slug && (<h3 className="border-l-[3px] border-cyan-700 pl-3 font-semibold mb-4 group">
												<Link href={`/topics/${topic.slug}/`}><a className=" group-hover:text-teal-700 text-gray-600">{topic.name}</a></Link>
											</h3>)}
											<TopicPost posts={topic?.posts} />
										</>
									)}
								</section>
							))}
						</div>
					</>
				)}
				<OurTeam />
				<AsFeaturedOn />
			</main>
			<Footer />
		</>
	);
};
export default Topic;

export const getStaticProps: GetStaticProps = async () => {
	const data = await getPostsOnTopic();

	let topics = data?.map((topic: TagProps & { buyingGuides: { nodes: PostProps[] }; otherPosts: { nodes: PostProps[] }; }) => {
		return { name: topic.name, slug: topic.slug, posts: [...topic.buyingGuides?.nodes, ...topic.otherPosts?.nodes].slice(0, 5) }
	}).sort((a: { posts: PostProps[] }, b: { posts: PostProps[] }) => (a.posts.length < b.posts.length) ? 1 : ((b.posts.length < a.posts.length) ? -1 : 0))

	return {
		props: { topics: topics },
		revalidate: 86400, // In seconds
	};
};

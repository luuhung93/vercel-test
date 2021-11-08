import { GetStaticPaths, GetStaticProps } from "next";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Movable, PostFrames, PostFramesFloat } from "../../components/post";
import { BreadcrumbPros, PageInfoProps, PostProps, TagProps } from "../../components/type";
import { AsFeaturedOn, Breadcrumb, OurTeam, SearchBox, Title } from "../../components/widget";
import { getAllTopics, getAllPostOfTopic } from "../../libs/api/topics";
type Props = {
	topic: TagProps
	latest: PostFramesProps
	popular: PostProps[]
	tips: PostProps[]
};

type PostFramesProps = {
	nodes: PostProps[]
	pageInfo: PageInfoProps
}

const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ');

const Topic: React.FC<Props> = ({ topic, latest, popular, tips }) => {
	const [loading, setLoading] = useState<boolean>(false)
	const [latestData, setLatestData] = useState<PostFramesProps>(latest)
	const router = useRouter();

	if (!router.isFallback && !topic.slug)
		return <ErrorPage statusCode={404} />;

	const showMore = async () => {
		setLoading(true);
		let response = await fetch(
			`/api/topics/${topic.slug}/${latestData?.pageInfo.endCursor}`
		);

		if (response.status !== 200) {
			setLatestData({
				nodes: latestData.nodes,
				pageInfo: { ...latestData.pageInfo, ...{ hasNextPage: false } }
			})
		}

		const newData = await response.json();

		setLatestData({
			nodes: [...latestData.nodes, ...newData.nodes],
			pageInfo: newData.pageInfo
		})
		setLoading(false);
	};
	const breadcrumbs: BreadcrumbPros[] = [
		{ title: 'Home', url: '/' },
		{ title: topic.name, url: '/topics/' + topic.slug },
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
						{/* Category */}
						{topic.name && (
							<section className="relative mt-5 overflow-hidden bg-teal-700/10">
								<div className="mx-auto px-2 sm:px-0 lg:px-6 max-w-xl md:max-w-2xl lg:max-w-5xl py-7">
									<h1 className="w-full text-3xl font-bold mb-6"> {topic.name}</h1>
									<div className="text-sm leading-6 text-gray-700 mb-6 inline-flex gap-y-4 flex-col md:max-w-2xl"
										dangerouslySetInnerHTML={{ __html: topic?.description }}
									>
									</div>
								</div>
							</section>
						)}

						{/* Popular review*/}
						{popular?.length > 0 && (
							<section className="mx-auto px-2 sm:px-0 lg:px-6 max-w-xl md:max-w-2xl lg:max-w-5xl mt-6 sm:mt-5 md:mt-8">
								<Title name={`Popular Posts`} svg="popular" />
								<PostFrames posts={popular} />
							</section>
						)}
						{/*Tips */}
						{tips?.length >= 3 && (
							<section className="mx-auto px-2 sm:px-0 lg:px-6 max-w-xl md:max-w-2xl lg:max-w-5xl mt-6 sm:mt-5 md:mt-8">
								<Title name={`Tips for ${topic.name}`} svg="tips" />
								<Movable posts={tips} />
							</section>
						)}
						{/* Latest post */}
						{latestData.nodes?.length > 0 && (
							<section className="mx-auto px-2 sm:px-0 lg:px-6 max-w-xl md:max-w-2xl lg:max-w-5xl mt-6 sm:mt-5 md:mt-8">
								<Title name="Latest Posts" svg="latest" />
								<PostFramesFloat posts={latestData.nodes} />
								{latestData.pageInfo?.hasNextPage && (
									<button
										onClick={() => showMore()}
										type="button"
										className={classNames(
											'inline-flex justify-center items-center gap-x-2 px-4 py-2 shadow-sm text-sm font-medium rounded-sm text-white bg-teal-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-teal-700/50 my-4 w-full',
											loading ? "pointer-events-none" : ''
										)}
									>
										{loading && (<svg className="block animate-spin h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <circle className="opacity-5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle> <path className="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" ></path> </svg>)}
										Show More
									</button>
								)}
							</section>
						)}
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

export const getStaticPaths: GetStaticPaths = async () => {
	const topics = await getAllTopics();

	return {
		paths: topics.map((e: { slug: string }) => "/topics/" + e.slug + "/") || [],
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	let slug: string = params?.slug ?
		(typeof params?.slug === 'string' ? params?.slug : params?.slug[0]) :
		"";

	const data = await getAllPostOfTopic(slug);

	const popular = data?.tag?.popular?.nodes
	const latest = data?.tag?.latest
	const tips = data?.tag?.tips?.nodes

	delete data?.tag?.latest
	delete data?.tag?.popular
	delete data?.tag?.tips

	return {
		props: { topic: data?.tag, popular, latest, tips},
		revalidate: 86400, // In seconds
	};
};

import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import ErrorPage from "next/error"
import { useRouter } from "next/router"
import React from "react"
import PostMeta from "../components/meta/postMeta"
import { ContentFunc } from "../components/content"
import Footer from "../components/footer"
import Header from "../components/header"
import { PostProps } from "../components/type"
import { getAllPagePaths, getPage } from "../libs/api/page"
import { AsFeaturedOn, OurTeam } from "../components/widget"

import dynamic from 'next/dynamic'
const TableOfContents = dynamic(
	() => import('../components/tableOfContents'),
	{ ssr: false }
)

const Single: React.VFC<{ page: PostProps }> = ({ page }) => {
	const router = useRouter();
	if (!router.isFallback && !page?.slug) {
		return <ErrorPage statusCode={404} />
	}
	return (
		<>
			<Header />
			<main className="text-base antialiased text-gray-700">
				{router.isFallback ? (
					<div>Loading...</div>
				) : (
					<>
						<header className="mb-7 pt-6 bg-cyan-700/30 border-b-4 border-cyan-700">
							<div className=" mx-auto px-2 sm:px-10 lg:px-0 max-w-xl md:max-w-2xl lg:max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
								<div className="hidden sm:block sm:row-start-2 sm:col-end-2 lg:row-start-1  lg:self-end relative">
									<Image src="/images/svg/page-1.svg" layout="responsive" height={180} width={415} alt="Healthy Kitchen 101 Page" />
								</div>
								<div className="text-center sm:row-start-1 sm:col-span-2 sm:max-w-[450px] sm:justify-self-center lg:col-start-2 lg:col-span-1 lg:mb-4">
									<h1 className="text-3xl font-semibold mb-4 text-white"
										dangerouslySetInnerHTML={{ __html: page?.title }}></h1>
									<span className="text-gray-800" dangerouslySetInnerHTML={{ __html: page?.excerpt }}></span>
								</div>
								<div className="sm:row-start-2 sm:col-start-2 lg:row-start-1 lg:col-start-3 lg:self-end relative">
									<Image src="/images/svg/page-2.svg" layout="responsive" height={180} width={415} alt="Healthy Kitchen 101 Page" />
								</div>
							</div>
						</header>
						<div className="mb-5 mx-auto max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-5xl grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-7 lg:rid-flow-col-dense lg:px-6">
							<article className="px-2 sm:px-0 lg:col-start-1 lg:col-span-5">
								<PostMeta openGraph={page.opengraph} date={page?.dateGmt} modified={page?.modifiedGmt} />
								<ContentFunc blocks={page.blocks} />
							</article>
							<aside className="px-2 sm:px-6 lg:px-0 lg:block lg:col-start-6 lg:col-span-2 lg:mt-6">
								<div className="fixed -inset-x-0 top-0 lg:sticky">
									<TableOfContents />
								</div>
							</aside>
							{/* <div className="lg:row-start-2 lg:col-span-7 mb-5">
							</div> */}
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

export default Single;

export const getStaticPaths: GetStaticPaths = async () => {
	let pages = await getAllPagePaths();
	pages = pages.filter((e: { uri: string }) => e.uri != "/");
	return {
		paths: pages.map((e: { uri: string }) => e.uri) || [],
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const page = await getPage(String(params?.slug));
	return {
		props: { page: page },
		revalidate: 86400, // In seconds
	};
};

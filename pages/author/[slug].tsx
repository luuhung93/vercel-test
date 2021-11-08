import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image"
import { useRouter } from "next/router";
import React, { useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { PostFramesFloat } from "../../components/post";
import { PageInfoProps, PostProps } from "../../components/type";
import { AsFeaturedOn, OurTeam, Users } from "../../components/widget";
import { getPostByEditorGuide } from "../../libs/api/post";
type Props = {
	posts: {
		nodes: PostProps[];
		pageInfo: PageInfoProps;
	}
	editorGuide: string;
};

const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ');

const Author: React.FC<Props> = ({ posts, editorGuide }) => {
	const [loading, setLoading] = useState<boolean>(false)
	const [latestData, setLatestData] = useState<{ nodes: PostProps[]; pageInfo: PageInfoProps; }>(posts)

	const showMore = async () => {
		setLoading(true);
		let response = await fetch(
			`/api/author/${editorGuide}/${latestData?.pageInfo.endCursor}`
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

	const user = Users.find(user => user.uri.indexOf(editorGuide) !== -1);

	return (
		<>
			<Head>
			<title>{user?.name} | Healthy Kitchen 101</title>
			<meta name="robots" content="noindex, follow" />
			<meta name="description" content={user?.description} />
			<meta property="twitter:title" content={user?.name}/>
			</Head>

			<Header />


			<main className="text-base antialiased text-gray-700">
				{user && (
					<section className="mx-auto px-2 sm:px-0 lg:px-6 max-w-xl md:max-w-2xl lg:max-w-3xl mt-6 sm:mt-5 md:mt-8 flex flex-col items-center">
						<div className="flex items-center flex-col">
							<Image alt="{author.name}" width={165} height={165}
								className="rounded-full object-center object-cover"
								src={user.avatar.url}
							/>
							<div className='inline-flex gap-5 mt-3 h-5'>
								{Object.keys(user.seo.social).map((key) =>
									user.seo.social[key] && (
										<a key={key} href={user.seo.social[key]} rel="nofollow noopener noreferrer">
											<Image src={`/images/svg/socials/${key.toLocaleLowerCase()}-teal.svg`} width={20} height={20} alt={key} />
											<span className="sr-only">{`${user.name} ${key}`}</span>
										</a>
									)
								)}
							</div>
						</div>
						<div className="text-center mt-5">
							<div className="text-3xl font-semibold capitalize">{user.name}</div>
							<p className="text-sm text-gray-600 mt-2  "> {user.description}</p>
						</div>
					</section>
				)}

				{/* Latest post */}
				{latestData.nodes?.length > 0 && (
					<section className="mx-auto px-2 sm:px-0 lg:px-6 max-w-xl md:max-w-2xl lg:max-w-5xl mt-6 sm:mt-5 md:mt-8">
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
				<OurTeam />
				<AsFeaturedOn />
			</main>
			<Footer />
		</>
	);
};
export default Author;

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: ["/author/luna/", "/author/kori/", "/author/tyler/", "/author/donna/"],
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	let slug: string = params?.slug ?
		(typeof params?.slug === 'string' ? params?.slug : params?.slug[0]) :
		"";
	const data = await getPostByEditorGuide(slug);
	return {
		props: { posts: data, editorGuide: slug },
		revalidate: 86400, // In seconds
	};
};

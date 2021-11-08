import { GetServerSideProps } from 'next'
import { BreadcrumbPros, PostProps } from '../components/type';
import Header from "../components/header";
import Footer from "../components/footer";
import ErrorPage from "next/error"
import { PostFramesFloat } from "../components/post"
import React from 'react';
import { getPostSearch } from '../libs/api/post';
import { AsFeaturedOn, Breadcrumb, OurTeam, SearchBox } from '../components/widget';
import Head from 'next/head';

const Search: React.VFC<{ posts: [PostProps]; search: string }> = ({ posts, search }) => {
	const breadcrumbs: BreadcrumbPros[] = [
		{ title: 'Home', url: '/' },
		{ title: `Search for "${search}"`, url: '' },
	]

	if(
		search.toLowerCase().indexOf('❤️️') !== -1 ||
		search.toLowerCase().indexOf('dating') !== -1 ||
		search.toLowerCase().indexOf('viagra') !== -1 ||
		search.toLowerCase().indexOf('www.') !== -1	
	){
		return <ErrorPage statusCode={403} />
	}

	
	return (<>
		<Head>
			<title>Search for ${search} | Healthy Kitchen 101</title>
			<meta name="robots" content="noindex, nofollow" />
		</Head>
		<Header />
		<main className="text-base antialiased text-gray-700 sm:bg-white">
			<SearchBox />
			<section className="mx-auto px-2 sm:px-0 lg:px-6 max-w-xl md:max-w-2xl lg:max-w-5xl mt-6 sm:mt-5 md:mt-8">
				<Breadcrumb breadcrumbs={breadcrumbs} />
			</section>
			
			{posts && (
				<section className="mx-auto px-2 sm:px-0 lg:px-6 max-w-xl md:max-w-2xl lg:max-w-5xl mt-6 sm:mt-5 md:mt-8">
					<PostFramesFloat posts={posts} />
				</section>
			)}
			<OurTeam />
			<AsFeaturedOn />
		</main>
		<Footer />
	</>)
}

export default Search

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	if (!query?.s) return { notFound: true }
	const data = await getPostSearch(String(query?.s));
	return {
		props: { posts: data, search: String(query?.s) }
	}
}
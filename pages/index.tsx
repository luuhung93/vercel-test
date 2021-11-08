import type { GetStaticProps } from "next";
import React from "react";
import Header from "../components/header";
import { PostFramesFloat, Movable, PostFrames } from "../components/post";
import { AsFeaturedOn, BrowseAll, OurTeam, SearchBox, Title } from "../components/widget";
import { Topics } from "../components/topic";
import { PostProps, TagProps } from "../components/type";
import Footer from "../components/footer";
import { getPostHome } from "../libs/api/post";
import IndexMeta from "../components/meta/indexMeta";
type Props = {
	popular: PostProps[];
	tips: PostProps[];
	waterFilters: PostProps[];
	juicers: PostProps[];
	kitchenKnives: PostProps[];
	tags: TagProps[];
};
const Home: React.FC<Props> = (props) => {

	return (
		<>
			<Header />
			<IndexMeta />
			<main className="text-base antialiased text-gray-700 sm:bg-white">
				<SearchBox />
				{/* Popular review*/}
				{props.popular?.length > 0 && (
					<section className="mx-auto px-2 sm:px-0 lg:px-6 max-w-xl md:max-w-2xl lg:max-w-5xl mt-6 sm:mt-5 md:mt-8">
						<Title name="Popular Reviews" svg="popular" />
						<PostFrames posts={props.popular} />
					</section>
				)}
				{/* Latest tip */}
				{props.tips?.length > 0 && (
					<section className="mx-auto px-2 sm:px-0 lg:px-6 max-w-xl md:max-w-2xl lg:max-w-5xl mt-6 sm:mt-5 md:mt-8">
						<Title name="Latest Tips" svg="latest" />
						<PostFramesFloat posts={props.tips} />
					</section>
				)}
				{/* Water Filters */}
				{props.waterFilters?.length > 0 && (
					<section className="mx-auto px-2 sm:px-0 lg:px-6 max-w-xl md:max-w-2xl lg:max-w-5xl mt-6 sm:mt-5 md:mt-8">
						<Title
							name="Water Filters"
							svg="water-filters"
							href="/topics/water-filters/"
						/>
						<PostFramesFloat posts={props.waterFilters} />
						<BrowseAll href="/topics/water-filters/" />
					</section>
				)}

				{/* Categories */}
				{props.tags?.length > 0 && (
					<section className="mx-auto px-2 sm:px-0 lg:px-6 max-w-xl md:max-w-2xl lg:max-w-5xl mt-6 sm:mt-5 md:mt-8">
						<Title className="px-2 sm:px-0" name="Categories" svg="categories" />
						<Topics topics={props.tags} />
					</section>
				)}

				{/* Juicers */}
				{props.juicers?.length > 0 && (
					<section className="mx-auto px-2 sm:px-0 lg:px-6 max-w-xl md:max-w-2xl lg:max-w-5xl mt-6 sm:mt-5 md:mt-8">
						<Title name="Juicers" svg="juicers" href="/topics/juicers/" />
						<PostFramesFloat posts={props.juicers} />
						<BrowseAll href="/topics/juicers/" />
					</section>
				)}

				{/* Kitchen Knives */}
				{props.kitchenKnives?.length > 0 && (
					<section className="bg-white mx-auto px-2 sm:px-0 lg:px-6 max-w-xl md:max-w-2xl lg:max-w-5xl mt-6 sm:mt-5 md:mt-8">
						<Title
							name="Kitchen Knives"
							svg="kitchen-knives"
							href="/topics/kitchen-knives/"
						/>
						<Movable posts={props.kitchenKnives} />
						<BrowseAll href="/topics/kitchen-knives/" />
					</section>
				)}

				<OurTeam />
				<AsFeaturedOn />
			</main>
			<Footer />
		</>
	);
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const data = await getPostHome();
	return {
		props: {
			popular: data?.popular?.nodes,
			tips: data?.tips?.nodes,
			waterFilters: data?.waterFilters?.nodes,
			juicers: data?.juicers?.nodes,
			kitchenKnives: data?.kitchenKnives?.nodes,
			tags: data?.tags?.nodes,
		},
		revalidate: 86400, // In seconds
	};
};

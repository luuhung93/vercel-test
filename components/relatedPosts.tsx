import React from "react"
import Link from "next/link";
import { FeaturedImage, PostProps } from "./type";
import { Title } from "./widget";
import Image from "next/image";


const RelatedPosts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
	return posts && (
		<section className="px-2 max-w-xl mx-auto pt-2 sm:pt-4 sm:border-none md:max-w-2xl lg:max-w-5xl">
			<Title name={"Latest Posts"} svg="latest" />
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
				{posts.map((post) => {
					return (
						<article key={post.postId} aria-label={post.title}
							className="group bg-white rounded shadow sm:shadow-lg overflow-hidden ring-1 ring-gray-100"
						>
							<Link href={post.categories.nodes[0].uri + post.slug}>
								<a className="flex">
									<div className="w-1/3 sm:w-1/4 lg:w-2/5 border-r-[1px] h-full flex-shrink-0 mr-2 lg:mr-4">
										{post.featuredImage && (<CoverImage img={post.featuredImage.node} />)}
									</div>
									<div className="flex-1 m-1 sm:mx-2 ">
										<span className="block sm:mb-3 md:my-3 align-top text-medium lg:text-lg font-semibold group-hover:text-teal-700 ">
											{post.title.split(": ")[0]?.split("– ")[0]?.split("— ")[0].split("- ")[0]}
										</span>
										<div
											className="text-sm font-medium text-gray-500 line-clamp-3"
											dangerouslySetInnerHTML={{ __html: post.excerpt.split(" ").slice(0, 25).join(" ") }}
										></div>
									</div>
								</a>
							</Link>
						</article>
					)
				})}
			</div>
		</section>
	);
};

type CoverImageProps = {
	img: FeaturedImage | any;
	width?: number;
	height?: number;
	className?: string;
}

const CoverImage: React.VFC<CoverImageProps> = ({ img, width = 350, height = 350, className = "object-center object-cover" }) => (
	<Image
		className={className}
		width={width}
		height={height}
		layout="responsive"
		alt={img?.altText}
		src={img.sourceUrl
			.replace("localhost:8000/wp-content", "cdn.healthykitchen101.com")
			.replace("healthykitchen101.com/wp-content", "cdn.healthykitchen101.com")}
	/>
);

export default RelatedPosts;
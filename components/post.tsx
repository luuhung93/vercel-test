import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { FeaturedImage, PostProps } from "./type";

const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ');

export const PostFrames: React.VFC<{ posts: PostProps[] }> = ({ posts }) => {
	return (
		<div className="grid grid-cols-1 gap-4 sm:pb-4 sm:grid-cols-2 md:grid-cols-2 lg:gap-x-6 lg:gap-y-6 sm:last-child:hidden">
			{posts.map((post, i: number) => {
				return (
					<article key={post.postId} aria-label={post?.title}
						className={classNames('group flex bg-white rounded shadow-lg overflow-hidden ring-1 ring-gray-100 lg:ring-0 lg:shadow-none sm:last:hidden lg:last:block', i === 0 ? 'lg:row-start-1 lg:row-end-5' : 'lg:col-start-2')}
					>
						<Link href={post.categories.nodes[0].uri + post.slug} prefetch={false}>
							<a className={i === 0 ? "" : "lg:flex lg:gap-x-2"}>
								{post.featuredImage && (
									<div className={classNames('w-full p-2 overflow-hidden', i !== 0 ? 'lg:w-[27%] flex-shrink-0' : '')} >
										<CoverImage img={post?.featuredImage.node} className="rounded" />
									</div>
								)}
								<div className={i === 0 ? "m-4 mt-2" : "flex-1 m-4 mt-2"}>
									<h2 className={classNames('mb-2 sm:mb-4 text-xl sm:text-lg lg:text-xl font-semibold group-hover:text-teal-700 lg:mb-3', i !== 0 ? 'lg:mt-0' : '')}>
										{post.title.split(": ")[0]?.split("– ")[0]?.split("— ")[0].split("- ")[0]}
									</h2>
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
	);
};
export const PostFramesFloat: React.VFC<{ posts: PostProps[] }> = ({ posts }) => {
	return (
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
			{posts.map((post) => {
				return (
					<article key={post.postId} aria-label={post.title}
						className="group bg-white rounded shadow sm:shadow-lg overflow-hidden ring-1 ring-gray-100"
					>
						<Link href={post.categories.nodes[0].uri + post.slug} prefetch={false}>
							<a className="flex">
								<div className="w-1/3 sm:w-1/4 lg:w-2/5 border-r-[1px] h-full flex-shrink-0 mr-2 lg:mr-4">
									{post.featuredImage && (<CoverImage img={post.featuredImage.node} />)}
								</div>
								<div className="flex-1 m-1 sm:mx-2 ">
									<h3 className="mb-1 sm:mb-3 md:my-3 align-top text-medium lg:text-lg font-semibold group-hover:text-teal-700 ">
										{post.title.split(": ")[0]?.split("– ")[0]?.split("— ")[0].split("- ")[0]}
									</h3>
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
	);
};
export const Movable: React.FC<{ posts: PostProps[] | any }> = ({ posts }) => {
	if (!posts.length) return <></>;

	return (
		<div className="flex gap-x-4 lg:gap-x-8 overflow-auto">
			{posts.map((post: PostProps) => 
				
					<article key={post.postId} className="flex-shrink-0 ml-1 max-w-[80%] sm:max-w-[40%] lg:max-w-[28%] group py-2 sm:px-0" aria-label={post?.title}>
						<Link href={post.categories.nodes[0].uri + post.slug}>
							<a title={post.title}>
								{post.featuredImage && (
									<div className="rounded shadow ring-[1px] ring-gray-100 overflow-hidden">
									<CoverImage img={post?.featuredImage.node} />
									</div>
								)}
								<h3 className="my-3 text-lg font-semibold group-hover:text-teal-700">
									{post.title.split(": ")[0]?.split("– ")[0]?.split("— ")[0].split("- ")[0]}
								</h3>
								<div className="text-sm font-medium text-gray-500 line-clamp-3"
									dangerouslySetInnerHTML={{
										__html:
											post.excerpt.split(" ").slice(0, 25).join(" "),
									}}
								></div>
							</a>
						</Link>
					</article>
				
			)}
		</div>
	);
};

export const TopicPost: React.VFC<{ posts: PostProps[] }> = ({ posts }) => {
	return (
		<div className="bg-white rounded ring-1 ring-gray-100 shadow-md overflow-hidden">
			{posts.map((post, i: number) => (
				<article key={post.postId + i} aria-label={post?.title}
					className={classNames('group border-b-[1px] border-gray-100 last:border-none', i === 0 ? "" : "mx-2")}
				>
					<Link href={post.categories.nodes[0].uri + post.slug}>
						<a className={classNames('group flex', i === 0 ? "flex-col" : "flex-row items-center py-2")}>
							{post.featuredImage && (
								<div className={classNames('w-full overflow-hidden', i === 0 ? '' : "max-w-[20%]")} >
									<CoverImage img={post?.featuredImage.node} className={i === 0 ? "rounded-t-md" : "rounded-md"} />
								</div>
							)}
							<div className={i === 0 ? "p-2" : "px-2"}>
								<h2 className={classNames('group-hover:text-teal-700', i === 0 ? 'text-lg font-semibold line-clamp-1' : "text-sm font-medium line-clamp-2")}>
									{post.title.split(": ")[0]?.split("– ")[0]?.split("— ")[0].split("- ")[0]}
								</h2>
								<div className={i === 0 ? "text-sm font-medium text-gray-500 line-clamp-3 mt-1" : "hidden"}
									dangerouslySetInnerHTML={{ __html: post.excerpt.split(" ").slice(0, 25).join(" ") }}
								></div>
							</div>
						</a>
					</Link>
				</article>
			))}
		</div>
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

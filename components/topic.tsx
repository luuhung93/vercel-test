import Link from "next/link";
import React from "react";
import { TagProps } from "./type";
import Image from "next/image"
export const Topics: React.VFC<{ topics: TagProps[] }> = ({ topics }) => {

	return (
		<div className="grid bg-white p-4 grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 lg:gap-8">
			{topics.map((topic) => (
				<Link key={topic.tagId} href={`/topics/${topic.slug}`}>
					<a className="flex flex-col items-center content-center py-4 shadow-sm ring-1 ring-gray-200 rounded-xl sm:last:hidden md:first:hidden lg:!flex">
						<Image src={`/images/svg/topics/${topic.slug}.svg`} height={48} width={48} alt={topic.name} />
						<div className="mt-3 text-sm text-gray-900 font-semibold sm:mt-2">
							{topic.name}
						</div>
					</a>
				</Link>
			))}
		</div>
	);
};

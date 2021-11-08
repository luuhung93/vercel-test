import React, { createElement } from "react";

import Link from "next/link";
import Image from "next/image";

import { ContentBlockProps } from "../components/type";

const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ')

export const ContentFunc: React.VFC<{ blocks: ContentBlockProps[] }> = ({ blocks }) => {
	return (
		<div key="content_block" className="text-base leading-6 prose prose-lg">
			{blocks.map(block => genBlock(block))}
		</div>
	);
};

const genBlock: any = (block: ContentBlockProps, pOrder?: string) => {
	let key = pOrder ? `${pOrder}-${block.order}` : `${block.order}`
	switch (block.name) {
		case 'core/paragraph':
			try {
				let attributesJSON = JSON.parse(block.attributesJSON)

				if(attributesJSON?.content === "[toc]") return null;

				//nofollow exernal link
				attributesJSON.content = externalLink(attributesJSON?.content);


				return <p key={block.order} dangerouslySetInnerHTML={{ __html: attributesJSON?.content }}></p>
			} catch (e) {
				console.log(e, block)
				return null
			}
		case 'core/heading':
			try {
				let attributesJSON = JSON.parse(block.attributesJSON)
				
				return createElement(`h${attributesJSON?.level}`, { 
					key: block.order, 
					id: attributesJSON?.anchor || Slugify(attributesJSON?.content), 
					dangerouslySetInnerHTML: { __html: externalLink(attributesJSON?.content) } 
				});
			} catch (e) {
				console.log(e, block)
				return null
			}
		case 'core/image':
			try {
				let attributesJSON = JSON.parse(block.attributesJSON);
				let imageSize = JSON.parse(attributesJSON?.url.replace(/.*\-(\d{2,3})x(\d{2,3})\..*/g, '{"width":\$1, "height": \$2}'))
				let imgSrc = attributesJSON?.url.replace("-" + imageSize.width + "x" + imageSize.height, "").replace("https://healthykitchen101.com/wp-content/uploads/", "https://cdn.healthykitchen101.com/uploads/")

				return (
					<figure key={key}
						className={classNames(
							`rounded shadow ring-[1px] ring-gray-200 overflow-hidden max-w-full !h-auto`,
							attributesJSON?.align &&
							(
								attributesJSON?.align === "left" ?
									"sm:float-left sm:!my-0 sm:mr-4" :
									attributesJSON?.align === "right" ?
										"sm:float-right sm:!my-0 sm:ml-4" :
										"sm:float-none sm:!mx-auto"
							)
						)}
						style={
							attributesJSON?.align ?
								{ width: imageSize.width, height: imageSize.height } :
								{}
						}
					>
						{attributesJSON?.href ?
							(<Link key={"link-" + key} href={attributesJSON?.href} >
								<a target="_blank" rel="noopener noreferrer nofollow" >
									<Image key={"img-" + key} src={imgSrc} alt={attributesJSON?.alt} width={imageSize?.width} height={imageSize?.height} layout="responsive" objectFit="cover" />
								</a>
							</Link>) :
							(<Image key={"img-" + key} src={imgSrc} alt={attributesJSON?.alt} width={imageSize?.width} height={imageSize?.height} layout="responsive" objectFit="cover"/>)
						}
					</figure>
				)
			} catch (e) {
				console.log(e, block)
				return null
			}
		case 'core/list':
			try {
				let attributesJSON = JSON.parse(block.attributesJSON);
				return createElement(attributesJSON?.ordered ? 'ol' : 'ul', { key: key, dangerouslySetInnerHTML: { __html: attributesJSON?.values } });
			} catch (e) {
				console.log(e, block)
				return null
			}
		case 'core/shortcode':
			return parserShortcode(block);

		case 'core/buttons':
			return block.innerBlocks?.map(block => {
				return genBlock(block)
			})
		case 'core/button':
			try {
				let attributesJSON = JSON.parse(block.attributesJSON);
				return attributesJSON?.url ? 
				<Link href={attributesJSON?.url}>
					<a rel="noopener noreferrer nofollow" target="_blank"
						className="w-full inline-flex justify-center rounded-md border border-transparent shadow px-4 py-2 bg-red-600 font-medium !text-white !no-underline hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
					>
						{attributesJSON?.text.replace(/<meta charset=\"utf-8\">/g, "")}
					</a>
				</Link>:
					null;

			} catch (e) {
				console.log(e, block)
				return null
			}
		case 'core/html':
			try {
				return parserShortcode(block) || null;
				// let attributesJSON = JSON.parse(block.attributesJSON)
				// return <div key={block.order} dangerouslySetInnerHTML={{__html: attributesJSON?.content}}></div>
			} catch (e) {
				console.log(e, block)
				return null
			}
		case 'core/quote':
			try {
				let attributesJSON = JSON.parse(block.attributesJSON);
				return showBox(block.order, attributesJSON?.value);
			} catch (e) {
				console.log(e, block)
				return null
			}
		case 'core/table':
			try {
				let attributesJSON = JSON.parse(block.attributesJSON);

				return <div key={key} className="bg-gray-50 ring-[1px] ring-gray-200 rounded -mx-2 md:mx-0 overflow-x-auto">
					<table className="table-auto !my-2" >
						{attributesJSON?.head?.length > 0 && (<thead key={"th-" + key}>
							{attributesJSON?.head?.map((record: { cells: [] }, idx: number) => {
								return <tr key={"th-tr-" + idx + key}>
									{record?.cells.map((cell: { content: string }, sidx: number) => (
										<th className="!px-2" key={"th-tr-" + idx + sidx + key} dangerouslySetInnerHTML={{ __html: cell.content }}></th>
									))}
								</tr>
							})}
						</thead>)}
						<tbody key={"tb-" + key}>
							{attributesJSON?.body?.map((record: { cells: [] }, idx: number) => {
								return <tr key={"tb-tr-" + idx + key}>
									{record?.cells.map((cell: { content: string }, sidx: number) => (
										<td className="!px-2" key={"tb-tr-" + idx + sidx + key} dangerouslySetInnerHTML={{ __html: cell.content }}></td>
									))}
								</tr>
							})}
						</tbody>
					</table>
				</div>
			} catch (e) {
				console.log(e, block)
				return null
			}
		case 'core/column':
			return block.innerBlocks.length > 1 ?
				(<div key={key}>
					{block.innerBlocks.map(sBlock => {
						return genBlock(sBlock, key)
					})}
				</div>) :
				block.innerBlocks.map(sBlock => {
					return genBlock(sBlock, key)
				})

		case 'core/columns':
			return <div key={key} className={classNames(
				"grid md:gap-x-4 grid-cols-1 md:grid-cols-2 items-start",
				block.innerBlocks.length === 2 ? 'md:grid-cols-2' :
					block.innerBlocks.length === 3 ? 'md:grid-cols-3' :
						'md:grid-cols-4'
			)}>
				{block.innerBlocks.map(sBlock => {
					return genBlock(sBlock, pOrder ? `${pOrder}-${block.order}` : `${block.order}`)
				})}
			</div>

		case 'yoast/faq-block':
			let attributesJSON = JSON.parse(block.attributesJSON);


			return (
				<div key={key} className="text-sm gap-4 md:columns-2 lg:columns-3">
					{attributesJSON?.questions.map((record: { id: string, jsonQuestion: string, jsonAnswer: string }) => {
						return <div key={record.id} className="bg-gray-50 p-6 rounded-md mt-4 break-inside-avoid-column ring-[1px] ring-gray-100 shadow">
							<h3 key={'q' + record.id} className="!text-base !text-gray-900 !m-0 !mb-2" dangerouslySetInnerHTML={{ __html: record.jsonQuestion }}></h3>
							<div key={'a' + record.id} className="prose prose-sm leading-5" dangerouslySetInnerHTML={{ __html: record.jsonAnswer }}>
							</div>
						</div>

					})}
				</div>
			)

		default:
			console.log(block)
			return null

	}
}

const Slugify = (str: string = "") => {
	return str
		.replace(/^\d+\.?\s?/g, "")
		.replace(/(<([^>]+)>)/gi, "")
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/[^\w-]+/g, '')
};

const externalLink = (blockContent: string) => {
	return blockContent.replace(
		/<a[^>]*?href="([^"]*?)"[^>]*>(.*?)<\/a>/g, 
		(match: string, contents: string, offset: string) => {
			//for internal link begin with "/" except begin with "//"
			if(contents.indexOf("/") === 0 ){
				if(contents.indexOf("//") === -1){
					return match;
				}
			}

			//for internal link
			if(contents.indexOf("://healthykitchen101.com") !== -1 ){
				return match;
			}
			
			return '<a href="'+contents+'" rel="nofollow noopener noreferrer" target="_blank">'+offset+'</a>'
		}
	)
}

const parserShortcode = (block: ContentBlockProps) => {
	try {
		let attributesJSON = JSON.parse(block.attributesJSON);

		let content = attributesJSON?.text || attributesJSON?.content || ""

		if (!hasShortCode(content)) return null;

		if (content === "[toc]") return null;
		if (content.indexOf("[table") === 0) return null;

		let shortcode = content.replace(/\[([^\]]*)\](.*?)\[.*\]/gs, (match: string, offset: string, string: string) => {
			return JSON.stringify({ name: offset, content: string })
		})

		shortcode = JSON.parse(shortcode?.replace(/\n/g, "\\n"))

		//replace special charactor
		shortcode.content = shortcode?.content.replace(/\&gt;|\&amp;/g, ">");


		if (shortcode?.name.indexOf("title") !== -1) {
			let boxTitle = shortcode?.name.split("=")[1]?.replace(/\"/g, "").trim()
			shortcode.name = shortcode?.name.split("title")[0]?.trim()

			shortcode.content = "<strong class='font-semibold'>" + boxTitle + ".</strong> " + shortcode.content;
		}

		switch (shortcode?.name) {
			case 'hk101_box_pros':
				return <ul key={block.order} className="md:!mt-0 before:block before:content-['Pros'] before:bg-sky-300/70  before:text-sky-800 before:px-4 before:py-2 before:rounded-t before:font-medium rounded shadow pb-1 ring-[1px] ring-sky-700">
					{shortcode?.content.split("\n")?.map(
						(item: string) => item &&
							<li className="!pl-11 !pr-2 before:!bg-sky-300/60 before:!h-5 before:!w-5 before:!top-0 before:!left-4 before:!bg-pros before:!bg-center before:bg-no-repeat">
								<p className="!m-0 text-sm">{item}</p>
							</li>
					)}
				</ul>

			case 'hk101_box_cons':
				return <ul key={block.order} className="!mb-0 before:block before:content-['Cons'] before:bg-red-300/70  before:text-red-800 before:px-4 before:py-2 before:rounded-t before:font-medium rounded shadow pb-1 ring-[1px] ring-red-700">
					{shortcode?.content.split("\n")?.map(
						(item: string) => item &&
							<li className="!pl-11 !pr-2 before:!bg-red-300/70 before:!h-5 before:!w-5 before:!top-0 before:!left-4 before:!bg-cons before:!bg-center before:bg-no-repeat">
								<p className="!m-0 text-sm">{item}</p>
							</li>

					)}
				</ul>

			case 'related_box':
			case 'hk101_box_note':
				// return <div className="bg-sky-50 text-gray-700 border-[1px] border-sky-300 rounded shadow px-6 py-4" dangerouslySetInnerHTML={{__html: shortcode?.content}}></div>
				return showBox(block.order, shortcode?.content)


			default:
				console.log(shortcode)
				return null
		}

	} catch (e) {
		console.log(e, block)
		return null
	}
}

const hasShortCode = (content: string) => {
	const typeShortCode = [
		"toc",
		"table",
		"hk101_box_pros",
		"related_box",
		"hk101_box_note",
		"hk101_box_cons",
	];

	return typeShortCode.find(shortcode => content?.indexOf(`[${shortcode}`) !== -1);
}

const showBox = (key: number, content: string) => {
	return (<div key={key} className="-mx-2 relative text-base max-w-prose md:mt-5 lg:max-w-none overflow-hidden">
		<svg className="absolute top-0 -left-24 md:-left-10 lg:left-auto lg:-right-3 z-[-1]" fill="none" viewBox="0 0 400 100" aria-hidden="true" width={400} height={100} >
			<defs>
				<pattern id="bedc54bc-7371-44a2-a2bc-dc68d819ae60" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse" >
					<rect x={0} y={0} width={4} height={4} className="text-gray-100" fill="currentColor" />
				</pattern>
			</defs>
			<rect width={404} height={384} fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
		</svg>
		<blockquote className="ml-4 mr-4 !mt-4 lg:ml-2 lg:mr-8 lg:!mt-7 relative bg-white rounded-lg ring-1 ring-gray-200">
			<div className="rounded-t-lg px-4 py-4 sm:px-6 sm:py-4">
				<div className="relative text-gray-700 !font-normal">
					<svg className="absolute top-1 -left-1 transform -translate-x-6 -translate-y-2 h-6 w-6 text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true" >
						<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
					</svg>
					<div key={key+"_box_content"} className="relative !text-[15px]"
						dangerouslySetInnerHTML={{ __html: content }}></div>
				</div>
			</div>
		</blockquote>
	</div>)
}
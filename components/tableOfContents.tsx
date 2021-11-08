// import { Disclosure } from "@headlessui/react";
import { BookmarkIcon } from "@heroicons/react/outline";
import React, { useEffect, useState, useRef } from "react"

type NestedHeadingPros = {
	id: string
	title: string
	pid?: string
	items?: NestedHeadingPros[]
}
const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ');

const TableOfContents = () => {
	const [activeHeading, setActiveHeading] = useState<Element | undefined>();
	const { nestedHeadings } = useHeadingsData();
	const [open, setOpen] = useState<boolean>(false);

	useIntersectionObserver(setActiveHeading)

	let lastHeading = nestedHeadings[nestedHeadings.length-1]?.items?.slice(-1)[0] || nestedHeadings[nestedHeadings.length-1]
	
	const hideTOCMobile =  activeHeading === undefined || activeHeading?.id === nestedHeadings[0]?.id || activeHeading?.id === lastHeading?.id

	return (
	<>
		<div className="hidden lg:block">
			<h5 className="text-gray-900 uppercase tracking-wide font-semibold mb-3 text-sm lg:text-xs">Table of Content</h5>
			<nav className="" aria-label="Table of contents">
				<Headings headings={nestedHeadings} active={activeHeading!} />
			</nav>
		</div>


		<div className={classNames("lg:hidden", hideTOCMobile ? 'hidden' : '')}>
			<div onClick={() => setOpen(!open)} className="text-white w-full sm:px-6 shadow-lg">
				<div className="h-10 px-2 flex items-center space-x-2 bg-teal-700">
				<BookmarkIcon className="w-5 h-5 flex-none" />
				<div className="line-clamp-1 tracking-wide font-semibold text-sm lg:text-xs">
					{open ? "Table of Content" : activeHeading?.textContent}
				</div>
				</div>
				{open && (
				<div className="text-gray-700 bg-white py-3 pl-5 pr-2 sm:pl-9 lg:pr-4 w-full text-sm">
					<nav className="" aria-label="Table of contents">
						<Headings headings={nestedHeadings} active={activeHeading!} />
					</nav>
				</div>
				)}
			</div>
		</div>
	</>
	);
};

const Headings: React.VFC<{ headings: NestedHeadingPros[], active: Element }> = ({ headings, active }) => {

	const activeId = active?.id || '';
	const pActiveId = active?.nodeName === "H3" ? headings.find(heading => heading.items?.find(child => child.id === activeId))?.id : ""

	return (
		<ul className="lg:text-sm overflow-x-hidden text-gray-500">

			{headings.map((heading: NestedHeadingPros) => {
				return (heading.items?[heading, ...heading.items]:[heading]).map((headingItem: NestedHeadingPros, index)=> {

					return (<li key={headingItem.id} className={classNames(
						index > 0 ? "ml-4":"",
						index === 0 || (heading.id === activeId || heading.id === pActiveId) ? "block" : "hidden"
					)}>
						<a className={classNames(
								"block py-2 transition-colors duration-200 hover:text-gray-900 ",
								headingItem.id === activeId ? "text-gray-900":""
							)} 
							href={`#${headingItem.id}`} title={headingItem.title}>{headingItem.title}</a>
					</li>)
					
				})
			})}
		</ul>
	)
}

interface LooseObject {
	[key: string]: IntersectionObserverEntry
}

const useIntersectionObserver = (setActiveHeading: React.Dispatch<React.SetStateAction<Element | undefined>>) => {
	const headingElementsRef = useRef<LooseObject>({})
	useEffect(() => {

		const callback = (headings: IntersectionObserverEntry[]) => {
			headingElementsRef.current = headings.reduce((map: LooseObject, headingElement) => {
				map[headingElement.target.id] = headingElement;
				return map;
			}, headingElementsRef.current);

			let visibleHeadings: Element[] = [];
			
			Object.keys(headingElementsRef.current).forEach((key) => {
				headingElementsRef.current[key]?.isIntersecting && visibleHeadings.push(headingElementsRef.current[key].target);
			});

			if(visibleHeadings.length === 0){
				return;
			} 

			const getIndexFromId = (id: string) =>
				headingElements.findIndex((heading) => heading.id === id);

			if (visibleHeadings.length > 1) {
				visibleHeadings = visibleHeadings.sort(
					(a, b) => getIndexFromId(a.id) > getIndexFromId(b.id) ? 1 : 0
				);
			}
			
			setActiveHeading(visibleHeadings[0]);
		};

		const observer = new IntersectionObserver(callback, {
			rootMargin: "0px 0px -40% 0px"
		});

		const headingElements = Array.from(document.querySelectorAll(".prose h2, .prose h3"));

		headingElements.forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	}, [setActiveHeading]);
};

const useHeadingsData = () => {
	const [nestedHeadings, setNestedHeadings] = useState<NestedHeadingPros[]>([]);

	useEffect(() => {
		const newNestedHeadings: NestedHeadingPros[] = [];

		const headingElements: HTMLHeadingElement[] = Array.from(
			document.querySelectorAll(".prose h2, .prose h3")
		);

		headingElements?.forEach((heading) => {
			const { innerText, id } = heading;
			let title = innerText.split(":")[0]?.split(" –")[0]?.split(" —")[0].split(" -")[0]?.replace(/\d{1,2}\.\s/g, "");

			if (heading.nodeName === "H2") {
				newNestedHeadings.push({ id, title, items: [] });
			} else if (heading.nodeName === "H3" && newNestedHeadings.length > 0) {
				newNestedHeadings[newNestedHeadings.length - 1].items?.push({
					id,
					title,
					pid: newNestedHeadings[newNestedHeadings.length - 1].id
				});
			}
		});;

		setNestedHeadings(newNestedHeadings);
	}, []);

	return { nestedHeadings };
};

export default TableOfContents;
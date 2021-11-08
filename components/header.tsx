import React, { Fragment, useRef, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { GeneralSettingsProps } from "./type";
import { useRouter } from "next/router";
import { ChevronDownIcon, MenuIcon, SearchIcon, XIcon } from "@heroicons/react/solid";

const website: GeneralSettingsProps = {
  title: "Healthy Kitchen 101",
  description: "The Heart of The Home Beats in The Kitchen",
  url: "/"
}
const menus = [
	{ title: "Home", url: "/" },
	{
		title: "Topics",
		url: "/topics/",
		childItems: [
			{ title: "Juicers", url: "/topics/juicers" },
			{ title: "Water Filters", url: "/topics/water-filters" },
			{ title: "Kitchen Faucets", url: "/topics/kitchen-faucets" },
			{ title: "Garbage Disposals", url: "/topics/garbage-disposals" },
			{ title: "Blenders", url: "/topics/blenders" },
			{ title: "Food Processors", url: "/topics/food-processors" },
			{ title: "Toaster Ovens", url: "/topics/toaster-ovens" },
			{ title: "Kitchen Knives", url: "/topics/kitchen-knives" },
			{ title: "Grills", url: "/topics/grills" }
		]
	},
	{ title: "How To", url: "/blog/" },
	{ title: "About", url: "/about/" }
]
const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ');
const Header: React.VFC = () => {
  const router = useRouter();

  return (
	<header className="text-base antialiased">
		<Popover as="nav" className="relative bg-white shadow-sm">
			<div className="flex items-center justify-between p-2 sm:py-3 sm:px-0 lg:px-6 max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto">
				<Popover.Button className="p-1 rounded text-teal-700 bg-sky-100 hover:text-white hover:bg-teal-700 md:hidden">
					<span className="sr-only">Open menu</span>
					<MenuIcon className="h-6 w-6" aria-hidden="true" />
				</Popover.Button>

				<Link href={website.url}>
					<a className="block bg-logo bg-contain bg-center bg-no-repeat w-52 h-10 md:w-[300px] md:h-[59px]" title={website.title}>
					<span className="sr-only">{website.title}</span>
					</a>
				</Link>
				<p className="sr-only">{website.description}</p>

				<Search />
				
				<DesktopMenu pathname={router.pathname} />
			</div>
			<MobileMenu />
		</Popover>
	</header>
  );
};

const DesktopMenu: React.FC<{ pathname: string }> = ({ pathname }) => {
  return (
    <Popover.Group as="nav" className="hidden space-x-10 md:flex md:items-center">
      {menus.map((menu, index) =>
        menu?.childItems ? (
          <Popover className="relative" key={index}>
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames("leading-10 inline-flex items-center font-medium hover:text-teal-700 text-gray-900", open ? "focus:text-teal-700" : "")}>
                  <span>{menu.title}</span>
                  <ChevronDownIcon aria-hidden="true"
                    className={classNames("ml-1 h-5 w-5 text-teal-700", open ? 'transform rotate-180' : '')}
                  />
                </Popover.Button>

                <Transition as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1" >
                  <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 w-screen max-w-[200px]">
                    <div className="bg-white rounded shadow-md ring-[1px] ring-gray-100 overflow-hidden">
                      {menu.childItems.map((child, index) => (
                        <Link key={index} href={child.url}>
                          <a className="block text-base font-medium text-gray-600 px-6 py-3 hover:text-teal-700 hover:border-l-4 hover:border-teal-700  hover:pl-5">
                            {child.title}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        ) : (
          <Link key={index} href={menu.url}>
            <a className={classNames("leading-10 font-medium hover:text-teal-700", pathname == menu.url ? "text-yellow-500" : "")}>
              {menu.title}
            </a>
          </Link>
        )
      )}
    </Popover.Group>
  )
}

const Search: React.FC = () => {
	const router = useRouter();
	let searchInput = useRef<HTMLInputElement>(null);
	let [isOpen, setIsOpen] = useState(false);


	const handleSearchHeader = () => {
		if(!searchInput?.current?.value) return;

		router.push({ pathname: '/search', query: { s: searchInput?.current?.value } })
		setIsOpen(false)
	}

	const handleKeyDownHeader = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			handleSearchHeader()
		}
	}

	return (
	<>
		<button type="button" onClick={() => setIsOpen(true)} className="group p-1 bg-sky-100 rounded hover:bg-teal-700 md:hidden">
			<span className="sr-only">Open main search</span>
			<SearchIcon className="h-6 w-6 text-teal-700 group-hover:text-white" aria-hidden="true" />
		</button>
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" initialFocus={searchInput} className="fixed inset-0 z-10 overflow-y-auto" onClose={() => setIsOpen(false)} >
			<div className="min-h-screen px-4 text-center ">
				<Dialog.Overlay className="fixed inset-0 bg-gray-900 opacity-50" />
				<Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95" >
				<div className="inline-block w-full max-w-md p-5 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl ring-[1px] ring-gray-100 rounded">
					<div className="relative mt-2">
						<input ref={searchInput} type="text" aria-label="Search..." placeholder="Search..."
						className="focus:outline-none w-full text-sm placeholder-gray-500 border border-teal-700 rounded-md py-2 pl-2 pr-10 focus:ring-teal-500 focus:border-teal-500"
						onKeyDown={handleKeyDownHeader}
						/>
						<button type="submit" onClick={handleSearchHeader}>
						<SearchIcon aria-hidden="true"
							className="pointer-events-auto h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-700"
						/>
						</button>
					</div>
				</div>
				</Transition.Child>
			</div>
			</Dialog>
		</Transition>
	</>
	)
}

const MobileMenu: React.VFC = () => {
	const router = useRouter();

	return (<Transition as={Fragment} enter="duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
		<Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
		{({ close }) => (
			<div className="rounded-lg shadow-lg ring-1 ring-teal-700/50 bg-white divide-y-2 divide-gray-50">
				<div className="pt-5 pb-6 px-5">
					<div className="flex items-center justify-between flex-row-reverse">
						<Popover.Button className="p-1 rounded text-teal-700 bg-sky-100 hover:text-white hover:bg-teal-700">
							<span className="sr-only">Close menu</span>
							<XIcon className="h-6 w-6" aria-hidden="true" />
						</Popover.Button>
						<Link href={website.url}>
							<a title={website.title} className="block bg-logo bg-contain bg-center bg-no-repeat w-52 h-10">
							<span className="sr-only">{website.title}</span>
							</a>
						</Link>
					</div>
					<div className="mt-6">
					<div className="grid grid-cols-2 gap-4">
						{menus.map((menu, index) => (
						<Link key={index} href={menu.url}>
							<a onClick={() => close()} className={classNames("font-medium hover:text-teal-700", router.pathname == menu.url ? "text-yellow-500" : "")}>
							{menu.title}
							</a>
						</Link>
						))}
					</div>
					</div>
				</div>
				<div className="py-6 px-5">
					<div className="grid grid-cols-2 gap-4">
					{menus.map((menu) => (
						menu.childItems && (
						menu.childItems.map((child, index) => (
							<Link key={index} href={child.url}>
							<a onClick={() => close()} className="text-base font-medium text-gray-600 hover:text-teal-700">
								{child.title}
							</a>
							</Link>
						))
						)
					))}
					</div>
				</div>
			</div>
		)}
		</Popover.Panel>
	</Transition>)
}

export default Header;

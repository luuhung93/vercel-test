import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ')
const socials = [
	{ title: "facebook", url: "https://www.facebook.com/healthykitchen101/" },
	{ title: "linkedIn", url: "https://www.linkedin.com/company/healthykitchen101/" },
	{ title: "pinterest", url: "http://pinterest.com/healthykitchen101/" },
	{ title: "twitter", url: "https://twitter.com/healthykitch101/" }
]
const menus = [
	{ title: "Home", url: "/" },
	{ title: "About", url: "/about/" },
	{ title: "Contact", url: "/contact/" },
	{ title: "Review Process", url: "/product-review-procedures/" },
	{ title: "Affiliate Disclosures", url: "/disclaimers-disclosures/" },
	{ title: "Privacy Policy", url: "/privacy-policy/" },
	{ title: "California Privacy Notice", url: "/ca-privacy-notice/" },
]

const Footer: React.VFC = () => {
	const router = useRouter();
	const externalLinkRel = { rel: "nofollow noopener noreferrer" };

	return (
		<footer className="pt-4 bg-cyan-700 text-white text-sm sm:pt-8">
			<div className="grid gap-5 grid-cols-1 md:grid-cols-2 p-2 sm:py-3 sm:px-0 lg:px-6 max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto">
				<div className="pb-5 border-b-[1px] border-white md:col-span-2">
					<Link href="/">
						<a className="block h-14 mb-3 md:float-left md:mr-5">
							<Image src="/images/svg/healthykitchen101-w.svg" width={300} height={55} alt="HealthyKitchen101" />
						</a>
					</Link>
					<span className="md:text-[15px]">HealthyKitchen101.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com, Amazon.co.uk or Amazon.ca</span>
				</div>
				<ul className="inline-flex flex-col flex-wrap justify-start items-center h-28 md:row-start-3 md:col-span-2 md:gap-x-3">
					{menus.map((menu, index) => (
						<li key={index} className="w-1/2 h-7 leading-7">
							<Link href={menu.url}>
								<a {...externalLinkRel} className={classNames(index <= 3 ? "font-semibold text-base" : "",
									router.pathname === menu.url ? "text-yellow-500" : ""
								)}>
									{menu.title}
								</a>
							</Link>
						</li>
					))}
				</ul>
				<div className="inline-flex gap-x-3 md:row-start-2 md:col-start-2">
					{socials.map((social) => (
						<a {...externalLinkRel} key={social.title} href={social.url}
							className={classNames("block w-8 h-8 rounded-full p-2",
								social.title === "facebook" ? "bg-[#187AFF]" : "",
								social.title === "pinterest" ? "bg-[#DB3C00]" : "",
								social.title === "twitter" ? "bg-[#20AEEF]" : "",
								social.title === "linkedIn" ? "bg-[#0a66c2]" : ""
							)}>
							<Image src={`/images/svg/socials/${social.title?.toLowerCase()}-white.svg`} width={16} height={16} alt={social.title} />
							<span className="sr-only">{`${social.title} HealthyKitchen101`}</span>
						</a>
					))}
				</div>
				<div className="md:row-start-2">
					<p className="font-semibold text-base mb-3">Get our latest healthy recipes</p>
					<p> Stay up-to-date with our latest RDN-approved recipes, kitchen tips, and healthy eating challenges.</p>
					<p className="text-xs mt-3"> Opt-out at any time by clicking the &apos;unsubscribe&apos; link at the bottom of our email.</p>
				</div>
				<div className="border-b-2 border-white border-solid pb-5 md:row-start-2 md:col-start-2 md:mt-12 md:border-none">
					<p className="text-lg font-semibold"> Visit our other Healthy101 sites:</p>
					<div className="w-52 max-w-xs h-10">
						<Image src="/images/svg/healthyrecipes101-w.svg" width={300} height={55} alt="HealthyRecipes101" />
					</div>
				</div>
				<div className="md:flex md:justify-between md:items-center md:col-span-2 md:border-t-[1px] md:border-white">
					<p> Copyright © 2017–2021 · Healthy Kitchen 101 - All Rights Reserved</p>
					<a {...externalLinkRel} className="text-center block mt-3" href={`https://www.dmca.com/Protection/Status.aspx?ID=3a142b04-dca0-4d90-ba6d-328f9f7c3757&refurl=https://healthykitchen101.com${router.asPath}`}>
						<Image src="https://images.dmca.com/Badges/dmca-badge-w150-5x1-07.png?ID=3a142b04-dca0-4d90-ba6d-328f9f7c3757"
							width={121}
							height={24}
							alt="DMCA.com Protection Status"
						/>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

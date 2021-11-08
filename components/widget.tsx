import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import { UserProps } from "./type";
import { ChevronRightIcon, SearchIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ');

export const Breadcrumb: React.FC<{ breadcrumbs: { title: string, url: string }[] }> = ({ breadcrumbs }) => {
  return (
    <div className="inline-flex items-center gap-x-1 font-semibold text-sm w-full h-8">
      {breadcrumbs?.map((breadcrumb, index) => (
        breadcrumb.url ?
          (<Link href={breadcrumb.url} key={index}>
            <a className="text-cyan-700 inline-flex items-center gap-x-1">
              {index > 0 && <ChevronRightIcon className="h-3 w-3 text-cyan-700 pointer-events-none" />}
              {breadcrumb.title}
            </a>
          </Link>) :
          <>
            {index > 0 && <ChevronRightIcon className="h-3 w-3 text-cyan-700 pointer-events-none" />}
            <span dangerouslySetInnerHTML={{ __html: breadcrumb.title }} ></span>
          </>
      ))}
    </div>
  );
};

export const Title: React.FC<{ name: string, svg?: string, href?: string, className?: string }> = ({ name, svg, href, className = "" }) => {
  return (
    <div className={`flex items-center mb-4 ${className}`}>
      {svg && <span className="w-12 h-12 bg-sky-100 rounded-full p-2 mr-3">
        <Image src={`/images/svg/topics/${svg}.svg`} width={32} height={32} alt={svg} />
      </span>}
      <div className="flex-grow text-2xl font-semibold">{name}</div>
      {href && (
        <Link href={href}>
          <a className="hidden sm:inline-flex sm:items-center text-sm font-semibold text-teal-700">
            Browse all <ChevronRightIcon className="h-3 w-3 text-cyan-700" />
          </a>
        </Link>
      )}
    </div>
  );
};

export const BrowseAll: React.FC<{ href?: string; text?: string }> = ({ href = "/", text = "Browse all" }) => {
  return (
    <Link href={href}>
      <a
        className="sm:hidden flex items-center justify-center rounded-sm border border-teal-700 bg-white text-teal-700 text-sm italic py-2 mt-4"
        type="button"
      >
        {text}<ChevronRightIcon className="h-3 w-3 text-cyan-700" />
      </a>
    </Link>
  );
};

export const Users: UserProps[] = [
  {
    "userId": 1,
    "name": "Luna Regina",
    "uri": "/author/luna/",
    "description": "A writer and entrepreneur, Luna’s day doesn’t start at the computer keyboard, but in the kitchen. Half of her working hours are spent on mixing ingredients for her recipes. The other half involve working with the tech team to research and test the tools and appliances that promise to make kitchen work effortless and mess-free. From a kitchen knife or water filter to the Instant Pot, if it can help save time and effort for the home cook, Luna and her team are on it. Luna’s extracurricular pastimes include camping, travel, and photography.",
    "avatar": {
      "url": "http://secure.gravatar.com/avatar/90cded05124d9efe019e08f9fbe5ef9f?s=250&d=identicon&r=g"
    },
    "seo": {
      "social": {
        "facebook": "https://www.facebook.com/healthykitchen101/",
        "instagram": "https://www.instagram.com/_healthykitchen101/",
        "linkedIn": "https://www.linkedin.com/in/luna-regina/",
        "pinterest": "https://www.pinterest.com/healthykitchen101/",
        "twitter": "",
        "youTube": ""
      }
    }
  },
  {
    "userId": 723,
    "name": "Donna Currie",
    "uri": "/author/donna/",
    "description": "Donna Currie is the author of the cookbook Make Ahead Bread, and a kitchen gadget fanatic. From apple peelers to toasters to zesters, she loves seeing how they work, testing their functions, and keeping the best for her arsenal of handy kitchen tools. Her collection of cookbooks is quite impressive, ranging from quirky cookbooks from the 1800’s to cutting edge molecular gastronomy. Besides her own blogs, Cookistry, Cookistry’s Reviews, and Munching on Books, she writes for several online publications. In her free time, you might find her sharing her home made baked goods with neighbors or puttering in the garden.",
    "avatar": {
      "url": "http://secure.gravatar.com/avatar/029d6378f90f603f8e7a94f1683f9f52?s=250&d=identicon&r=g"
    },
    "seo": {
      "social": {
        "facebook": "https://www.facebook.com/dbcurrie",
        "instagram": "",
        "linkedIn": "https://www.linkedin.com/in/dbcurrie/",
        "pinterest": "",
        "twitter": "https://twitter.com/dbcurrie",
        "youTube": ""
      }
    }
  },
  {
    "userId": 719,
    "name": "Kori Perten",
    "uri": "/author/kori/",
    "description": "Kori Perten is a Boston-based editor with a passion for cooking and a background in product reviews and consumer advocacy journalism. Her work has appeared in publications such as Wirecutter, USA Today, and Reviewed, among others. She was previously an editor at Reviewed, producing and managing content with a focus on kitchen tools and appliances. She’s excited to be working with the team at Healthy Kitchen 101 as a consulting editor to ensure product reviews are in tip-top shape.",
    "avatar": {
      "url": "http://secure.gravatar.com/avatar/2cec422b8298ad636f4c63db35ea28b4?s=250&d=identicon&r=g"
    },
    "seo": {
      "social": {
        "facebook": "",
        "instagram": "",
        "linkedIn": "https://www.linkedin.com/in/koriperten/",
        "pinterest": "",
        "twitter": "https://twitter.com/koriperten",
        "youTube": ""
      }
    }
  },
  {
    "userId": 721,
    "name": "Tyler Wells Lynch",
    "uri": "/author/tyler/",
    "description": "Tyler Wells Lynch is a writer and editor located in Maine. His work has appeared in USA Today, Motherboard, Wirecutter, Reviewed, and the Huffington Post, among others. He enjoys cooking and playing music and serves as a consulting editor for Healthy Kitchen 101.",
    "avatar": {
      "url": "http://secure.gravatar.com/avatar/bbbe76cb0776f5677747961052ec53b7?s=250&d=identicon&r=g"
    },
    "seo": {
      "social": {
        "facebook": "",
        "instagram": "",
        "linkedIn": "https://www.linkedin.com/in/tylerwellslynch/",
        "pinterest": "",
        "twitter": "https://twitter.com/tylerwellslynch",
        "youTube": ""
      }
    }
  }
]

export const OurTeam: React.VFC = () => {
  return (
    <section className="bg-sky-100">
      <div className="mt-5 py-6 mx-auto px-2 sm:px-0 lg:px-6 max-w-xl md:max-w-2xl lg:max-w-5xl">
        <h3 className="text-2xl font-bold text-teal-700 text-center mb-4 lg:mb-5">Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {Users.map(user => (
            <div key={user.userId} className="px-5 pt-5 pb-3 rounded-lg bg-white border-b-8 border-teal-700 border-solid">
              <div className="float-left w-full max-w-[150px] mr-3 sm:max-w-[115px] lg:float-none lg:max-w-full lg:m-0">
                <Image
                  className="rounded-sm object-center object-cover"
                  src={user?.avatar.url} alt={user.name} width={200} height={200}
                />
              </div>
              <h4 className="text-xl font-semibold capitalize mb-1">{user.name}</h4>
              <p className="font-semibold text-teal-700 capitalize">
                {user.userId === 1 ? "Writer" : "Editor"}
              </p>
              <p className="text-sm font-medium text-gray-500">
                {user.description.split(" ").slice(0, 25).join(" ")}...
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const AuthorBox: React.VFC = () => {
  const author = Users[0] || {};
  const socials = [
    { title: "facebook", url: "https://www.facebook.com/healthykitchen101/" },
    { title: "linkedIn", url: "https://www.linkedin.com/company/healthykitchen101/" },
    { title: "pinterest", url: "http://pinterest.com/healthykitchen101/" },
    { title: "twitter", url: "https://twitter.com/healthykitch101/" },
    { title: "instagram", url: "https://www.instagram.com/_healthykitchen101/" }
  ];
  return (<>
    {author.name &&
      <section className="inline-flex flex-col sm:flex-row gap-4 md:gap-6 bg-white shadow-lg rounded overflow-hidden ring-1 ring-gray-100  py-4 px-5 mt-12">
        <div className="min-w-[165px] flex items-center flex-col">
          <Image alt={author.name} width={165} height={165}
            className="rounded-full object-center object-cover"
            src={author.avatar.url}
          />
          <div className='inline-flex gap-5 mt-3 h-5 sm:mt-2'>
            {socials.map((social) => (
              <a key={social.title} href={social.url} rel="nofollow noopener noreferrer">
                <Image src={`/images/svg/socials/${social.title.toLocaleLowerCase()}-teal.svg`} width={20} height={20} alt={social.title} />
                <span className="sr-only">{`${social.title} ${author.name}`}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="text-center sm:text-left">
          <div className="text-xl font-semibold capitalize">{author.name}</div>
          <p className="text-sm text-gray-600 mt-2  "> {author.description}</p>
        </div>
      </section>
    }
  </>
  );
};

export const AsFeaturedOn: React.FC = () => {
  const list = [
    { src: "https://cdn.healthykitchen101.com/uploads/2021/05/eatthis.png", alt: "Eatthis" },
    { src: "https://cdn.healthykitchen101.com/uploads/2021/05/forbes.png", alt: "Forbes" },
    { src: "https://cdn.healthykitchen101.com/uploads/2021/05/msn.png", alt: "Msn" },
    { src: "https://cdn.healthykitchen101.com/uploads/2021/05/cnn.png", alt: "Cnn" },
    { src: "https://cdn.healthykitchen101.com/uploads/2021/05/bustle.png", alt: "Bustle" },
    { src: "https://cdn.healthykitchen101.com/uploads/2021/05/parade.png", alt: "Parade" },
    { src: "https://cdn.healthykitchen101.com/uploads/2021/05/ibt.png", alt: "Ibt" },
    { src: "https://cdn.healthykitchen101.com/uploads/2021/05/businessinsider.png", alt: "Business Insider" },
  ];
  return (
    <section className="bg-white">
      <div className="py-4 mx-auto px-2 sm:px-0 lg:px-6 max-w-xl md:max-w-2xl lg:max-w-5xl">
        <div className="text-center text-teal-700 pb-4 font-semibold text-lg sm:text-base">
          AS FEATURED ON
        </div>
        <div className="grid grid-cols-4 gap-1 sm:grid-cols-8">
          {list.map((e: any, i) => (
            <Image key={i} src={e.src} alt="Tuple" width={180} height={90} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const SearchBox: React.VFC<{ style?: string }> = ({ style }) => {
  const searchRef = useRef<string>();
  const router = useRouter();
  const handleSearch = () => {
    if (searchRef.current) router.push({ pathname: '/search', query: { s: searchRef.current } })
  }
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') handleSearch()
  }
  return (
    <div className={style === "block" ? "block mb-5" : "mx-auto max-w-xl md:max-w-2xl lg:max-w-5xl relative h-0"}>
      <div className={style === "block" ? "" : "absolute right-0 lg:right-6 hidden md:block"}>
        <div className="relative flex items-center h-8 md:w-60">
          <input type="text" name="s" onChange={(e) => searchRef.current = e.target.value || ''}
            onKeyDown={handleKeyDown}
            className="h-8 shadow-sm focus:ring-teal-700 focus:border-teal-700 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
          />
          <button type="submit" onClick={handleSearch}>
            <SearchIcon className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-auto text-teal-700" />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};


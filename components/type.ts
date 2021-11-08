/**
 * Model
 */
export interface PostProps {
  author: { node: AuthorProps };
  categories: { nodes: CategoryProps[] };
  tags: { nodes: TagProps[] };
  blocks: ContentBlockProps[];
  opengraph: OpenGraphProps;
  dateGmt: string;
  excerpt: string;
  featuredImage: { node: FeaturedImage };
  modifiedGmt: string;
  postId: number;
  slug: string;
  title: string;
  description: string;
  uri: string;
  primaryCat: { node: PrimaryCatProps };
};

export type OpenGraphProps = {
  title: string;
  metaDesc: string;
  canonical: string;
  opengraphSiteName: string;
  opengraphPublisher: string;
  opengraphType: string;
  opengraphUrl: string;
  opengraphTitle: string;
  opengraphDescription: string;
  opengraphAuthor: string;
  opengraphImage: {
    sourceUrl: string;
    sizes: string;
  };
  schema: {
    raw: string;
  };
};

export type BreadcrumbPros = {
  title: string
  url: string
}

export type ContentBlockProps = {
  name: string;
  attributesJSON: string;
  innerBlocks: ContentBlockProps[];
  order: number;
};

export type AuthorProps = {
  name: string;
  uri: string;
};

export type FeaturedImage = {
  altText: string;
  sourceUrl: string;
  srcSet: string;
};

export type CategoryProps = {
  categoryId: number;
  children:
  | { nodes: { categoryId: string; name: string; slug: string; uri: string } }
  | any;
  description: string;
  name: string;
  parent: { node: { name: string; slug: string; uri: string } } | null;
  slug: string;
  uri: string;
};

export type TagProps = {
  tagId: number;
  description: string;
  name: string;
  slug: string;
  uri: string;
};

export type UserProps = {
  avatar: {
    url: string;
  };
  description: string;
  email?: string;
  name: string;
  uri: string;
  userId: number;
  seo: SeoProps;
};

export type MenuProps = {
  name: string;
  menuId: number;
  menuItems: {
    nodes: [
      {
        label: string;
        childItems: {
          nodes: [{ label: string; path: string; menuItemId: string }];
        };
        path: string;
        menuItemId: string;
      }
    ];
  };
};

export type GeneralSettingsProps = {
  description: string;
  title: string;
  url: string;
};

export type PageInfoProps = {
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
};

export type MediaItemProps = {
  altText: string;
  sourceUrl: string;
};

export type SeoProps = {
  social: SocialProps;
};

export type SocialProps = {
  facebook: string;
  instagram: string;
  linkedIn: string;
  pinterest: string;
  twitter: string;
  youTube: string;
} | any;

export type PrimaryCatProps = {
  categoryId: number
  name: string
  slug: string
  popular?: { nodes: [PostProps] }
  latest?: { nodes: [PostProps] }
  tips?: { nodes: [PostProps] }
}
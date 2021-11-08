// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PageInfoProps, PostProps } from "../../../components/type";
import { getMorePostOfCategory } from "../../../libs/api/categories";

type Data = {
  nodes?: [PostProps];
  pageInfo?: PageInfoProps;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { query: { slug }, method } = req;
  if (method != "GET") return res.status(405).json({ error: "Method Not Allowed." });
  if (slug.length != 2) return res.status(400).json({ error: "Slug Not True." });
  let data = await getMorePostOfCategory(String(slug[0]), String(slug[1]));
  res.status(200).json(data);
}

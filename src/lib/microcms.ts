import type { MicroCMSQueries, MicroCMSListContent, MicroCMSImage } from "microcms-js-sdk";
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: "0megzcpqge.microcms.io",
  apiKey: "64RkOh6sizxMskeH9J1KpvQDwdA6H85jEDOi",
});

export type Blog = {
  title: string;
  content: string | null;
  eyecatch: MicroCMSImage | null;
} & MicroCMSListContent;

export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.getList<Blog>({ endpoint: "blogs", queries });
};

export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });
};
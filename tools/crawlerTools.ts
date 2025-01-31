import { z } from "zod";
import { DynamicStructuredTool } from "@langchain/core/tools";
import codebolt from "@codebolt/codeboltjs";

export const crawlerTools = {
  crawlWebsite: new DynamicStructuredTool({
    name: "crawlWebsite",
    description: "Crawl a website and return the crawled data",
    schema: z.object({
      url: z.string().describe("The URL of the website to crawl"),
    }),
    func: async ({ url }: { url: string }) => {
      return await codebolt.crawler.crawlWebsite(url);
    },
  }),
};
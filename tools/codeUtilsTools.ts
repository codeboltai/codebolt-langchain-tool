import { z } from "zod";
import { DynamicStructuredTool } from "@langchain/core/tools";
import codebolt from "@codebolt/codeboltjs";

export const codeUtilsTools = {
    getJsTree: new DynamicStructuredTool({
    name: "getJsTree",
    description: "Format the given code",
    schema: z.object({
      filepath: z.string().describe("The filepath to get the JS tree"),
    }),
    func: async ({ filepath }: { filepath: string }) => {
      return await codebolt.codeutils.getJsTree(filepath);
    },
  }),
  getAllFilesAsMarkDown: new DynamicStructuredTool({
    name: "getJsTree",
    description: "Format the given code",
    schema: z.object({}),
    func: async () => {
      return await codebolt.codeutils.getAllFilesAsMarkDown();
    },
  }),
};
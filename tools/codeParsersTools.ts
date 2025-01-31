import { z } from "zod";
import { DynamicStructuredTool } from "@langchain/core/tools";
import codebolt from "@codebolt/codeboltjs";

export const codeParsersTools = {
  parseCode: new DynamicStructuredTool({
    name: "parseCode",
    description: "Parse code and return the code tree",
    schema: z.object({
      code: z.string().describe("The code to parse"),
    }),
    func: async ({ code }: { code: string }) => {
      return await codebolt.codeparsers.getAstTreeInFile(code, '')
    },
  }),
};
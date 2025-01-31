import { z } from "zod";
import { DynamicStructuredTool } from "@langchain/core/tools";
import codebolt from "@codebolt/codeboltjs";

export const dbMemoryTools = {
  set: new DynamicStructuredTool({
    name: "set",
    description: "Set a value in the memory database",
    schema: z.object({
      key: z.string().describe("The key to set"),
      value: z.any().describe("The value to set"),
    }),
    func: async ({ key, value }: { key: string; value: any }) => {
      await codebolt.dbMemory.set(key, value);
      return `Value set for key: ${key}`;
    },
  }),
  get: new DynamicStructuredTool({
    name: "get",
    description: "Get a value from the memory database",
    schema: z.object({
      key: z.string().describe("The key to get"),
    }),
    func: async ({ key }: { key: string }) => {
      return await codebolt.dbMemory.get(key);
    },
  }),
};
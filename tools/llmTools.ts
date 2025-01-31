import { z } from "zod";
import { DynamicStructuredTool } from "@langchain/core/tools";
import codebolt from "@codebolt/codeboltjs";

export const llmTools = {
  inference: new DynamicStructuredTool({
    name: "inference",
    description: "Performs inference using an LLM",
    schema: z.object({
      message: z.string().describe("Input message for inference"),
      llmrole: z.string().describe("Role for the LLM (e.g., 'assistant', 'user')"),
    }),
    func: async ({ message, llmrole }) => {
      return await codebolt.llm.inference(message, llmrole);
    },
  }),
};
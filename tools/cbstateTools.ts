import { z } from "zod";
import { DynamicStructuredTool } from "@langchain/core/tools";
import codebolt from "@codebolt/codeboltjs";

export const cbstateTools = {
  getApplicationState: new DynamicStructuredTool({
    name: "getApplicationState",
    description: "Retrieves the current application state",
    schema: z.object({}),
    func: async () => {
      return await codebolt.cbstate.getApplicationState();
    },
  }),
  addToAgentState: new DynamicStructuredTool({
    name: "addToAgentState",
    description: "Adds a key-value pair to the agent's state",
    schema: z.object({
      key: z.string().describe("Key to add"),
      value: z.string().describe("Value to associate with the key"),
    }),
    func: async ({ key, value }) => {
      return await codebolt.cbstate.addToAgentState(key, value);
    },
  }),
  getAgentState: new DynamicStructuredTool({
    name: "getAgentState",
    description: "Retrieves the current state of the agent",
    schema: z.object({}),
    func: async () => {
      return await codebolt.cbstate.getAgentState();
    },
  }),
};
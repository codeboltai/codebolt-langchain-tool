import { z } from "zod";
import { DynamicStructuredTool } from "@langchain/core/tools";
import codebolt from "@codebolt/codeboltjs";

export const terminalTools = {
  executeCommand: new DynamicStructuredTool({
    name: "executeCommand",
    description: "Executes a terminal command",
    schema: z.object({
      command: z.string().describe("Command to execute"),
      returnEmptyStringOnSuccess: z.boolean().optional().describe("Whether to return an empty string on success"),
    }),
    func: async ({ command, returnEmptyStringOnSuccess }) => {
      return await codebolt.terminal.executeCommand(command, returnEmptyStringOnSuccess);
    },
  }),

  executeCommandRunUntilError: new DynamicStructuredTool({
    name: "executeCommand",
    description: "Executes a terminal command",
    schema: z.object({
      command: z.string().describe("Command to execute"),
    }),
    func: async ({ command }) => {
      return await codebolt.terminal.executeCommandRunUntilError(command);
    },
  }),
};
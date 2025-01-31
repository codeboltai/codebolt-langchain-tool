import { z } from "zod";
import { DynamicStructuredTool } from "@langchain/core/tools";
import codebolt from "@codebolt/codeboltjs";

export const chatTools = {
  sendMessage: new DynamicStructuredTool({
    name: "sendMessage",
    description: "Send a message to the user",
    schema: z.object({
      message: z.string().describe("The message to send"),
    }),
    func: async ({ message }: { message: string }) => {
      await codebolt.chat.sendMessage(message, '');
      return `Message sent: ${message}`;
    },
  }),

  waitForReply: new DynamicStructuredTool({
    name: "waitForReply",
    description: "Wait for a reply from the user",
    schema: z.object({
      message: z.string().describe(" Message for wait for a reply"),
    }),
    func: async ({ message }: { message?: string }) => {
      const reply: any = await codebolt.chat.askQuestion(message);
      console.log("reply------",reply.message.feedbackMessage)
      return reply.message.feedbackMessage
    },
  }),

  stopProcess: new DynamicStructuredTool({
    name: "stopProcess",
    description: "Stop the current process",
    schema: z.object({}),
    func: async () => {
      await codebolt.chat.stopProcess();
      return "Process stopped successfully.";
    },
  }),
  processStarted: new DynamicStructuredTool({
    name: "processStarted",
    description: "Notify that a process has started",
    schema: z.object({}).describe("No parameters are needed for this function"),
    func: async () => {
      await codebolt.chat.processStarted();
      return "Process started successfully.";
    },
  }),

  getChatHistory: new DynamicStructuredTool({
    name: "getChatHistory",
    description: "Retrieve the chat history",
    schema: z.object({}),
    func: async () => {
      const history = await codebolt.chat.getChatHistory();
      return JSON.stringify(history);
    },
  }),
};
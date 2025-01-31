import { z } from "zod";
import { DynamicStructuredTool } from "@langchain/core/tools";
import codebolt from "@codebolt/codeboltjs";

export const browserTools = {
  click: new DynamicStructuredTool({
    name: "click",
    description: "Clicks on a specified element on the page",
    schema: z.object({
      selector: z.string().describe("The CSS selector of the element to click"),
    }),
    func: async ({ selector }: { selector: string }) => {
      await codebolt.browser.click(selector);
    },
  }),

  close: new DynamicStructuredTool({
    name: "close",
    description: "Closes the current page",
    schema: z.object({}),
    func: async () => {
      await codebolt.browser.close();
    },
  }),

  enter: new DynamicStructuredTool({
    name: "enter",
    description: "Simulates the Enter key press on the current page",
    schema: z.object({}),
    func: async () => {
      await codebolt.browser.enter();
    },
  }),

  extractText: new DynamicStructuredTool({
    name: "extractText",
    description: "Extracts text from the current page",
    schema: z.object({}),
    func: async () => {
      return await codebolt.browser.extractText();
    },
  }),

  getContent: new DynamicStructuredTool({
    name: "getContent",
    description: "Retrieves the content of the current page",
    schema: z.object({}),
    func: async () => {
      return await codebolt.browser.getContent();
    },
  }),

  getHTML: new DynamicStructuredTool({
    name: "getHTML",
    description: "Retrieves the HTML content of the current page",
    schema: z.object({}),
    func: async () => {
      return await codebolt.browser.getHTML();
    },
  }),

  getMarkdown: new DynamicStructuredTool({
    name: "getMarkdown",
    description: "Retrieves the Markdown content of the current page",
    schema: z.object({}),
    func: async () => {
      return await codebolt.browser.getMarkdown();
    },
  }),

  getPDF: new DynamicStructuredTool({
    name: "getPDF",
    description: "Retrieves the PDF content of the current page",
    schema: z.object({}),
    func: async () => {
      return await codebolt.browser.getPDF();
    },
  }),

  getUrl: new DynamicStructuredTool({
    name: "getUrl",
    description: "Retrieves the current URL of the browser's active page",
    schema: z.object({}),
    func: async () => {
      return await codebolt.browser.getUrl();
    },
  }),

  goToPage: new DynamicStructuredTool({
    name: "goToPage",
    description: "Navigates to a specified URL",
    schema: z.object({
      url: z.string().describe("The URL to navigate to"),
    }),
    func: async ({ url }: { url: string }) => {
      await codebolt.browser.goToPage(url);
    },
  }),

  newPage: new DynamicStructuredTool({
    name: "newPage",
    description: "Opens a new page in the browser",
    schema: z.object({}),
    func: async () => {
      await codebolt.browser.newPage();
    },
  }),

  pdfToText: new DynamicStructuredTool({
    name: "pdfToText",
    description: "Converts the PDF content of the current page to text",
    schema: z.object({}),
    func: async () => {
      return await codebolt.browser.pdfToText();
    },
  }),

  screenshot: new DynamicStructuredTool({
    name: "screenshot",
    description: "Takes a screenshot of the current page",
    schema: z.object({}),
    func: async () => {
      await codebolt.browser.screenshot();
    },
  }),

  scroll: new DynamicStructuredTool({
    name: "scroll",
    description: "Scrolls the current page in a specified direction by a specified number of pixels",
    schema: z.object({
      direction: z.enum(["up", "down", "left", "right"]).describe("The direction to scroll"),
      pixels: z.string().describe("The number of pixels to scroll"),
    }),
    func: async ({ direction, pixels }: { direction: "up" | "down" | "left" | "right"; pixels: string }) => {
      await codebolt.browser.scroll(direction, pixels);
    },
  }),

    search: new DynamicStructuredTool({
        name: "search",
        description: "Performs a search on the current page using a specified query",
        schema: z.object({
        query: z.string().describe("The search query"),
        elementId: z.string().optional().describe("The ID of the element to search within"),
        }),
        func: async ({ query, elementId }: { query: string; elementId?: string }) => {
        await codebolt.browser.search(query, elementId);
        },
    }),
  type: new DynamicStructuredTool({
    name: "type",
    description: "Types text into a specified element on the page",
    schema: z.object({
      selector: z.string().describe("The CSS selector of the element to type into"),
      text: z.string().describe("The text to type"),
    }),
    func: async ({ selector, text }: { selector: string; text: string }) => {
      await codebolt.browser.type(selector, text);
    },
  }),
};

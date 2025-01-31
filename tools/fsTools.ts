import { z } from "zod";
import { DynamicStructuredTool } from "@langchain/core/tools";
import codebolt from "@codebolt/codeboltjs";

export const fsTools = {
  createFile: new DynamicStructuredTool({
    name: "createFile",
    description: "Creates a new file with the specified content",
    schema: z.object({
      fileName: z.string().describe("Name of the file to create"),
      source: z.string().describe("Content to write to the file"),
      filePath: z.string().describe("Path where the file will be created"),
    }),
    func: async ({ fileName, source, filePath }) => {
      return await codebolt.fs.createFile(fileName, source, filePath);
    },
  }),
  createFolder: new DynamicStructuredTool({
    name: "createFolder",
    description: "Creates a new folder at the specified path",
    schema: z.object({
      folderName: z.string().describe("Name of the folder to create"),
      folderPath: z.string().describe("Path where the folder will be created"),
    }),
    func: async ({ folderName, folderPath }) => {
      return await codebolt.fs.createFolder(folderName, folderPath);
    },
  }),
  readFile: new DynamicStructuredTool({
    name: "readFile",
    description: "Reads the content of a file",
    schema: z.object({
      filePath: z.string().describe("Path to the file to read"),
    }),
    func: async ({ filePath }) => {
      return await codebolt.fs.readFile(filePath);
    },
  }),
  updateFile: new DynamicStructuredTool({
    name: "updateFile",
    description: "Updates the content of a file",
    schema: z.object({
      filename: z.string().describe("Name of the file to update"),
      filePath: z.string().describe("Path to the file"),
      newContent: z.string().describe("New content to write to the file"),
    }),
    func: async ({ filename, filePath, newContent }) => {
      return await codebolt.fs.updateFile(filename, filePath, newContent);
    },
  }),
  deleteFile: new DynamicStructuredTool({
    name: "deleteFile",
    description: "Deletes a file",
    schema: z.object({
      filename: z.string().describe("Name of the file to delete"),
      filePath: z.string().describe("Path to the file"),
    }),
    func: async ({ filename, filePath }) => {
      return await codebolt.fs.deleteFile(filename, filePath);
    },
  }),
  deleteFolder: new DynamicStructuredTool({
    name: "deleteFolder",
    description: "Deletes a folder",
    schema: z.object({
      foldername: z.string().describe("Name of the folder to delete"),
      folderpath: z.string().describe("Path to the folder"),
    }),
    func: async ({ foldername, folderpath }) => {
      return await codebolt.fs.deleteFolder(foldername, folderpath);
    },
  }),
  listFile: new DynamicStructuredTool({
    name: "listFile",
    description: "Lists files in a folder",
    schema: z.object({
      folderPath: z.string().describe("Path to the folder"),
      isRecursive: z.boolean().optional().describe("Whether to list files recursively"),
    }),
    func: async ({ folderPath, isRecursive }) => {
      return await codebolt.fs.listFile(folderPath, isRecursive);
    },
  }),
  searchFiles: new DynamicStructuredTool({
    name: "searchFiles",
    description: "Searches files using a regex pattern",
    schema: z.object({
      path: z.string().describe("Path to search in"),
      regex: z.string().describe("Regex pattern to search for"),
      filePattern: z.string().describe("File pattern to filter results"),
    }),
    func: async ({ path, regex, filePattern }) => {
      return await codebolt.fs.searchFiles(path, regex, filePattern);
    },
  }),
  writeFile: new DynamicStructuredTool({
    name: "updateFile",
    description: "Updates the content of a file",
    schema: z.object({
      filePath: z.string().describe("Path to the file"),
      newContent: z.string().describe("New content to write to the file"),
    }),
    func: async ({ filePath, newContent }) => {
      return await codebolt.fs.writeToFile(filePath, newContent);
    },
  }),
};
import { z } from "zod";
import { DynamicStructuredTool } from "@langchain/core/tools";
import codebolt from "@codebolt/codeboltjs";

export const gitTools = {
  init: new DynamicStructuredTool({
    name: "init",
    description: "Initializes a new Git repository",
    schema: z.object({
      path: z.string().describe("Path to initialize the repository"),
    }),
    func: async ({ path }) => {
      return await codebolt.git.init(path);
    },
  }),
  clone: new DynamicStructuredTool({
    name: "clone",
    description: "Clones a Git repository",
    schema: z.object({
      url: z.string().describe("URL of the repository to clone"),
      path: z.string().describe("Path to clone the repository into"),
    }),
    func: async ({ url, path }) => {
      return await codebolt.git.clone(url, path);
    },
  }),
  pull: new DynamicStructuredTool({
    name: "pull",
    description: "Pulls the latest changes from the remote repository",
    schema: z.object({
      path: z.string().describe("Path to the repository"),
    }),
    func: async ({ path }) => {
      return await codebolt.git.pull(path);
    },
  }),
  push: new DynamicStructuredTool({
    name: "push",
    description: "Pushes local changes to the remote repository",
    schema: z.object({
      path: z.string().describe("Path to the repository"),
    }),
    func: async ({ path }) => {
      return await codebolt.git.push(path);
    },
  }),
  status: new DynamicStructuredTool({
    name: "status",
    description: "Checks the status of the repository",
    schema: z.object({
      path: z.string().describe("Path to the repository"),
    }),
    func: async ({ path }) => {
      return await codebolt.git.status(path);
    },
  }),
  add: new DynamicStructuredTool({
    name: "add",
    description: "Adds changes to the staging area",
    schema: z.object({
      path: z.string().describe("Path to the repository"),
    }),
    func: async ({ path }) => {
      return await codebolt.git.add(path);
    },
  }),
  commit: new DynamicStructuredTool({
    name: "commit",
    description: "Commits changes with a message",
    schema: z.object({
      message: z.string().describe("Commit message"),
    }),
    func: async ({ message }) => {
      return await codebolt.git.commit(message);
    },
  }),
  checkout: new DynamicStructuredTool({
    name: "checkout",
    description: "Checks out a branch",
    schema: z.object({
      path: z.string().describe("Path to the repository"),
      branch: z.string().describe("Branch name to checkout"),
    }),
    func: async ({ path, branch }) => {
      return await codebolt.git.checkout(path, branch);
    },
  }),
  branch: new DynamicStructuredTool({
    name: "branch",
    description: "Creates a new branch",
    schema: z.object({
      path: z.string().describe("Path to the repository"),
      branch: z.string().describe("Name of the new branch"),
    }),
    func: async ({ path, branch }) => {
      return await codebolt.git.branch(path, branch);
    },
  }),
  logs: new DynamicStructuredTool({
    name: "logs",
    description: "Retrieves commit logs",
    schema: z.object({
      path: z.string().describe("Path to the repository"),
    }),
    func: async ({ path }) => {
      return await codebolt.git.logs(path);
    },
  }),
  diff: new DynamicStructuredTool({
    name: "diff",
    description: "Retrieves the diff for a specific commit",
    schema: z.object({
      commitHash: z.string().describe("Commit hash to view diff for"),
      path: z.string().describe("Path to the repository"),
    }),
    func: async ({ commitHash, path }) => {
      return await codebolt.git.diff(commitHash, path);
    },
  }),
};
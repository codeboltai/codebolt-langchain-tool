import { browserTools } from "./tools/browserTools";
import { cbstateTools } from "./tools/cbstateTools";
import { chatTools } from "./tools/chatTools";
import { codeUtilsTools } from "./tools/codeUtilsTools";
import { gitTools } from "./tools/gitTools";
import { fsTools } from "./tools/fsTools";
import { terminalTools } from "./tools/ternminalTools";
import { llmTools } from "./tools/llmTools";

export const codeboltTools = {
  browser: browserTools,
  cbstate: cbstateTools,
  chat: chatTools,
  fs: fsTools,
  codeUtils: codeUtilsTools,
  git: gitTools,
  ternminal: terminalTools,
  llm: llmTools,
};

// Your performActions function and other code here



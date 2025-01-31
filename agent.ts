// import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
// import { ChatOpenAI } from "@langchain/openai";
// import { HumanMessage } from "@langchain/core/messages";
// import { ToolNode } from "@langchain/langgraph/prebuilt";
// import { StateGraph, MessagesAnnotation } from "@langchain/langgraph";
// import { codeboltTools } from "./index";

// // Define the tools for the agent to use
// const tools = [
//   new TavilySearchResults({ maxResults: 3 }),
//   codeboltTools.chat.waitForReply,
//   codeboltTools.chat.sendMessage,
//   codeboltTools.fs.writeFile,
//   codeboltTools.fs.readFile,
//   codeboltTools.browser.goToPage,
//   codeboltTools.browser.screenshot,
//   codeboltTools.browser.getContent,
//   codeboltTools.browser.getHTML,
//   codeboltTools.browser.extractText,
//   codeboltTools.browser.click,
//   codeboltTools.browser.enter,
//   codeboltTools.fs.createFile,
//   codeboltTools.git.add,
//   codeboltTools.git.commit,
//   codeboltTools.git.init,
//   codeboltTools.git.branch,
//   codeboltTools.git.clone,
//   codeboltTools.git.push,
//   codeboltTools.ternminal.executeCommand,
//   codeboltTools.ternminal.executeCommandRunUntilError
// ];
// const toolNode = new ToolNode(tools);


// // Create a model and give it access to the tools
// const model = new ChatOpenAI({
//   model: "gpt-4o-mini",
//   temperature: 0,
// }).bindTools(tools);

// // Define the function that determines whether to continue or not
// function shouldContinue({ messages }: typeof MessagesAnnotation.State) {
//   const lastMessage = messages[messages.length - 1];

//   // If the LLM makes a tool call, then we route to the "tools" node
//   if (lastMessage.additional_kwargs.tool_calls) {
//     return "tools";
//   }
//   // Otherwise, we stop (reply to the user) using the special "__end__" node
//   return "__end__";
// }

// // Define the function that calls the model
// async function callModel(state: typeof MessagesAnnotation.State) {
//   const response = await model.invoke(state.messages);
//   console.log("response---",response)
//   return { messages: [response] };
// }

// // Define a new graph
// const workflow = new StateGraph(MessagesAnnotation)
//   .addNode("agent", callModel)
//   .addEdge("__start__", "agent") // __start__ is a special name for the entrypoint
//   .addNode("tools", toolNode)
//   .addEdge("tools", "agent")
//   .addConditionalEdges("agent", shouldContinue);

// // Finally, we compile it into a LangChain Runnable.
// const app = workflow.compile();

// const test = async () => {
//   // Use the agent
// //   const finalState = await app.invoke({
// //     messages: [new HumanMessage("Asked the file name to write and content and changing content, and sent to tool and also return message to tool that if your file will changes")],
// //   });

// //   const finalState = await app.invoke({
// //     messages: [new HumanMessage("Ask the name of the file path and git repo name  to push into github and sent the message to tool")],
// //   });

// const finalState = await app.invoke({
//     messages: [new HumanMessage("Ask the package name to install in terminal and sent msg too tools")],
//   });

// };

// test();


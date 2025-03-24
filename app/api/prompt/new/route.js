/*import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";

export const POST = async (req) => {
  const { userid, prompt,tag} = await req.json();
  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userid,
      prompt,
      tag,
    });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt),{status:201})
  } catch (error) {
    return new Response("Failed to create prompt" , {status:500})
  }
};*/



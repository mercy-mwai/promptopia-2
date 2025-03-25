import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";

export const POST = async (req) => {
  const { userid, prompt,tag} = await req.json();
 /* console.log("Request Body:", { userid, prompt, tag });*/
  try {
    await connectToDB();
    /*console.log("Connected to the database");*/
    const newPrompt = new Prompt({
      creator: userid,
      prompt,
      tag,
    });
    await newPrompt.save();
    /*console.log("Prompt created:", newPrompt);*/
    return new Response(JSON.stringify(newPrompt),{status:201})
  } catch (error) {
    return new Response("Failed to create prompt" , {status:500})
  }
};



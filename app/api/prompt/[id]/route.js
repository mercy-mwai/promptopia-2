import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";

//GET read

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const { id } = await params

    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new response("Prompt not found", { status: 404 });
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

//PATCH update
export const PATCH = async (request, { params }) => {
 
  try {
    await connectToDB();
    const { prompt, tag } = await request.json();
    if (!params?.id) {
      return new Response("Prompt ID is missing", { status: 400 });
    }

    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt)
      return new Response("Prompt not found", { status: 404 });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();
    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to Update prompt", { status: 500 });
  }
};

//DELETE delete
export const DELETE = async (request, {params}) => {
  try {
    await connectToDB();

    const { id } = await params
    console.log("Received params:", params);

    
    if (!id) {
      return new Response("Prompt ID is missing", { status: 400 });
    }
    
    await Prompt.findByIdAndDelete(id);
    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    console.error("Error deleting prompt:", error);
    return new Response("Failed to delete prompt", { status: 500 });
  }
};

import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";

export const GET= async(request, context)=>{
try{

    await connectToDB();

    const { params } = context; // ✅ Correctly extracting `params`
    if (!params?.id) {
      return new Response("Missing user ID", { status: 400 });
    }

    const prompts = await Prompt.find({
        creator: params.id
    }).populate('creator');
    console.log(prompts);
    
    return new Response (JSON.stringify(prompts),{status:200}); 
}catch(error){
    return new Response ("Failed to fetch all prompts",{status:500});
}
} 
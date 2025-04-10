import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";

export const GET =async(request, context)=>{
    try{
        await connectToDB();
        const {params}=context;
        const prompts = await Prompt.find({ creator: params.id }).populate("creator")

        return new Response(JSON.stringify(prompts), { status: 200 })

    }catch(error){
        console.log(error);
        return new Response("Failed to fetch prompts created by user", { status: 500 });
    }
}
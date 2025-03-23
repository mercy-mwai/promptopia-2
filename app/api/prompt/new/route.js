import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";

export const POST= async(req)=>{
    const {UserID, prompt, response}= await req.json();
    try{
        await connectToDB();
    }catch(error){
        
    }
    
}
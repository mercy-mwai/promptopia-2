 import NextAuth from "next-auth";
 import GoogleProvider from "next-auth/providers/google";

 import { connectToDB } from "@/utils/database";

 console.log({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET_CLIENT
})

 const handler =NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET_CLIENT,
        })
    ],
    async session({session}){

    },
    async signin({profile}){
        try{
            await connectToDB()

            //check if user already exists

            //if not , create a new  user

            return true;
        }catch(error){
            return false;
        }
    }
 })

 export { handler as GET, handler as POST }
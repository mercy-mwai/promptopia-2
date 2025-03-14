 import NextAuth from "next-auth";
 import GoogleProvider from "next-auth/providers/google";
 import User from "@/models/user";

 import { connectToDB } from "@/utils/database";

 

 const handler =NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET_CLIENT,
        })
    ],
    async session({session}){
        const sessionUser=await User.findOne({
            email: session.user.email
        })
        session.user.id=sessionUser._id.toString();
        return session;
    },

    async signin({profile}){
        try{
            await connectToDB()

            //check if user already exists
            const UserExists= await User.findOne({
                email:profile.email
            });

            //if not , create a new  user
            if(!UserExists){
                await User.create({
                    email:email.profile,
                    username:profile.name.replace(" ", "").toLowerCase(),
                    image:profile.picture
                })
            }

            return true;
        }catch(error){
            console.log("Error during sign-in:", error);
            return false;
        }
    }
 })

 export { handler as GET, handler as POST }
 import NextAuth from "next-auth";
 import GoogleProvider from "next-auth/providers/google";

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

        }catch(error){

        }
    }
 })

 export { handler as GET, handler as POST }
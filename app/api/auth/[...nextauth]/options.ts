import { authorizeUser } from "@/app/actions/auth";
import { CredentialsType } from "@/types/credentials";
import { NextAuthOptions } from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";


export const authOptions:NextAuthOptions = {
    providers:[
        CredentialsProvider({
            name:'credentials',
            credentials : {
                email : {label : "email",type:"text"},
                password : {label:"password",type:"password"}
            },
            async authorize(credentials:CredentialsType){
                if(!credentials?.email || !credentials?.password)
                {
                    throw new Error("Email & Password are required");
                }
                const user  = await authorizeUser(credentials?.email,credentials?.password);
                if(!user )

            
            }
        })
    ]
}
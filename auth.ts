import NextAuth, { DefaultSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import client from "./db"

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      email: string;
      role: string;
    } & DefaultSession["user"];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId : process.env.AUTH_GOOGLE_ID,
      clientSecret : process.env.AUTH_GOOGLE_SECRET
    })
  ],

  callbacks : {
    async jwt({ token,account,profile }) {
      if(account?.provider == 'google') {
        let user = await client.user.findFirst({
          where : {
            email : profile?.email!
          }
        })
        if(!user) { 
          try {            
            user = await client.user.create({
              data : {
                email : profile?.email!,
                profileUrl : profile?.picture,
                username : profile?.name!
              }
            })
          } catch (error) {
            console.log(error)
          }
        }
        if(user) token.id = user?.id
      }
      return token
    },
    session({ session,token } : any) {
      session.user.id = token.id
      return session
    }
  },
})
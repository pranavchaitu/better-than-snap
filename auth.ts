import { PrismaClient } from "@prisma/client"
import NextAuth, { Session } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const client = new PrismaClient()
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider
  ],
  callbacks : {
    async jwt({ token,account,profile }) {
      if(account?.provider == 'google') {
        const user = await client.user.findFirst({
          where : {
            email : profile?.email!
          }
        })
        if(!user) {
          const user = await client.user.create({
            data : {
              email : profile?.email!,
              name : profile?.nickname!,
              profileUrl : profile?.picture,
              username : profile?.name!
            }
          })
          token.id = user.id
        }
      }
      return token
    },
    session({ session,token } : any) {
      session.user.id = token.id
      return session
    }
  },
})
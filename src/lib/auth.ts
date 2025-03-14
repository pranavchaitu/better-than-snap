import NextAuth, { DefaultSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { createUser, findUser } from "./actions";

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
        let currentUser = await findUser(profile?.email!)
        if(currentUser?.id) {
          token.id = currentUser.id
        } else {
          let newUser = await createUser({
            name : profile?.name!,
            email : profile?.email!,
            profileUrl : profile?.picture!
          });
          if(newUser) token.id = newUser.id
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
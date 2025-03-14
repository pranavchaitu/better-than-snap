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
        if(currentUser) {
          token.id = currentUser.id
        } else {
          let newUser = await createUser({
            name : profile?.name!,
            email : profile?.email!,
            profileUrl : profile?.picture!
          });
          token.id = newUser.id
        }
      }
      return token
      //   let user = await client.user.findFirst({
      //     where : {
      //       email : profile?.email!
      //     }
      //   })
      //   if(!user?.id) { 
      //     try {            
      //       const newUser = await client.user.create({
      //         data : {
      //           email : profile?.email!,
      //           profileUrl : profile?.picture,
      //           username : profile?.name!
      //         }
      //       })
      //       token.id = newUser.id
      //     } catch (error) {
      //       console.log(error)
      //     }
      //   } else {
      //     token.id = user?.id
      //   }
      // }
      // return token
    },
    session({ session,token } : any) {
      session.user.id = token.id
      return session
    }
  },
})
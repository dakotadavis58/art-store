import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  // callbacks: {
  //   async redirect({ url, baseUrl }) {
  //     const redirectInURL = new URLSearchParams(url).get("redirect");
  //     console.log("redirectInURL", redirectInURL);
  //     const redirect = redirectInURL ? redirectInURL : "/";
  //     console.log("redirect", redirect);
  //     console.log("url", url);
  //     return redirect;
  //   },
  // },

  pages: {
    signIn: "/signin",
  },
};

export default NextAuth(authOptions);

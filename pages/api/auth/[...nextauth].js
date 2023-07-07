import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { baseUrl } from "../../../api/api";

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize({ employeeId, password }) {
        const res = await fetch(`${baseUrl}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            employeeId,
            password,
          }),
        });
        console.log(res.refreshToken);
        const user = await res.json();

        if (res.ok && user) {
          return user.data;
        } else return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      if (token?.knowledgeAccesses)
        session.user.knowledgeAccesses = token.knowledgeAccesses;
      if (token?.accessToken) session.user.accessToken = token.accessToken;
      if (token?.profileImage) session.user.profileImage = token.profileImage;
      if (token?.profileImage) session.user.image = token.profileImage;
      if (token?.employeeId) session.user.employeeId = token.employeeId;
      if (token?.role) session.user.role = token.role;
      return session;
    },
  },
});

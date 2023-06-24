import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { baseUrl } from "../../../api/api";

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize({ employeeId, password }) {
        // try {
        //   const {
        //     data: { data },
        //   } = await axios.post(
        //     `${baseUrl}/auth/login`,
        //     {
        //       employeeId,
        //       password,
        //     },
        //     { withCredentials: true, credentials: "include" }
        //   );

        //   return data;
        // } catch (error) {
        //   throw new Error(error.response.data.message);
        // }
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
      if (user?._id) token._id = user._id;
      if (user?.isAdmin) token.isAdmin = user.isAdmin;
      return { ...token, ...user };
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      if (token?.accessToken) session.user.accessToken = token.accessToken;
      if (token?.profileImage) session.user.profileImage = token.profileImage;
      if (token?.employeeId) session.user.employeeId = token.employeeId;
      if (token?.role) session.user.role = token.role;
      return session;
    },
  },
});

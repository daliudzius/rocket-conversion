import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import jwt from "jsonwebtoken"

export default NextAuth({
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token, account, user, profile }) {
      token["https://hasura.io/jwt/claims"] = {
        "x-hasura-default-role": "user",
        "x-hasura-allowed-roles": ["user", "anonymous"],
        "x-hasura-user-id": token.sub,
      }
      return token
    },
  },
  jwt: {
    encode: async ({ secret, token }) => {
      return jwt.sign(token, secret, { algorithm: "HS256" })
    },
    decode: async ({ secret, token }) => {
      return jwt.verify(token, secret)
    },
  },
})

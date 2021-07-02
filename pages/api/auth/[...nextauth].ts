import { NextApiHandler } from "next";
import NextAuth from 'next-auth'
import Providers from "next-auth/providers"
import Adapters from "next-auth/adapters"

import prisma from '../../../lib/prisma'
import { sendVerificationRequest } from '../../../lib/email'

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Email({
      // server: process.env.EMAIL_SERVER,
      // from: process.env.EMAIL_FROM,
      sendVerificationRequest
    })
  ],
  // pages: {
  //   signIn: "/signin",
  // },
  adapter: Adapters.Prisma.Adapter({
    prisma,
  }),
  callbacks: {
    session: async (session, user) => {
      session.userId = user.id;    
      return Promise.resolve(session);
    }
  },
  secret: process.env.SECRET
}

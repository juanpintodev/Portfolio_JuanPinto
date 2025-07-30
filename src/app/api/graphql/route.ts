import { NextApiRequest, NextApiResponse } from 'next'
import { apolloServer } from '@/lib/graphql'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}

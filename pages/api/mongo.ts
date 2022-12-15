import clientPromise from 'lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // Process a POST request
    try {
      const client = await clientPromise
      const db = client.db()
      console.log(db)
      // `await clientPromise` will use the default database passed in the MONGODB_URI
      // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
      //
      // `const client = await clientPromise`
      // `const db = client.db("myDatabase")`
      //
      // Then you can execute queries against your database like so:
      // db.find({}) or any of the MongoDB Node Driver commands

      return {
        props: { isConnected: true },
      }
    } catch (e) {
      console.error(e)
      return {
        props: { isConnected: false },
      }
    }
  } else {
    // Handle any other HTTP method
  }
}

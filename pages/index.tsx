import { Button, styled } from '@mui/material'
import clientPromise from '../lib/mongodb'

export async function getServerSideProps(_context: any) {
  try {
    await clientPromise
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
}

export default function Home(props: any) {
  return (
    <div className="container">
      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js with MongoDB!</a>
      </h1>

      {props.isConnected ? (
        <h2 className="subtitle">You are connected to MongoDB</h2>
      ) : (
        <h2 className="subtitle">
          You are NOT connected to MongoDB. Check the <code>README.md</code> for
          instructions.
        </h2>
      )}
      <SButton>Styled Button</SButton>
    </div>
  )
}

const SButton = styled(Button)`
  color: red;
  background-color: white;
  width: 100px;
  height: 50px;

  &:hover {
    color: white;
    background-color: red;
  }
`

import Link from 'next/link'
import Head from 'next/head'



export default function FirstPost() {
  return (
    <>
      <Head>
          <title>First Post</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"></link>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}

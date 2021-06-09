import Head from 'next/head'
import { Header } from '../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next App</title>
      </Head>

      <main>
        <Header />
        {/* <h1>Página Inicial</h1> */}
      </main>
    </div>
  )
}

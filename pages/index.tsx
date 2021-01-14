import Link from 'next/link'
import Layout from '../components/Layout'
import SimpleCard from '../components/Card'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>🏯日本100名城紹介サイト🏯</h1>
    <p>
      <SimpleCard/> 
    </p>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage

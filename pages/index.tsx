import Link from 'next/link'
import Layout from '../components/Layout'
import RegionGrid from '../components/RegionGrid'
import { CastleInfoRegionArray } from '../utils/castle-100-data'

const IndexPage = () => (
  <div className="container mx-auto">
    <Layout title="日本100名城">
      <h1 className="text-blue-700 text-4xl container mx-auto">🏯日本100名城紹介サイト🏯</h1>
      <RegionGrid castleInfoRegionArray={CastleInfoRegionArray} />
      <p>
        <Link href="/about">
          <a className="mb-4 text-green-500 text-3xl">About</a>
        </Link>
      </p>
    </Layout>
  </div>
)

export default IndexPage
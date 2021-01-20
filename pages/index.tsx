import Layout from '../components/Layout'
import RegionGrid from '../components/RegionGrid'
import { CastleInfoRegionArray } from '../utils/castle-100-data'

const IndexPage = () => (
  <div className="container mx-auto">
    <Layout title="日本100名城">
      <h1 className="text-blue-700 text-5xl mt-5 text-center">🏯日本100名城紹介サイト🏯</h1>
      <RegionGrid castleInfoRegionArray={CastleInfoRegionArray} />
    </Layout>
  </div>
)

export default IndexPage
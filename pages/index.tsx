import Layout from '../components/Layout'
import RegionGrid from '../components/RegionGrid'
import BasicTextFields from '../components/TextField'
import { CastleInfoRegionArray } from '../utils/castle-100-data'

const IndexPage = () => (
  <div className="container mx-auto">
    <Layout title="日本100名城">
      <h1 className="text-blue-700 text-5xl mt-5 text-center"></h1>
      <BasicTextFields />
      <RegionGrid castleInfoRegionArray={CastleInfoRegionArray} />
    </Layout>
  </div>
)

export default IndexPage
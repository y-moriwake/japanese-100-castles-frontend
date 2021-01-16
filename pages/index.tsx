import Link from 'next/link'
import Layout from '../components/Layout'
import NestedGrid from '../components/Grid'
import { CastleInfo } from '../interfaces/CastleInfo'

const CastleInfoArray: CastleInfo[] = [
  { id: 0, regionalName: '岡山城', castlesName: '岡山県' },
  { id: 1, regionalName: '広島城', castlesName: '広島県' },
  { id: 2, regionalName: '山口城', castlesName: '山口県' },
  { id: 3, regionalName: '岡山城', castlesName: '岡山県' },
  { id: 4, regionalName: '広島城', castlesName: '広島県' },
  { id: 5, regionalName: '山口城', castlesName: '山口県' },
  { id: 6, regionalName: '岡山城', castlesName: '岡山県' },
  { id: 7, regionalName: '広島城', castlesName: '広島県' },
  { id: 8, regionalName: '山口城', castlesName: '山口県' },
]

const IndexPage = () => (
  <div className="container mx-auto">
    <Layout title="日本100名城">
      <h1 className="text-blue-700 text-3xl">🏯日本100名城紹介サイト🏯</h1>
      <NestedGrid castleInfos={CastleInfoArray} />
      <p>
        <Link href="/about">
          <a className="mb-4 text-green-500 text-3xl">About</a>
        </Link>
      </p>
    </Layout>
  </div>
)

export default IndexPage
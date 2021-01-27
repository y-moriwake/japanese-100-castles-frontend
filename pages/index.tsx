import React from 'react';
import Layout from '../components/Layout'
import CastleGrid from '../components/CastleGrid'
import { CastleInfos } from '../utils/castle-100-data'

const IndexPage = () => {

  return (
    <div className="container mx-auto" >
      <Layout title="日本100名城">
        <h1 className="m-5 inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-3xl font-medium tracking-widest">日本100名城とは</h1>
        <div className="h-1 w-80 bg-indigo-500 rounded"></div>
        <p className="text-xl mt-5">
          日本100名城（にほん100めいじょう）は、数ある日本の城のうち財団法人日本城郭協会が2006年に定めた名城の一覧である。
        </p>
        <h3>
          <p className="text-xl mt-5 font-black">選定基準</p>
          <li className="mt-1 ml-4">優れた文化財・史跡</li>
          <li className="mt-1 ml-4">著名な歴史の舞台</li>
          <li className="mt-1 ml-4">時代・地域の代表</li>
          <li className="mt-1 ml-4">各都道府県から1城以上5城以内</li>
        </h3>
        <h1 className="text-blue-700 text-5xl mt-5 text-center"></h1>
        <CastleGrid CastleInfos={CastleInfos} />
      </Layout>
    </div >
  )
}

export default IndexPage;
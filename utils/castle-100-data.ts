import { CastleInfoRegion } from '../interfaces/CastleInfo'

export const CastleInfoRegionArray: CastleInfoRegion[] = [
    {
      regionalName: '北海道/東北',
      prefectures: [
        { prefecturesName: '北海道', castleInfos: [
          { id: 0, castlesName: '根室半島チャシ跡群', description: '説明' },
          { id: 1, castlesName: '五稜郭', description: '上から見たときの姿が綺麗' },
          { id: 2, castlesName: '松前城', description: '説明' }
        ]},
        { prefecturesName: '青森県', castleInfos: [
          { id: 3, castlesName: '弘前城', description: '説明' },
          { id: 4, castlesName: '根城', description: '説明' }
        ]},
        { prefecturesName: '岩手県', castleInfos: [
          { id: 5, castlesName: '盛岡城', description: '説明' },
          { id: 6, castlesName: '仙台城', description: '説明' }
        ]},
        { prefecturesName: '宮城県', castleInfos: [
          { id: 7, castlesName: '多賀城', description: '説明' }
        ]},
        { prefecturesName: '山形県', castleInfos: [
          { id: 8, castlesName: '山形城', description: '説明' }
        ]},
        { prefecturesName: '福島県', castleInfos: [
          { id: 9, castlesName: '二本松城', description: '説明' },
          { id: 10, castlesName: '会津若松城', description: '説明' },
          { id: 11, castlesName: '白河小峰城', description: '説明' }
        ]},
      ]
    },
  ]
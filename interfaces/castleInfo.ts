// お城情報
export type CastleInfo = {
    id: number
    castlesName: string
    description: string
}

// 都道府県ごとのお城
export type CastleInfoPrefectures = {
    prefecturesName: string,
    castleInfos: CastleInfo[]
}

// 地方と都道府県
export type CastleInfoRegion = {
    regionalName: string,
    prefectures: CastleInfoPrefectures[]
}
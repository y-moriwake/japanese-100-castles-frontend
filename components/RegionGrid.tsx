import React from 'react';
import { CastleInfoRegion } from '../interfaces/CastleInfo';
import PrefecturesGrid from './PrefecturesGrid';

type Props = {
  castleInfoRegionArray: CastleInfoRegion[]
}

const RegionGrid = ({ castleInfoRegionArray }: Props) => {
  return (
    <React.Fragment>
      {castleInfoRegionArray.map((castleInfoRegion ,i) =>
        <React.Fragment key={i}>
          <h1 className="m-5 inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-3xl font-medium tracking-widest">{castleInfoRegion.regionalName}</h1>
          <div className="h-1 w-80 bg-indigo-500 rounded"></div>
          <PrefecturesGrid castleInfoPrefectures={castleInfoRegion.prefectures}/>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default RegionGrid;
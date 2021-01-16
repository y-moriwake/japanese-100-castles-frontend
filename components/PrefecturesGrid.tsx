import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CastleInfoPrefectures } from '../interfaces/CastleInfo';
import SimpleCard from './CastleCard';

type Props = {
  castleInfoPrefectures: CastleInfoPrefectures[]
}

const PrefecturesGrid = ({ castleInfoPrefectures }: Props) => {
  return (
    <React.Fragment>
      {castleInfoPrefectures.map((castleInfoPrefecture ,i) =>
        <React.Fragment key={i}>
          <h1 className="m-4 inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-1xl font-medium tracking-widest">{castleInfoPrefecture.prefecturesName}</h1>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {castleInfoPrefecture.castleInfos.map((castleInfo) =>
                <Grid item xs={4} key={castleInfo.id}>
                  <SimpleCard castlesName={castleInfo.castlesName} prefectures={castleInfo.description}/>
                </Grid>
              )}
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default PrefecturesGrid;
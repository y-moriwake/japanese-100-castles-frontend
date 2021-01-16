import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CastleInfo } from '../interfaces/CastleInfo';
import SimpleCard from './Card';

type Props = {
  castleInfos: CastleInfo[]
}

const NestedGrid = ({ castleInfos }: Props) => {

  return (
    <div className="bg-white">
      <h1 className="m-5 inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-5xl font-medium tracking-widest">中国地方</h1>
      <div className="h-1 w-80 bg-indigo-500 rounded"></div>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {castleInfos.map((castleInfo) =>
              <Grid item xs={3} key={castleInfo.id}>
                <SimpleCard regionalName={castleInfo.regionalName} castlesName={castleInfo.castlesName} />
              </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default NestedGrid;
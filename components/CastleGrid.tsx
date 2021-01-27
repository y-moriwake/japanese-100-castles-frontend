import React, { ChangeEvent, Fragment, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { CastleInfo } from '../interfaces/CastleInfo';
import SimpleCard from './CastleCard';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '35rem',
      },
    },
  }),
);

type Props = {
  CastleInfos: CastleInfo[];
}

const CastleGrid = ({ CastleInfos }: Props) => {
  const classes = useStyles();

  const [castles, setCastles] = useState(CastleInfos);
  const [searchText, setSearchText] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
    if (searchText.trim() === '') return setCastles(CastleInfos);
    const filteredCastles = CastleInfos.filter((castle) => {
      return castle.castlesName.indexOf(searchText) !== -1;
    })
    setCastles(filteredCastles);
  }

  return (
    <Fragment>
      <h1 className="m-5 inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-3xl font-medium tracking-widest">日本100名城一覧</h1>
      <div className="h-1 w-80 bg-indigo-500 rounded"></div>
      <div className="mt-5">
        <TextField onChange={handleChange} className={classes.root} id="outlined-basic" label="100名城を検索する(城名で検索)🏯" variant="outlined" />
      </div>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {castles.map((castleInfo) =>
            <Grid item xs={4} key={castleInfo.id}>
              <div className="mt-5"></div>
              <SimpleCard castlesName={castleInfo.castlesName} prefecturesName={castleInfo.prefecturesName} dicsription={castleInfo.description} />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default CastleGrid;
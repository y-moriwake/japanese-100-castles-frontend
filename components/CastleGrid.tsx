import React, { useEffect, ChangeEvent, Fragment, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { CastleInfo } from '../interfaces/CastleInfo';
import CastleCard from './CastleCard';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { castlesApi } from '../api/castlesApi'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '35rem',
      },
    },
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

const CastleGrid = () => {
  const classes = useStyles();

  const [initCastles, setInitCastles] = useState<CastleInfo[]>([]);
  const [castles, setCastles] = useState<CastleInfo[]>([]);

  const initial100Castle = async () => {
    const castles = await castlesApi.getTop100()
    setInitCastles(castles)
    setCastles(castles)
  }

  useEffect(() => {
    initial100Castle()
  }, [setCastles]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const searchText = event.target.value.trim()
    const filteredCastles = initCastles.filter((castle) => {
      return castle.name.indexOf(searchText) !== -1 || castle.prefecture.indexOf(searchText) !== -1;
    })
    setCastles(filteredCastles);
  }

  const changeNationalTreasure = async () => {
    const castles = await castlesApi.getNationalTreasure()
    setCastles(castles);
  }

  const changeExisting = async () => {
    const castles = await castlesApi.getExistence()
    setCastles(castles);
  }

  return (
    <Fragment>
      <h1 className="m-5 inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-3xl font-medium tracking-widest">日本100名城一覧</h1>
      <div className="h-1 w-80 bg-indigo-500 rounded"></div>
      <div className="mt-5">
        <TextField size="medium" onChange={handleChange} className={classes.root} id="outlined-basic" label="100名城を検索する(城名/都道府県名で検索)🏯" variant="outlined" />
      </div>
      <div className={classes.margin}>
        <Tooltip title="100名城全てを表示します。" aria-label="discription">
          <Button className={classes.margin} variant="contained" color="default" startIcon={<SearchIcon />} onClick={initial100Castle}>100名城全表示</Button>
        </Tooltip>
        <Tooltip title="天守が国宝に指定されている5つのお城のことです。" aria-label="discription">
          <Button className={classes.margin} variant="contained" color="default" startIcon={<SearchIcon />} onClick={changeNationalTreasure}>国宝5城</Button>
        </Tooltip>
        <Tooltip title="「現存天守」とは、江戸時代以前に建設された天守が現在も保存された姿で残っている天守閣のことです。" aria-label="discription">
          <Button className={classes.margin} variant="contained" color="default" startIcon={<SearchIcon />} onClick={changeExisting}>現存12天守</Button>
        </Tooltip>
      </div>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {castles.map((castleInfo) =>
            <Grid item xs={4} key={castleInfo.id}>
              <h1 className="m-4 inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-1xl font-medium tracking-widest">{castleInfo.prefecture}</h1>
              <CastleCard castleInfo={castleInfo} />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Fragment >
  );
};

export default CastleGrid;
import React, { ChangeEvent, Fragment, useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { CastleInfo } from '../interfaces/CastleInfo';
import CastleCard from './CastleCard';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

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
      return castle.name.indexOf(searchText) !== -1;
    })
    setCastles(filteredCastles);
  }

  const initial100Castle = () => {
    axios.get(`http://localhost:8000/api/castles/`)
      .then(res => {
        console.log(res.data)
        setCastles(res.data);
      })
    //        setCastles(CastleInfos);
  }

  const changeNationalTreasure = () => {
    const nationalTreasure: CastleInfo[] = [
      { id: 28, name: '松本城', prefecture: '長野県', address: '日本', description: '説明' },
      { id: 42, name: '犬山城', prefecture: '愛知県', address: '日本', description: '説明' },
      { id: 49, name: '彦根城', prefecture: '滋賀県', address: '日本', description: '説明' },
      { id: 58, name: '姫路城', prefecture: '兵庫県', address: '日本', description: '説明' },
      { id: 63, name: '松江城', prefecture: '島根県', address: '日本', description: '説明' },
    ]
    setCastles(nationalTreasure);
  }

  const changeExistingCastle = () => {
    const existingCastle: CastleInfo[] = [
      { id: 3, name: '弘前城', prefecture: '青森県', address: '日本', description: '説明' },
      { id: 35, name: '丸岡城', prefecture: '福井県', address: '日本', description: '説明' },
      { id: 28, name: '松本城', prefecture: '長野県', address: '日本', description: '説明' },
      { id: 42, name: '犬山城', prefecture: '愛知県', address: '日本', description: '説明' },
      { id: 49, name: '彦根城', prefecture: '滋賀県', address: '日本', description: '説明' },
      { id: 58, name: '姫路城', prefecture: '兵庫県', address: '日本', description: '説明' },
      { id: 63, name: '松江城', prefecture: '島根県', address: '日本', description: '説明' },
      { id: 67, name: '備中松山城', prefecture: '岡山県', address: '日本', description: '説明' },
      { id: 77, name: '丸亀城', prefecture: '香川県', address: '日本', description: '説明' },
      { id: 80, name: '松山城', prefecture: '愛媛県', address: '日本', description: '説明' },
      { id: 82, name: '宇和島城', prefecture: '愛媛県', address: '日本', description: '説明' },
      { id: 83, name: '高知城', prefecture: '高知県', address: '日本', description: '説明' },
    ]
    setCastles(existingCastle);
  }

  const changeMountainCastle = () => {
    const yamajiro: CastleInfo[] = [
      { id: 37, name: '岩村城', prefecture: '岐阜県', address: '日本', description: '説明' },
      { id: 60, name: '高取城', prefecture: '奈良県', address: '日本', description: '説明' },
      { id: 67, name: '備中松山城', prefecture: '岡山県', address: '日本', description: '説明' },
    ]
    setCastles(yamajiro);
  }

  return (
    <Fragment>
      <h1 className="m-5 inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-3xl font-medium tracking-widest">日本100名城一覧</h1>
      <div className="h-1 w-80 bg-indigo-500 rounded"></div>
      <div className="mt-5">
        <TextField size="medium" onChange={handleChange} className={classes.root} id="outlined-basic" label="100名城を検索する(城名で検索)🏯" variant="outlined" />
      </div>
      <div className={classes.margin}>
        <Tooltip title="100名城全てを表示します。" aria-label="discription">
          <Button className="arrow_box" variant="contained" color="default" startIcon={<SearchIcon />} onClick={initial100Castle}>100名城全表示</Button>
        </Tooltip>
        <Tooltip title="天守が国宝に指定されている5基のことです。" aria-label="discription">
          <Button className={classes.margin} variant="contained" color="default" startIcon={<SearchIcon />} onClick={changeNationalTreasure}>国宝5城</Button>
        </Tooltip>
        <Tooltip title="「現存天守」とは、江戸時代以前に建設された天守が現在も保存された姿で残っている天守閣のことです。" aria-label="discription">
          <Button className={classes.margin} variant="contained" color="default" startIcon={<SearchIcon />} onClick={changeExistingCastle}>現存12天守</Button>
        </Tooltip>
        <Tooltip title="日本で有名な3つの山城です。岩村城は日本一標高が高く、松山城は天守閣が現存する唯一の山城、高取城は日本一比高（山頂と麓の高低差）の高い城です" aria-label="discription">
          <Button className={classes.margin} variant="contained" color="default" startIcon={<SearchIcon />} onClick={changeMountainCastle}>日本3大山城</Button>
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
}

export default CastleGrid;
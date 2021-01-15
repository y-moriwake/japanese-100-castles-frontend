import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { CastleInfo } from '../interfaces/castleInfo';
import SimpleCard from './Card';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin:10,
      backgroundColor: "#92b5a9",
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

type Props = {
  castleInfos: CastleInfo[]
}

const NestedGrid = ({ castleInfos }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>中国地方</h1>
      <Grid item xs={12}>
      <Grid container spacing={2}>
        {castleInfos.map((castleInfo) =>
          <Grid item xs={3} key={castleInfo.id}>
            <SimpleCard regionalName={castleInfo.regionalName} castlesName={castleInfo.castlesName} id={castleInfo.id}/>
          </Grid>
        )}
      </Grid>
      </Grid>
    </div>
  );
}

export default NestedGrid;
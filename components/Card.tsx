import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CastleInfo } from '../interfaces/CastleInfo'

const useStyles = makeStyles({
  root: {
    margin:10,
    backgroundColor: "#89c3eb",
  },
  title: {
    fontSize: 15,
  },
  pos: {
    marginBottom: 12,
  },
});

function SimpleCard({ regionalName, castlesName, id}: CastleInfo) {
    const classes = useStyles();

    return (
        <Card className={classes.root} key={id}>
            <CardContent>
                <Typography variant="h4" component="h2">
                    {regionalName}
                </Typography>
                <Typography variant="body2" component="p">
                    {castlesName}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>  
        </Card>
    );
}

export default SimpleCard;
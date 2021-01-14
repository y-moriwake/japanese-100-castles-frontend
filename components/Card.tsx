import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 50,
    maxWidth: 300,
    backgroundColor: "#4169e1",
  },
  title: {
    fontSize: 15,
  },
  pos: {
    marginBottom: 12,
  },
});

const SimpleCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h2" component="h2">
          岡山城
        </Typography>
        <Typography variant="body2" component="p">
          岡山県
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default SimpleCard;
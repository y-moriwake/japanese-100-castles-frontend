import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      margin:10,
      backgroundColor: "#89c3eb",
    },
  });

type Props = {
    regionalName: string,
    castlesName: string
}

function SimpleCard({ regionalName, castlesName }: Props) {
    const classes = useStyles();

    return (
            <Card className={classes.root} >
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
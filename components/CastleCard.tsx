import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        margin: 10,
        backgroundColor: "#dddcd6",
    },
});

type Props = {
    castlesName: string
    prefectures: string
}

const SimpleCard = ({ castlesName, prefectures }: Props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {castlesName}
                </Typography>
                <Typography variant="body2" component="p">
                    {prefectures}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default SimpleCard;
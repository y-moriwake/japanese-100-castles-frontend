import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    root: {
        maxWidth: 385,
        backgroundColor: "#dddcd6"
    },
    media: {
        height: 180,
    },
});

type Props = {
    castlesName: string
    prefecturesName: string
    dicsription: string
}

const CastleCard = ({ castlesName, prefecturesName, dicsription }: Props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/images/himeji.jpg"
                    title="himeji castle"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {castlesName}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h3">
                        {prefecturesName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {dicsription}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
          </Button>
                <Button size="small" color="primary">
                    Learn More
          </Button>
            </CardActions>
        </Card>
    );
}

export default CastleCard;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './landing.css'
import { BrowserRouter as Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    button: {
        padding: 8,
    }
});

export default function CardLanding(props) {
    const classes = useStyles();
    // const { t } = props;

    return (
        <div className="individualCardLanding">
            <Card className={classes.card}>
                <CardActionArea>
                    {/* <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.d.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.d.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <div className = "landingButton">
                        <Button size="small" color="default" variant="outlined" href={props.d.link} >
                        {props.d.button}
                    </Button>
                    </div>
                   
                </CardActions>
            </Card>
        </div>
    );
}


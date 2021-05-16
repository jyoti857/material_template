
import { Card, CardActionArea, CardContent, CardMedia, createStyles, Grid, Hidden, makeStyles, Theme, Typography } from '@material-ui/core';
import * as React from 'react';

const useStyles=makeStyles((theme: Theme) => createStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160
  },
}))
interface FeaturedPostProps {
  post: any
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({post}) => {
  const classes=useStyles();
  return(
    <Grid item xs={6} md={6}>
      <CardActionArea component='a' href='#'>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden>
            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle}/>
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  ) ;
};

export default FeaturedPost;

import { Button, Card, CardActions, CardContent, CardMedia, createStyles, Grid, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { templatesData } from './templatesData'


const useStyles = makeStyles((theme: Theme) =>  createStyles({
  main: {
    padding: theme.spacing(3),
    width: `${100-12}%`,
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto'
  }, 
  item: {
    flexGrow: 1,
  },
  card: {
    // margin: theme.spacing(2),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    height: 0,
    paddingTop: '65%',
  },
}))
interface TemplatesProps {
}
const Templates: React.FC<TemplatesProps> = (props) => {
  const classes = useStyles();
  return(
    <Grid container spacing={2} className={classes.main}>
      {
        templatesData.map((td => {
          return(
            <Grid key = {td.title} className={classes.item}
              item sm={6} xs={12} md={6} lg={4} justify='center'>
              <Card className={classes.card}>
                <CardMedia 
                  component='a'
                  href={td.href}
                  image={td.src}
                  title={td.title}
                  rel="nofollow"
                  target="_blank"
                />
                <CardContent className={classes.cardContent}>
                  <CardMedia image='https://source.unsplash.com/random' 
                    className={classes.cardMedia}/>
                </CardContent>
                <CardActions>
                  <Button component='a' href={td.href} variant='contained' size='small' color='secondary'>
                    {td.title}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          
          )
        }))
      }
    </Grid>
  );
};

export default Templates;
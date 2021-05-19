
import { Button, Card, CardActions, CardContent, CardMedia, createStyles, Grid, Theme, Typography } from '@material-ui/core';
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
  card: {
    margin: theme.spacing(2)
  }
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
            <Grid sm={6} xs={12} md={6} lg={4} justify='center'>
              <Card className={classes.card}>
                <CardMedia 
                  component='a'
                  href={td.href}
                  image={td.src}
                  title={td.title}
                  rel="nofollow"
                  target="_blank"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" align="left" component="h2">
                    {td.title}
                  </Typography>
                  <Typography component="p">{td.description}</Typography>
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
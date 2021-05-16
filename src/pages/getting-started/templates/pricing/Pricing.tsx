
import { AppBar, Box, Button, Card, CardActions, CardContent, CardHeader, Container, createStyles, CssBaseline, Grid, Link, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/styles';
import * as React from 'react';
import { Copyright } from '../utils';
import { footers, tiers } from './pricingData';
import StarIcon from '@material-ui/icons/StarBorder'


const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    '@global': {
      ui: {
        margin: 0,
        padding: 0,
        listStyle: 'none'
      }
    },
    appbar: {
      borderBottom: `2px solid ${theme.palette.divider}`
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 2.3),
    },
    cardHeader: {
      backgroundColor: 
        theme.palette.type ==='light' ? theme.palette.grey[200]: theme.palette.grey[700]
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2)
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6)
      }
    }
  })
)
interface PricingProps {
}

const Pricing: React.FC<PricingProps> = (props) => {
  const {  heroContent, cardHeader, cardPricing, footer, ...classes }: ClassNameMap<"toolbar" | "@global" | "appbar" | "toolbarTitle" | 
    "link" | "heroContent" | "footer" | "cardHeader" | "cardPricing"> = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appbar} color='default' elevation={1}>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h6' color='inherit' className={classes.toolbarTitle}>
            Company name
          </Typography>
          <nav>
            <Link variant='button' color='textPrimary' href='#' className={classes.link}>
              Features
            </Link>
            <Link variant='button' color='textPrimary' href='#' className={classes.link}>Enterprise</Link>
            <Link variant='button' color='textPrimary' href='#' className={classes.link}>Support</Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>Login</Button>
        </Toolbar>
      </AppBar>
      {/* hero unit */}
      <Container maxWidth='sm' component='main' className={heroContent}>
        <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>Pricing</Typography>
        <Typography variant='h5' component='p' align='center' color='textSecondary'>
          Quickly build an effective pricing table for your potential customers with this layout.
          It&apos;s built with default Material-UI components with little customization.
        </Typography>
      </Container>
      {/* hero unit */}
      <Container  maxWidth="md" component='main'>
        <Grid container spacing={5} alignItems="flex-end">
          {
            tiers.map((tier) => {
              return(
                <Grid key={tier.title} item xs={12}
                  sm={tier.title==='Enterprise' ? 12 : 6}
                  md={4}
                >
                  <Card>
                    <CardHeader
                      title={tier.title}
                      subHeader={tier.subheader}
                      titleTypographyProps={{align: 'center'}}
                      action={tier.title==="Pro" ? <StarIcon /> : null}
                      className={cardHeader}
                    />
                    <CardContent>
                      <div className={cardPricing}>
                        <Typography
                         variant='h3'
                         color='textPrimary'
                        >{tier.price}</Typography>
                        <Typography variant='h6' color='textSecondary'>/mo</Typography>
                      </div>
                      <ul>
                        {tier.description.map((line) => {
                          return(
                            <Typography  component="li" variant="subtitle1" align="left" key={line}>
                              {line}
                            </Typography>
                          )
                        })}
                      </ul>
                    </CardContent>
                    <CardActions>
                      <Button fullWidth variant={tier.buttonVariant} color='primary'>{tier.buttonText}</Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
      <Container maxWidth='md' component='footer'
        className={footer}>
        <Grid container spacing={4} justify='space-evenly'>
          {
            footers.map((footer) => {
              return(
                <Grid item xs={6} sm={3} key={footer.title}>
                  <Typography
                    variant='h6' color='textPrimary' gutterBottom
                  >{footer.title}</Typography>
                  <ul>
                    {footer.description.map((item) =>{
                      return(
                        <li key={item}>
                          <Link href='#' variant='subtitle1' color='textSecondary'>{item}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </Grid>
              )
            })
          } 
        </Grid>
        <Box  mt={5}>
            <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Pricing;
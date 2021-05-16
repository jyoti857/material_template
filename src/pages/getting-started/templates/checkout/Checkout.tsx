
import { AppBar, Button, createStyles, makeStyles, Paper, Step, StepLabel, Stepper, Toolbar, Typography } from '@material-ui/core';
import * as React from 'react';
import { Copyright } from '../utils';

const useStyles = makeStyles((theme) => createStyles({
  appbar: {
    position: 'relative'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2)*2)]:{
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3)*2)]:{
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons:{
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}))

const steps = ['Shipping address', 'Payment details', 'Review your order'];
const getStepContent = (step: number) => {
  switch(step){
    case 0: 
      return <div>Address form</div>
    case 1: 
      return <div>Address form</div>
    case 2: 
      return <div>Address form</div>
    default: 
      throw new Error("unknown step")
  }
}
interface CheckoutProps {
}

const Checkout: React.FC<CheckoutProps> = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0)
  const handleNext = () => setActiveStep(prevState => prevState+1)
  const handleBack = () => setActiveStep(prevState => prevState-1)
  return (
    <React.Fragment>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography color='inherit' variant='h6' noWrap>
            INsightX
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component='h2' variant='h4' align='center'>
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => {
              return(
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              )
            })}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant='h5' gutterBottom>
                  Thank you for the order
                </Typography>
                <Typography variant='subtitle1'>
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ):(
              <React.Fragment>

                 {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {
                    activeStep !==0 &&(
                      <Button
                        onClick={handleBack}
                        className={classes.button}
                      >Back</Button>
                      )
                    }
                  <Button
                    onClick={handleNext}
                    color='primary'
                    className={classes.button}
                    variant='contained'
                  >
                    {activeStep === steps.length-1 ? 'Place Order': 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
};

export default Checkout;
import {FC, useState} from "react"
import { Badge, Box, Container, createStyles, CssBaseline, Divider, Drawer, Grid, IconButton, Link, List, Paper, Theme, Toolbar, Typography } from '@material-ui/core';
import AppBar  from '@material-ui/core/AppBar';
import { ClassNameMap, makeStyles } from "@material-ui/styles";
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Chart from "./Chart";
import Deposits from "./Deposits";
import Order from "./Order";
import {MainListItems, secondaryListItems} from './ListItems'

const drawerWidth = 240;
const useStyles = makeStyles((theme?: Theme) => 
  createStyles({
    root: {
      display: 'flex'
    },
    toolbar: {
      paddingRight: 24
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transitions: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36, 
    },
    menuButtonHidden: {
      display: 'none'
    }, 
    title: {
      flexGrow: 1
    },
    drawerPaper: {
      position: 'relative',
      width: drawerWidth,
      whiteSpace: "nowrap",
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9)
      }
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column'
    },
    fixedHeight: {
      height: 240
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: 'auto'
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    }
  })
);

function copyright(){
  return(
    <Typography variant='body2' color='textSecondary' align='center'>
      <Link color='inherit' href='google.com'>
        google
      </Link> {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const Dashboard: FC<any> = () =>{
  const [open, setOpen] = useState(true);
  const classes: ClassNameMap<"toolbar" | "root" | "toolbarIcon"
  | 'appBar' | 'appBarShift' | "menuButton" | "menuButtonHidden" | 'title' |
  "drawerPaper" | "drawerPaperClose" | "paper" | "fixedHeight" | "container" | "content" | "appBarSpacer"
  > = useStyles();
  const handleDrawerClose = () => setOpen(false)
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className = {classes.root}>
      <CssBaseline />

      <AppBar position = 'absolute' className = {clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className = {classes.toolbar}>
          <IconButton 
            edge = 'start'
            color = 'inherit'
            aria-label = 'open drawer'
            className = {clsx(classes.menuButton, open && classes.menuButtonHidden)}
            onClick = {handleDrawerOpen}
          >
          <MenuIcon />
        </IconButton> 
        <Typography
          component = 'h1' variant = 'h6' color = 'inherit' noWrap className = {classes.title}
        >
          Dashboard
        </Typography>
        <IconButton color = 'inherit'>
          <Badge badgeContent = {3} color = 'secondary'>
            <NotificationsIcon />  
          </Badge> 
        </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer 
        variant = 'permanent'
        open = {open}
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
      >
        <div className = {classes.toolbarIcon}>
          <IconButton onClick = {handleDrawerClose}>
            <ChevronLeftIcon />  
          </IconButton>  
        </div>
        <Divider /> 
        <List>
          {MainListItems}
        </List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className ={classes.content}>
        <div className = {classes.appBarSpacer}/>
        <Container maxWidth = 'lg'
          className={classes.container}
        >
          <Grid
            container spacing={3}
          >
           <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
          <Grid item xs = {12} md = {8} lg = {9}>
            <Paper className = {fixedHeightPaper}>
              <Deposits />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              <Order />
            </Paper>
          </Grid>
        </Grid>
          <Box pt={4}>
            {copyright()}
          </Box>
        </Container>
      </main>
    </div>
  )
}
export default Dashboard;
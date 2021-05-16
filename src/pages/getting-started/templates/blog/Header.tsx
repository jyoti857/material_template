

import { Button, createStyles, IconButton, Link, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import * as React from 'react';
import SearchIcon from '@material-ui/icons/Search'

const useStyles=makeStyles((theme: Theme) => createStyles({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },

}))
interface HeaderProps {
  sections: any;
  title: string;
}

const Header: React.FC<HeaderProps> = ({sections, title}) => {
  const classes=useStyles();
  return(
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button>Subscribe</Button>
        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar  component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => {
          return(
            <Link 
              key={section.title}  
              href={section.url}
              color='inherit'
              noWrap
              variant='body2'
              className={classes.toolbarLink}
            >{section.title}</Link>
          )
        })}
      </Toolbar>
    </React.Fragment>
  );
};

export default Header;
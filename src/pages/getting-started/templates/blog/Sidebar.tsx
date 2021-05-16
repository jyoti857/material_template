

import { createStyles, Grid, Link, Paper, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';

const useStyles=makeStyles((theme: Theme) => createStyles({
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  }
}))
interface SidebarProps {
  archives: any;
  description: any; 
  social: any;
  title: any;
}

const Sidebar: React.FC<SidebarProps> = ({ archives, description, social, title}) => {
  const classes=useStyles();
  return(
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))}
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
};

export default Sidebar;


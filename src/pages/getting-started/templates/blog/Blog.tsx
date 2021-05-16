

import { Container, createStyles, CssBaseline, Grid, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { featuredPosts, mainFeaturedPost, sections, sidebar } from './blogData';
import Header from './Header';
import FeaturedPost from './FeaturedPost';
import MainFeaturedPost from './MainFeaturedPost';
import Sidebar from './Sidebar';

// import * as post1 from './blog-post.1.md';
// import * as post2 from './blog-post.2.md';
// import * as post3 from './blog-post.3.md';

const useStyles = makeStyles((theme: Theme) => createStyles({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}))
interface BlogProps {
}
export const posts = ["post1", "post2", "post3"];
const Blog: React.FC<BlogProps> = (props) => {
  const classes=useStyles();
  return(
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => {
              return (
                <FeaturedPost key={post.title} post={post}/>
              )
            })}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Sidebar 
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
};

export default Blog;
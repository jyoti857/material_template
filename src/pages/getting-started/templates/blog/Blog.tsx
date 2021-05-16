

import { Container, createStyles, CssBaseline, Grid, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { featuredPosts, mainFeaturedPost, sections } from './blogData';
import Header from './Header';
import FeaturedPost from './FeaturedPost';

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
          {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
          <Grid>
            {featuredPosts.map((post) => {
              return (
                <div key={post.title}>
                  <FeaturedPost post={post}/>
                </div>
              )
            })}
          </Grid>
          <Grid className={classes.mainGrid}></Grid>
        </main>
      </Container>
    </React.Fragment>
  );
};

export default Blog;
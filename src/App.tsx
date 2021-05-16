import { createMuiTheme, ThemeProvider, Theme, responsiveFontSizes } from '@material-ui/core/styles';
import { FC, useReducer } from 'react';
import { darkTheme, lightTheme } from './appTheme';

import Dashboard from './pages/getting-started/templates/dahboard/Dashboard'
import Pricing from './pages/getting-started/templates/pricing/Pricing'
import Checkout from './pages/getting-started/templates/checkout/Checkout'
<<<<<<< HEAD
import Signin from './pages/getting-started/templates/signin/Signin'
import StickyFooter from './pages/getting-started/templates/sticky-footer/StickyFooter'
import Blog from './pages/getting-started/templates/blog/Blog'
=======
import Signup from './pages/getting-started/templates/signup/Signup'
import Album from './pages/getting-started/templates/album/Album'
>>>>>>> origin/develop


const  App: FC<any> = (props) => {
  const [useDefaultTheme, toggleTheme] = useReducer((theme) => !theme, true)
  let theme: Theme = createMuiTheme(!useDefaultTheme ? darkTheme : lightTheme);
  return (
    <ThemeProvider theme = {theme}>
      {/* <Dashboard toggleTheme = {toggleTheme}/> */}
      {/* <Pricing toggleTheme={toggleTheme} /> */}
      {/* <Checkout /> */}
<<<<<<< HEAD
      {/* <Signin /> */}
      {/* <StickyFooter /> */}
      <Blog />
=======
      {/* <Signup /> */}
      <Album />
>>>>>>> origin/develop
    </ThemeProvider>
  );
}



export default App;

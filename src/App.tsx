import { createMuiTheme, ThemeProvider, Theme, responsiveFontSizes } from '@material-ui/core/styles';
import { FC, useReducer } from 'react';
import { darkTheme, lightTheme } from './appTheme';

import Dashboard from './pages/getting-started/templates/dahboard/Dashboard'
import Pricing from './pages/getting-started/templates/pricing/Pricing'
import Checkout from './pages/getting-started/templates/checkout/Checkout'
import Signup from './pages/getting-started/templates/signup/Signup'
import Album from './pages/getting-started/templates/album/Album'


const  App: FC<any> = (props) => {
  const [useDefaultTheme, toggleTheme] = useReducer((theme) => !theme, true)
  let theme: Theme = createMuiTheme(!useDefaultTheme ? darkTheme : lightTheme);
  return (
    <ThemeProvider theme = {theme}>
      {/* <Dashboard toggleTheme = {toggleTheme}/> */}
      {/* <Pricing toggleTheme={toggleTheme} /> */}
      {/* <Checkout /> */}
      {/* <Signup /> */}
      <Album />
    </ThemeProvider>
  );
}



export default App;

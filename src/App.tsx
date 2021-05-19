import { createMuiTheme, ThemeProvider, Theme } from '@material-ui/core/styles';
import { FC, useReducer } from 'react';
import { darkTheme, lightTheme } from './appTheme';

import Dashboard from './pages/getting-started/templates/dahboard/Dashboard'
import Pricing from './pages/getting-started/templates/pricing/Pricing'
import Checkout from './pages/getting-started/templates/checkout/Checkout'
import Signin from './pages/getting-started/templates/signin/Signin'
import StickyFooter from './pages/getting-started/templates/sticky-footer/StickyFooter'
import Blog from './pages/getting-started/templates/blog/Blog'
import Signup from './pages/getting-started/templates/signup/Signup'
import Album from './pages/getting-started/templates/album/Album'
import Templates from './pages/getting-started/templates'

import { Router as BrowserRouter, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';

const  App: FC<any> = (props) => {
  const [useDefaultTheme, toggleTheme] = useReducer((theme) => !theme, true)
  let theme: Theme = createMuiTheme(!useDefaultTheme ? darkTheme : lightTheme);
  const history = createBrowserHistory();
  const routesAll: any = () => {
    return (
      <BrowserRouter history={history}>
        <Route exact path='/'>
          <Templates />
        </Route>
        <Switch>
        <Route exact path='/getting-started/templates/dashboard/'>
          <Dashboard toggleTheme={toggleTheme}/>
        </Route>
          <Route exact path='/getting-started/templates/signin'>
            <Signin />
          </Route>
          <Route exact path='/getting-started/templates/signup'>
            <Signup />
          </Route>
          <Route exact path='/getting-started/templates/pricing/'>
            <Pricing toggleTheme={toggleTheme} />
          </Route>
          <Route exact path='/getting-started/templates/blog/'>
            <Blog  />
          </Route>
          <Route exact path='/getting-started/templates/album/'>
            <Album  />
          </Route>
          <Route exact path='/getting-started/templates/checkout/'>
            <Checkout  />
          </Route>
          <Route exact path='/getting-started/templates/sticky-footer/'>
            <StickyFooter  />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
  return (
    <ThemeProvider theme = {theme}>
      {routesAll()}
    </ThemeProvider>
  );
}

export default App;

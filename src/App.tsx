import { createMuiTheme, ThemeProvider, Theme, responsiveFontSizes } from '@material-ui/core/styles';
import { FC, useReducer } from 'react';
import { darkTheme, lightTheme } from './appTheme';

import Dashboard from './pages/getting-started/templates/dahboard/Dashboard'


const  App: FC<any> = (props) => {
  const [useDefaultTheme] = useReducer((theme) => !theme, true)
  let theme: Theme = createMuiTheme(useDefaultTheme ? darkTheme : lightTheme);
  return (
    <ThemeProvider theme = {theme}>
      <Dashboard />
    </ThemeProvider>
  );
}



export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

//Imports for Store
import {Provider} from 'react-redux'
import store from './state/store'


import {createMuiTheme,ThemeProvider} from '@material-ui/core/styles'


const theme = createMuiTheme({
 palette: {
    type: 'dark',
  },
})

ReactDOM.render(
  <Provider store={store()}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
  </Provider>,
    
  document.getElementById('root')
);



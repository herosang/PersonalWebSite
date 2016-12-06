// @flow
import Main from 'js/components/mainPage/main';
import React, {Component} from 'react';
import {text} from 'js/config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {

  displayName: 'App';
  props: any;

  render () {
    return (
    <MuiThemeProvider>
      <div className='root'>
        <Main />
      </div>
    </MuiThemeProvider> 
    );
  }

}

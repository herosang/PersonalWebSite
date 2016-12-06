import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Background extends Component {

  displayName: 'Background';
  props: any;

  constructor(){
    super();
  }

  render () {
    return (
      <div className = 'back' >

      </div>
    );
  }

}

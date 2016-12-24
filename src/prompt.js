import styles from './css/prompt.scss';
import React, {Component} from 'react';

export default class Prompt extends Component {

  displayName: 'Prompt';
  props: any;
  constructor(props){
    super(props);
    this.state = {}
  }

  render () {
    return (

      <div className = {styles.prompt}>
        SCROLL DOWN
      </div>

    );
  }
}

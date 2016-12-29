import styles from './css/presentation.scss';
import Panel from './panel.js';
import React, {Component} from 'react';

export default class Presentation extends Component {

  displayName: 'Presentation';
  props: any;
  constructor(props){
    super(props);
    this.state = {}
  }

  render () {
    return (
      <div className = {styles.presentation}>
        <Panel position = {this.props.position} />
      </div>

    );
  }
}

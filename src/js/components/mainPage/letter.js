import React, {Component} from 'react';

export default class Letter extends Component {

  displayName: 'Letter';
  props: any;
  constructor(props){
    super(props);
    this.state = {}
  }

  render () {
    return (

      <div className = 'letter'>
        {this.props.letter}
      </div>
    );
  }

}

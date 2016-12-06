import Graph from 'js/components/mainPage/graph';
import Title from 'js/components/mainPage/title';
import FlatButton from 'material-ui/FlatButton';
import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

export default class Main extends Component {

  displayName: 'Main';
  props: any;
  constructor(props){
    super(props);
  }

  render () {
    return (

      <div className = 'main'>


          <Card className = 'mainCard'>
            <div className = 'wrapper'>
            <div className = 'logo'></div>

            <div className = 'header'><b>BEST APP</b></div>

            <div className = 'description'>A really cool app</div>

            <hr /> 

            </div>
          </Card> 

      </div>
    );
  }

}

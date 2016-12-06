import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Sheet from 'js/components/mainPage/sheet';

export default class Graph extends Component {

  props: any;

  constructor(props){
    super(props);

  }


  makeSheets(list) {

    list = list.allData.slice();
    for (let i=0; i<list.length; i++) {
      list[i] = list[i].cpm
    }  
    var increment = Math.floor(255/list.length);
    var sheets = []
    var maxHeight = list.length*40
    var maxVal = Math.max(...list)
    list.sort(function(a, b){return a-b});
    //sets the color of each sheet to make gradient
    console.log(this.props)
    for (let i = list.length-1; i>= 0; i--) {
      var transFactor = (1- (list[i]/maxVal))*maxHeight;

     
      var sheet = <Sheet 
              color = {"rgb(" + (255-increment*(i+1)) + ", 167," + increment*(i+1)  + ")"} 
              factor = {transFactor} 
              value = {list[i]} 
              key = {list[i]}
              index = {list.length - i} 
              data = {this.props.data}
              onClickSheetFn={this.props.onClickSheetFn}

              />
      sheets.push(sheet)
    }

    return sheets
///
    
  }
  render() {
    return (
      <div className = 'graph'>
      	<div className = 'container'>
      		<div className = 'floor isometric' title = '0' >
            {this.makeSheets(this.props.data)}

            </div>
			 </div>
      </div>
    );
  }




}

//paul

import React, {Component} from 'react';
import Label from 'js/components/mainPage/label';

export default class DataGraph extends Component {

  displayName: 'Twitter';
  props: any;

  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render

    
}


  makeLabels(list) {
    var increment = Math.floor(255/list.length);
    var labels= []
    var height = Math.floor(500/list.length);
    var maxWidth = 450;
    var maxVal = Math.max(...list)

    //sets the color of each sheet to make gradient
    for (let i=0; i<list.length; i++) {
      var transWidth = (list[i]/maxVal)*(maxWidth-150);
      var label = <Label 
              color = {"rgb("+increment*(i+1)+", 180, 180)"}
              width = {transWidth+150} 
              height = {height} 
              label = {this.props.tags[i]} 
              key = {list[i]} 
              />
      labels.unshift(label)
    }

    return labels
  }
  render() {
    return (
      <div className = 'dataGraph'>
        {this.makeLabels(this.props.sentiment)}
      </div>
    );
  }

}

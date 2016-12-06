import React, {Component} from 'react';
import DataGraph from 'js/components/mainPage/dataGraph';

export default class TwitterData extends Component {

  displayName: 'Twitter';
  props: any;

  maxTen(data) {
  	var tuples = [];

	for (var key in data) {
		if (data.hasOwnProperty(key)){
			tuples.push([key, data[key]]);
		}
	};

	tuples.sort(function(a, b) {
    	var aa = a[1];
    	var bb = b[1];

    	return aa < bb ? -1 : (aa > bb ? 1 : 0);
		});
	let i = tuples.length-1;
	var maxTen = [[],[]];

	while ((maxTen.length < 10) && (i > -1)) {
		var key = tuples[i][0];
    	var value = tuples[i][1];

    	maxTen[0].unshift(key);
    	maxTen[1].unshift(value);
    	i--;
	}
	console.log(maxTen)
	return maxTen;
	
  }

  render () {
    console.log(this.props.data)
  	var maxTen = this.maxTen(this.props.data.allData[this.props.data.index].twitterData);
    return (
    	<DataGraph tags={maxTen[0]} sentiment={maxTen[1]}/>
    );
  }

}

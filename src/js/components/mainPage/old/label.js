import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Label extends Component {

 displayName: 'Label';
 props: any;

 constructor(props){
    super(props);
}

render () {
	var style = {
		height : this.props.height,
		
	};
	return (
	<div className = 'label' style ={ {width : this.props.width+"px"}}>
		<RaisedButton label={this.props.label} 
		backgroundColor = {this.props.color} 
		fullWidth={true} 
		style={style}
		labelColor ={"white"}
		/>

	</div>
	);
}

}
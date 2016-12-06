import React, {Component} from 'react';
import Title from "js/components/mainPage/title";

export default class Main extends Component {

  displayName: 'Main';
  props: any;
  constructor(props){
    super(props);
    this.state = {position: 0};
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event){
    if(event.srcElement.body.scrollTop <= 1800){
      this.setState({position: event.srcElement.body.scrollTop});
    }else{
      this.setState({position: 1800});
    }
  }

  render () {

    console.log(this.state.position);

    return (

      <div className = 'main' >
        <Title position = {this.state.position} />
      </div>
    );
  }

}

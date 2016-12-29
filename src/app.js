import styles from './css/main.scss';
import Title from './title.js'
import Prompt from './prompt.js'
import React from 'react';
import Presentation from './presentation.js';

export default class App extends React.Component {
  
  displayName: 'App';
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
    console.log(event.srcElement.body.scrollBottom);

    if(event.srcElement.body.scrollTop <= 900){
      this.setState({position: event.srcElement.body.scrollTop});
    }else{
      this.setState({position: 900});
    }
  }

  render () {


    const main =  {
      display: "flex",
      flexWrap: "wrap",
      background: "#FFFFFF",
      width: "100%",
      height: "2600px",
      //height: ((this.props.position < 900) ? "300px": "200px"),


    }

    return (

      <div style = {main} >
        <Title position = {this.state.position} />
        <Prompt position = {this.state.position} />
        <Presentation position = {this.state.position} />
      </div>
    );
  }
}

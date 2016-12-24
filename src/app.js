import styles from './css/main.scss';
import Title from './title.js'
import React from 'react';

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
    if(event.srcElement.body.scrollTop <= 1800){
      this.setState({position: event.srcElement.body.scrollTop});
    }else{
      this.setState({position: 1800});
    }
  }

  render () {

    console.log(this.state.position);

    return (

      <div className = {styles.main} >
        <Title position = {this.state.position} />
      </div>
    );
  }
}

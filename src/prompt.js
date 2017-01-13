import styles from './css/prompt.scss';
import React, {Component} from 'react';

export default class Prompt extends Component {

  displayName: 'Prompt';
  props: any;
  constructor(props){
    super(props);
    this.state = {}
  }

  render () {

    const promptStyle = {
      fontFamily: "Raleway, sans-serif",
      letterSpacing: "2px",
      display: "flex",
      width: "100%",
      height: "40px",
      fontSize: "15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      
    }

    const promptContainer = {
      width: "100%",
      height: "60px",
      display:  "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      position: "fixed",
      left: "50%",
      top: "50%",
      marginLeft: "-50%",
      marginTop: ((this.props.position < 900) ? "-30px": "-100px"),
      opacity: ((this.props.position < 900) ? 1 : 0),
      transition: "all 2s",

    }

    const triangleOne = {
      width: "20px",
      height: "20px",
      borderTop: "1px solid BLACK",
      transition: "all 2s",
      transform: "rotate(45deg)",
      marginRight: "8px",
    }

    const triangleTwo = {
      width: "20px",
      height: "20px",
      borderTop: "1px solid BLACK",
      transition: "all 2s",
      transform: "rotate(-45deg)",
    }

    return (
      <div style = {promptContainer}>
        <div style = {promptStyle}>
          SCROLL DOWN
        </div>
        <div style = {triangleOne}>
        </div>
        <div style = {triangleTwo}>
        </div>
      </div>
    );
  }
}

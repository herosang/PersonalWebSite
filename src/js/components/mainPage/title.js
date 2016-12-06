import React, {Component} from 'react';
import Letter from "js/components/mainPage/letter";

export default class Title extends Component {

  displayName: 'Title';
  props: any;
  constructor(props){
    super(props);



  }

  

  render () {

    const hStyleb = {
      transform: "rotate("+this.props.position/5+"deg) " + 
                 "scale("+ (1 - this.props.position/1800)+"," + (1-this.props.position/1800)+")",
    }

    const sStyleb = {
      transform: "scale("+ (1 - this.props.position/1800)+"," + (1-this.props.position/1800)+")",
    }

    const rStyleb = {
      transform: "translate(0px,"+-this.props.position/30+"px)",
    }
     const iStyleb = {
      transform: "rotateY("+this.props.position/5+"deg) ",
    }

    const uStyleb = {
      transform: "rotateX("+-this.props.position/5+"deg) ",
    }

    const oStyleb = {
      transform: "rotate("+-this.props.position/5+"deg) ",
    }

    const aStyleb = {
      opacity: (1- this.props.position/900)+"",
    }

    const nStyleb = {
      transform: "rotateX("+this.props.position/5+"deg) ",
    }

    const nStylebTwo = {
      color: "rgb("+ (Math.floor(Math.random()*120)+135)+","
                   +(Math.floor(Math.random()*120)+135)+","
                   +(Math.floor(Math.random()*120))+")",
    }

    const aStylebTwo = {

      transform: "translate(0px,"+this.props.position/30+"px)",
      
    }

    const pStyleb = {
      transform: "rotate("+-this.props.position/5+"deg) ",
    }

    const iStylebTwo = {
      transform: "rotate("+this.props.position/5+"deg) ",
    }

    const vStyleb = {
      transform: "translate("+this.props.position/30+"px, 0px)",
    }

    const lStylef = {
      transform: "translate("+(60 - this.props.position/30)+"px, 0px)",
      transition: "all 1s",
      color: "#00FF00",
    }

    const mStylef = {
      transform: "rotate("+this.props.position/5+"deg) " +
                 "scale("+ this.props.position/1800+"," + this.props.position/1800+")",
      color: "rgb(255, 181,21)",


    }  


    const iStylef = {
      transform: "translate(0px,"+(-60+this.props.position/30)+"px)",
      color: "#00C590",
      transition: "all 1s",

    }

    const gStylef = {
      transform: "rotate("+-this.props.position/5+"deg) ",
      color: "#DC143C",
    }

    const eStylefTwo = {
      transform: "rotate("+-this.props.position/5+"deg) ",
      color: "#FFD700",
    }


    const nStylefTwo = {
      transform: "translate(0px,"+(60-this.props.position/30)+"px)",
      color: "#20B2AA",
      transition: "all 1s",

    }

    const oStylef = {
      transform: "rotateX("+this.props.position/5+"deg) ",

      //transform: "translate(0px,"+(60-this.props.position/30)+"px)",
      color: "#8E388E",
      transition: "all 1s",

    }

    const nStylef = {
      transform: "rotateX("+-this.props.position/5+"deg) ",
      color: "#9A93EC",
      transition: "all 1s",
    }


    const constantStyle = {
      color: "rgb("+ (Math.floor(Math.random()*120)+135)+","
                   +(Math.floor(Math.random()*120)+135)+","
                   +(Math.floor(Math.random()*120))+")",
    }


    const kStylef = {
      transform: "scale("+ this.props.position/1800+"," + this.props.position/1800+")",
      color: "rgb(31, 209, 236)",

    }  

    const tStylef = {
      transform: "rotateY("+this.props.position/5+"deg) ",
      color: "rgb(255, 27, 155)",
      transition: "all 0.5s",

    }  

    const hStylef = {
      color: "#EE4000",
      opacity: (this.props.position-900)/900+"",
      transition: "all 1s",
    }

    const eStylef = {
      transform: "rotateX("+this.props.position/5+"deg) ",
      color: "#C5C1AA",
      transition: "all .5s"
    }

    const eStylefThree = {
      transform: "rotateY("+this.props.position/5+"deg) ",
      color: "#FFC1C1",
      transition: "all .5s"
    }

    const iStylefTwo = {
      transform: "translate("+(-60+this.props.position/30)+"px, 0px) " 
               + "rotate("+this.props.position/5+"deg) ",
      color: "#B3EE3A",
      opacity: (this.props.position-900)/900+"",

    }

    const rStylef = {
      transform: "rotate("+this.props.position/5+"deg) ",
      color: "#EE4000",
    }

    const tStylefTwo = {
      color: "rgb("+ (Math.floor(Math.random()*120)+135)+","
                   +(Math.floor(Math.random()*120)+135)+","
                   +(Math.floor(Math.random()*120))+")",
    }

    const fadeOut = {
      opacity: (1 -this.props.position/1800)+"",
    }

    const fadeIn = {
      opacity: (this.props.position/1800)+"",
      color: "#76EEC6",
      transition: "all 1s",
    }

    const nothing = {

    }

    
    return (

      <div className = 'Title'>
        <div className = 'title-row'>
          <div style = {(this.props.position < 900) ? hStyleb :mStylef}>
            <Letter letter = {(this.props.position < 900) ? "H" : "M"}/>
          </div>
          <div style = {constantStyle}>
            <Letter letter = {"A"}/>
          </div>
          <div style = {(this.props.position < 420) ? iStyleb :kStylef}>
            <Letter letter = {(this.props.position < 420) ? "I" : "K"}/>
          </div>
          <div style = {(this.props.position < 900) ? rStyleb :iStylef}>
            <Letter letter = {(this.props.position < 900) ? "R" : "I"}/>
          </div>
          <div style = {(this.props.position < 900) ? uStyleb :nStylef}>
            <Letter letter = {(this.props.position < 900) ? "U" : "N"}/>
          </div>
          <div style = {(this.props.position < 900) ? oStyleb :gStylef}>
            <Letter letter = {(this.props.position < 900) ? "O" : "G"}/>
          </div>
          <div className = 'characterBlank'>
            <Letter letter = {" "}/>
          </div>
          <div style = {(this.props.position < 900) ? sStyleb :tStylef}>
            <Letter letter = {(this.props.position < 900) ? "S" : "T"}/>
          </div>
          <div style = {(this.props.position < 900) ? aStyleb :hStylef}>
            <Letter letter = {(this.props.position < 900) ? "A" : "H"}/>
          </div>
          <div style = {(this.props.position < 900) ? nStyleb :eStylef}>
            <Letter letter = {(this.props.position < 900) ? "N" : "E"}/>
          </div>
          <div  style  = {fadeOut}>
            <Letter letter = {"G"}/>
          </div>
        </div>  
        <div className = 'title-row'>

          <div style = {(this.props.position < 900) ? nothing :iStylefTwo}>
            <Letter letter = {(this.props.position < 900) ? " " : "I"}/>
          </div>
          <div style = {(this.props.position < 900) ? aStylebTwo :nStylefTwo}>
            <Letter letter = {(this.props.position < 900) ? "A" : "N"}/>
          </div>
          <div style = {(this.props.position < 900) ? sStyleb :tStylef}>
            <Letter letter = {(this.props.position < 900) ? "S" : "T"}/>
          </div>
          <div style = {(this.props.position < 900) ? pStyleb :eStylefTwo}>
            <Letter letter = {(this.props.position < 900) ? "P" : "E"}/>
          </div>
          <div  style = {(this.props.position < 900) ? iStylebTwo :rStylef}>
            <Letter letter = {(this.props.position < 900) ? "I" : "R"}/>
          </div>
          <div style = {(this.props.position < 900) ? aStylebTwo :nStylefTwo}>
            <Letter letter = {(this.props.position < 900) ? "R" : "N"}/>
          </div>
          <div style = {(this.props.position < 450) ? iStyleb :eStylefThree}>
            <Letter letter = {(this.props.position < 450) ? "I" : "E"}/>
          </div>
          <div style = {(this.props.position < 900) ? nStylebTwo :tStylefTwo}>
            <Letter letter = {(this.props.position < 900) ? "N" : "T"}/>
          </div>
          <div style = {fadeOut}>
            <Letter letter = {"G"}/>
          </div>
          <div style = {fadeIn}>
            <Letter letter = {"C"}/>
          </div>
          <div style = {(this.props.position < 900) ? nStyleb :oStylef}>
            <Letter letter = {(this.props.position < 900) ? "D" : "O"}/>
          </div>
          <div style = {(this.props.position < 900) ? nStyleb :oStylef}>
            <Letter letter = {(this.props.position < 900) ? "E" : "O"}/>
          </div>
          <div style = {(this.props.position < 900) ? vStyleb :lStylef}>
            <Letter letter = {(this.props.position < 900) ? "V" : "L"}/>
          </div>
        </div>    
      </div>
    );
  }

}

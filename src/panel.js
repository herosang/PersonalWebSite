import styles from './css/panel.scss';
import React, {Component} from 'react';

export default class Panel extends Component {

  displayName: 'Panel';
  props: any;
  constructor(props){
    super(props);
    this.state = {}
  }

  makeWord() {

      var list = ["D", "E", "S", "I", "G", "N"];
      var colors = ["#E65100", "blue","yellow","red","green","pink"];
      var sheets = [];
      for (let i = 0; i<6 ; i++) {

     
        var sheet = <div style = {{color: colors[i],
                                  height: "22px",
                                  width: "22px",
                                  fontWeight: "900",
                                  display: "flex",
                                  fontFamily: "'Raleway', sans-serif",
                                  justifyContent: "center"
                                  }}>{list[i]}</div>
        sheets.push(sheet);
      }

      return sheets
    
    }

  render () {


      const triDWrapper = {
      webkitPerspective: "300px",
      perspective: "300px",
      position: "fixed",
      left: "0%",
      top: "0%",
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: ((this.props.position < 900) ? "200px": "-25px"),
      opacity: ((this.props.position < 900) ? 0 : 1),
      transition: "all 2s",

    }

    
    return (
      <div style = {triDWrapper}>
      <figure className ={styles.imgWrapper}>
        <img src="http://i.imgur.com/HhXo02I.png" alt="Preview Image" />
        <figcaption>
            <h2 className = {styles.title}>Hey, I'm Hairuo</h2>
            <div className = {styles.bottomDetail}>
                <p style = {{paddingLeft: "20px"}}>
                  I'm currently a second year student studying computer science at UofT
                </p>
                <p style = {{marginTop: "30px"}}>
                  I am an <b>&nbsp;innovator</b>
                </p>
                <p>
                  an aspiring <span style = {{color: "#FC8EAC"}}> &nbsp;artist</span>
                </p>
                <p>
                  and at    <span style = {{color: "red"}}>&nbsp;&#10084;&nbsp;</span> a coder
                </p>
                <div className ={styles.socialIcons}>
                    <div className = {styles.github} >
                    <a href = "https://github.com/DawnOfHammers"><img src="http://image.flaticon.com/icons/svg/25/25231.svg" alt="Preview Image" /></a>
                    </div>
                    <div className = {styles.linkedin}>
                    <a href = "https://www.linkedin.com/in/hsang"><img src="http://www.uidownload.com/files/902/874/330/linkedin-black-icon.png" alt="Preview Image" /></a>
                    </div>
                    <div className = {styles.resume}>
                    <a href = "https://www.docdroid.net/uKP3n0G/hairuosang-resume.pdf.html"><img src="http://www.freeiconspng.com/uploads/resume-icon-png-4.png" alt="Preview Image" /></a>
                    </div>
                </div>
            </div>
        </figcaption>
       </figure>
      </div>

    );
  }
}

import styles from './css/panel.scss';
import React, {Component} from 'react';

export default class Panel extends Component {

  displayName: 'Panel';
  props: any;
  constructor(props){
    super(props);
    this.state = {}
  }

  render () {


      const triDWrapper = {
      webkitPerspective: "250px",
      perspective: "250px",
      position: "fixed",
      left: "0%",
      top: "0%",
      height: "100%",
      width: "100%",
      marginTop: ((this.props.position < 900) ? "200px": "0px"),
      opacity: ((this.props.position < 900) ? 0 : 1),
      transition: "all 2s",

    }

    return (
      <div style = {triDWrapper}>
      <figure className ={styles.imgWrapper}>
        <img src="https://d13yacurqjgara.cloudfront.net/users/43342/screenshots/1973147/studiojq2015_explore62_1x.jpg" alt="Preview Image" />
        <figcaption>
            <h2 className = {styles.title}>Hover Design Interaction</h2>
            <div className = {styles.bottomDetail}>
                <p>Some little detail here, things about the designs summary lorem anything related just to make this look long text.</p>
            </div>
        </figcaption>
       </figure>
      </div>

    );
  }
}

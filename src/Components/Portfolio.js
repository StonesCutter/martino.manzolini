import React, { Component, useState } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
//import {motion} from "framer-motion";
import {AnimatePresence, motion} from "../../node_modules/framer-motion/dist/framer-motion";

let id = 0;
class Portfolio extends Component {

  // const [isOpen, SetIsOpen] = useState(false);
  state = {
    isOpen: false
  }

  SetIsOpen = () => {
    this.setState(prevState => {
      return {
        isOpen: prevState.isOpen === false ? true : false
        }
     }  
    )
  }


  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Software projects</h1>

              <motion.div  layout className="card" 
              style={{borderRadius: "1rem"}}
              onClick={this.SetIsOpen}>
              
                <motion.h2 layout="position">Prova</motion.h2>
                <img src={"images/5AAR.png"} />
                {this.state.isOpen &&(
                  <div style={{ maxWidth: '100%', overflow: 'hidden', wordBreak: 'break-all' }} >
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                   bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                  </div>
                   )}
              </motion.div>

              <motion.div  layout className="card" 
              style={{borderRadius: "1rem"}}
              onClick={this.SetIsOpen}>
              
                <motion.h2 layout="position">Prova</motion.h2>
                {this.state.isOpen &&(
                  <motion.div>
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <p>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>
                  </motion.div>
                   )}
              </motion.div>

              <motion.div  layout className="card" 
              style={{borderRadius: "1rem"}}
              onClick={this.SetIsOpen}>
              
                <motion.h2 layout="position">Prova</motion.h2>
                {this.state.isOpen &&(
                  <motion.div>
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <p>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>
                  </motion.div>
                   )}
              </motion.div>

              <h1>Art projects</h1>

              <motion.div  layout className="card" 
              style={{borderRadius: "1rem"}}
              onClick={this.SetIsOpen}>
              
                <motion.h2 layout="position">Prova</motion.h2>
                {this.state.isOpen &&(
                  <motion.div>
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <p>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>
                  </motion.div>
                   )}
              </motion.div>

              {/*
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
              </div>
              */}
              
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;

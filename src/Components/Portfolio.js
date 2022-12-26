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

    const frameworks = this.props.data.frameworks;
    const software = this.props.data.software;
    const programmingLanguages = this.props.data.programmingLanguages;

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
              
                <motion.h2 layout="position">5AAR</motion.h2>
                <motion.img layout src={"images/5AAR.png"} />
                {this.state.isOpen &&(
                  <div className="info" >
                  <p>The 5A project aims to provide an enhancement to the quality of life of
                  autistic persons, helping them to reach autonomy in several daily life scenarios, through
                  a cross reality training based on Virtual Reality, <b>Augmented Reality</b>
                   and <b>Conversational Agents</b>.
                  By considering the scenario of the subway of Milan, I developed, with another student, an android AR application, 
                  explained in detail in our master's degree thesis.</p>
                 
                <fieldset>
                  <table className="table-skills">
                    <tr className="row-skills">
                      <th> Programming languages:</th>
                      <th className="column-skills">C#</th>
                    </tr>
                    <tr  className="row-skills">
                      <th> Frameworks and Services:</th>
                      <th className="column-skills">Vuforia Engine, Louis of Microsoft Azure (speech to text and text to speech)</th>
                    </tr>
                    <tr className="row-skills">
                      <th> Software used: </th>
                      <th className="column-skills">Unity, 3Ds Max, Gimp</th>
                    </tr>
                  </table>
                 </fieldset>

                  <p><b className="underline">
                  <a href=" https://www.frontiere.polimi.it/5a-the-technology-that-helps-support-social-issues/?lang=en" target="_blank" rel="noopener noreferrer">Learn more about 5A</a>
                  </b> </p>


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

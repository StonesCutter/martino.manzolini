import React, { Component, useState } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
//import {motion} from "framer-motion";
//import YoutubeEmbed from "../../YoutubeEmbed";
import YouTube from 'react-youtube-embed'
import ImageGallery from 'react-image-gallery';
import {AnimatePresence, motion} from "../../node_modules/framer-motion/dist/framer-motion";

let id = 0;
class Portfolio extends Component {

  // const [isOpen, SetIsOpen] = useState(false);
  
  state = {
    isOpen: false,
    isOpen1: false,
    isOpen2: false, 
    isOpen3: false
  }

  SetIsOpen = () => {
    this.setState(prevState => {
      return {
        isOpen: prevState.isOpen === false ? true : false,
        isOpen1: false,
        isOpen2: false, 
        isOpen3: false
        }
     }  
    )
  }

  SetIsOpen1 = () => {
    this.setState(prevState => {
      return {
        isOpen1: prevState.isOpen1 === false ? true : false,
        isOpen0: false,
        isOpen2: false, 
        isOpen3: false
        }
     }  
    )
  }

  SetIsOpen2 = () => {
    this.setState(prevState => {
      return {
        isOpen2: prevState.isOpen2 === false ? true : false,
        isOpen1: false,
        isOpen0: false, 
        isOpen3: false
        }
     }  
    )
  }

  SetIsOpen3 = () => {
    this.setState(prevState => {
      return {
        isOpen3: prevState.isOpen3 === false ? true : false,
        isOpen1: false,
        isOpen2: false, 
        isOpen0: false
        }
     }  
    )
  }
  


  render() {
    if (!this.props.data) return null;

    const frameworks = this.props.data.frameworks;
    const software = this.props.data.software;
    const programmingLanguages = this.props.data.programmingLanguages;

    const images = [
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fscreen1.jpg?alt=media&token=7264dca0-def7-4a5d-a2d3-fbede068c5cc',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fscreen1.jpg?alt=media&token=7264dca0-def7-4a5d-a2d3-fbede068c5cc',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fscreen2.jpg?alt=media&token=180ddd32-e6f9-4458-b4b1-3ce8a9504b07',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fscreen2.jpg?alt=media&token=180ddd32-e6f9-4458-b4b1-3ce8a9504b07',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fscreen3.jpg?alt=media&token=12669846-3bae-407a-997c-11585ee8838a',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fscreen3.jpg?alt=media&token=12669846-3bae-407a-997c-11585ee8838a',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fscreen4.jpg?alt=media&token=2bc318ff-56e1-41e6-9960-a03d6b41cb78',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fscreen4.jpg?alt=media&token=2bc318ff-56e1-41e6-9960-a03d6b41cb78',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fscreen5.jpg?alt=media&token=e621f18a-6e52-477c-bf81-1f6512ac9f80',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fscreen5.jpg?alt=media&token=e621f18a-6e52-477c-bf81-1f6512ac9f80',
  }
];


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
              style={{borderRadius: "1rem"}}>
              
                <motion.h2 layout="position">5AAR</motion.h2>
                <motion.img layout src={"images/5AAR.png"} />

                <ul className="social">
                  <a onClick={this.SetIsOpen} className="button btnMobile project-btn">Read more</a>
                </ul>

                {this.state.isOpen &&(
                  <div className="info" >

                  <p>The 5A project aims to provide an enhancement to the quality of life of
                  autistic persons, helping them to reach autonomy in several daily life scenarios, through
                  a cross reality training based on Virtual Reality, <b>Augmented Reality</b>
                   and <b>Conversational Agents</b>.
                  By considering the scenario of the subway of Milan, I developed, with another student, an android AR application, 
                  explained in detail in our master's degree thesis.</p>
                 
                 <YouTube id="ApLaFFPyqzc"/>
                <br/>
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

                  <ImageGallery items={images} size="4" />;

                  </div>
                   )}
              </motion.div>

              <motion.div  layout className="card" 
              style={{borderRadius: "1rem"}}
              onClick={this.SetIsOpen1}>
              
                <motion.h2 layout="position">Prova</motion.h2>
                {this.state.isOpen1 &&(
                  <motion.div>
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <p>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>
                  </motion.div>
                   )}
              </motion.div>

              <motion.div  layout className="card" 
              style={{borderRadius: "1rem"}}
              onClick={this.SetIsOpen2}>
              
                <motion.h2 layout="position">Prova</motion.h2>
                {this.state.isOpen2 &&(
                  <motion.div>
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <p>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>
                  </motion.div>
                   )}
              </motion.div>

              <h1>Art projects</h1>

              <motion.div  layout className="card" 
              style={{borderRadius: "1rem"}}
              onClick={this.SetIsOpen3}>
              
                <motion.h2 layout="position">Prova</motion.h2>
                {this.state.isOpen3 &&(
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

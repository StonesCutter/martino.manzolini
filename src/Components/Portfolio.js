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
        isOpen: false,
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
        isOpen: false, 
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
        isOpen: false
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

const images1 = [
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fleo1.jpg?alt=media&token=7b89827e-24cc-476f-9bf2-2e6aab0dd77b',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fleo1.jpg?alt=media&token=7b89827e-24cc-476f-9bf2-2e6aab0dd77b',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fleo2.jpg?alt=media&token=aa34570c-26fb-4ec5-8a94-0d10eddaa7e6',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fleo2.jpg?alt=media&token=aa34570c-26fb-4ec5-8a94-0d10eddaa7e6',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fleo3.jpg?alt=media&token=ff74e9e4-133e-418d-9bb3-40102cd47c4f',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fleo3.jpg?alt=media&token=ff74e9e4-133e-418d-9bb3-40102cd47c4f',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fleo4.jpg?alt=media&token=a91e4ac9-b353-4dfc-ba45-04d0edb43957',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fleo4.jpg?alt=media&token=a91e4ac9-b353-4dfc-ba45-04d0edb43957',
  }
];

const images2 = [
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fappetito10.jpg?alt=media&token=d7c5c1b4-7fb0-403a-b24e-00f419c81918',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fappetito10.jpg?alt=media&token=d7c5c1b4-7fb0-403a-b24e-00f419c81918',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fappetito1.jpg?alt=media&token=fea57bfa-f7de-4e70-ad1d-5619c5cf8b49',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fappetito1.jpg?alt=media&token=fea57bfa-f7de-4e70-ad1d-5619c5cf8b49',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fappetito11.jpg?alt=media&token=f90b169c-e296-4772-8a1d-cc110985dc81',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fappetito11.jpg?alt=media&token=f90b169c-e296-4772-8a1d-cc110985dc81',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fappetito2.jpg?alt=media&token=03d5bc11-71b6-4466-923f-24c59d08c437',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fappetito2.jpg?alt=media&token=03d5bc11-71b6-4466-923f-24c59d08c437',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fappetito3.jpg?alt=media&token=f386f01f-c1a3-48ee-8452-f0a6aa3ce4a1',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fappetito3.jpg?alt=media&token=f386f01f-c1a3-48ee-8452-f0a6aa3ce4a1',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fappetito4.jpg?alt=media&token=b7e4ab45-0e0d-4330-bcc6-1b6fc52d95b7',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fappetito4.jpg?alt=media&token=b7e4ab45-0e0d-4330-bcc6-1b6fc52d95b7',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fappetito5.jpg?alt=media&token=36827148-aa62-4141-8993-dd81b22c750c',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fappetito5.jpg?alt=media&token=36827148-aa62-4141-8993-dd81b22c750c',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fappetito6%20unpopiccola.jpg?alt=media&token=09433ddb-17c1-429a-a584-dec420dcd6b1',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fappetito6%20unpopiccola.jpg?alt=media&token=09433ddb-17c1-429a-a584-dec420dcd6b1',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fappetito7.jpg?alt=media&token=2882a08d-737a-4271-a6c0-f3f38b910d13',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fappetito7.jpg?alt=media&token=2882a08d-737a-4271-a6c0-f3f38b910d13',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fappetito8.jpg?alt=media&token=a03da9e2-3885-44de-af0e-c4d357f860c8',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fappetito8.jpg?alt=media&token=a03da9e2-3885-44de-af0e-c4d357f860c8',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fappetito9.jpg?alt=media&token=7dc35b55-3f73-460b-8321-ac9b0c7e6c2b',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fappetito9.jpg?alt=media&token=7dc35b55-3f73-460b-8321-ac9b0c7e6c2b',
  }
];

const images3 = [
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fscena1.jpg?alt=media&token=9c08c92b-9815-4f40-8682-23658cf1fdb1',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fscena1.jpg?alt=media&token=9c08c92b-9815-4f40-8682-23658cf1fdb1',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fscena2.jpg?alt=media&token=cc1b753c-264b-46d4-95a5-b61b7fae28f9',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fscena2.jpg?alt=media&token=cc1b753c-264b-46d4-95a5-b61b7fae28f9',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fscena3.jpg?alt=media&token=9b24688a-a7f6-47b2-b78c-0d5857a30b12',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fscena3.jpg?alt=media&token=9b24688a-a7f6-47b2-b78c-0d5857a30b12',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fscena4.jpg?alt=media&token=ceb8d47d-7dae-4930-bab2-9baaa678efe7',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Fscena4.jpg?alt=media&token=ceb8d47d-7dae-4930-bab2-9baaa678efe7',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Ffoto1.jpg?alt=media&token=37527711-ac22-4d4e-99f3-c02624ae92b2',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Ffoto1.jpg?alt=media&token=37527711-ac22-4d4e-99f3-c02624ae92b2',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Ffoto2.jpg?alt=media&token=1fbd2d20-d92a-4d6c-8ed9-5dffaa9dfe07',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/prova-7aa2f.appspot.com/o/Portfolio%2Ffoto2.jpg?alt=media&token=1fbd2d20-d92a-4d6c-8ed9-5dffaa9dfe07',
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
              
               <a href="#portfolio" className="smoothscroll"><motion.h2 layout="position" style={{textAlign: "center"}} className="bold-hover" onClick={this.SetIsOpen}>5AAR - Augmented Reality and Conversational Agent</motion.h2></a>
                <motion.img layout src={"images/5AAR.png"} />

                {this.state.isOpen &&(
                  <div className="info" >

                  <p>The 5A project aims to provide an enhancement to the quality of life of
                  autistic persons, helping them to reach autonomy in several daily life scenarios, through
                  a cross reality training based on <b>Virtual Reality</b>, <b>Augmented Reality</b>
                   and <b>Conversational Agents</b>.
                   </p>
                   <p>
                  By considering the scenario of the subway of Milan, I developed, with another student, an android AR application, 
                  explained in detail in our master's degree thesis.</p>

                  <p><b className="underline">
                  <a href=" https://www.frontiere.polimi.it/5a-the-technology-that-helps-support-social-issues/?lang=en" target="_blank" rel="noopener noreferrer">Learn more about 5A</a>
                  </b> </p>
                 
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

                  <ImageGallery items={images} size="4" />;

                  </div>
                   )}
              </motion.div>

              <motion.div  layout className="card" id="Leo"
              
              style={{borderRadius: "1rem"}}>
              
              <a href="#Leo" className="smoothscroll"><motion.h2 layout="position" style={{textAlign: "center"}} className="bold-hover" onClick={this.SetIsOpen1}>LeonARdo - Augmented Reality exhibition</motion.h2></a>
                <motion.img layout src={"images/LeonARdo.jpg"}/>

                {this.state.isOpen1 &&(
                  <div className="info" >

                  <p>
                  The idea of this application is to use <b> Augmented Reality technology </b> to increase the graphic 
                  and interactive possibilities of the exhibition <b>"Leonardo the gentle genius"</b>conceived by <b>Ambassador Stefano Baldi</b>.
                  Over the posters appears multimedia elements and digital descriptions that, overlapping the actual reality and viewable via the screen 
                  of a portable device, increase the interactivity of the observer. 
                  </p>
                  <p>
                  The application is available for android on <b>Google Play</b>. The written contents of the application are available for three languages: <b>Italian, English and Bulgarian</b>.  
                  </p>
                 
                  <p><b className="underline">
                  <a href="https://ambsofia.esteri.it/ambasciata_sofia/en/ambasciata/news/dall-ambasciata/la-mostra-su-leonardo-da-vinci.html" target="_blank" rel="noopener noreferrer">Learn more about LeonARdo   </a>
                  </b>
                  or
                  <b className="underline">
                  <a href="https://play.google.com/store/apps/details?id=com.StoneCutter.LeonARdo&hl=it&gl=US" target="_blank" rel="noopener noreferrer">   download it from Google Play</a>
                  </b>
                   </p>

                 <YouTube id="YO4aM6upOPg"/>
                <br/>
                <fieldset>
                  <table className="table-skills">
                    <tr className="row-skills">
                      <th> Programming languages:</th>
                      <th className="column-skills">C#</th>
                    </tr>
                    <tr  className="row-skills">
                      <th> Frameworks and Services:</th>
                      <th className="column-skills">Vuforia Engine</th>
                    </tr>
                    <tr className="row-skills">
                      <th> Software used: </th>
                      <th className="column-skills">Unity, 3Ds Max, Gimp</th>
                    </tr>
                  </table>
                 </fieldset>

                  <ImageGallery items={images1} size="4" />;

                  </div>
                   )}


              </motion.div>
              <div id="App"></div> 
              <motion.div  layout className="card"
              style={{borderRadius: "1rem"}}>
              
              <a href="#App" className="smoothscroll"><motion.h2 id="boh" layout="position" style={{textAlign: "center"}} className="bold-hover" onClick={this.SetIsOpen2}>APPetito - Mobile Application</motion.h2></a>
                <motion.img layout src={"images/appetito.jpg"} />

                {this.state.isOpen2 &&(
                  <div className="info" >

                  <p>
                  <b>APPetito is an Android native application</b> for the offering or purchase of restaurant's meals depending on the rôle that the user will choose. 
                  As a restaurateur will be possible to open a profile for a restaurant, present a menu and manage incoming reservations.
                  As client, instead, will be possible to browse with filters for different restaurants subscribed to the app, 
                  consult menues and complete reservations. A serie of missions, depending on the category of customer chosen, will allow the earning of points based on the reservations completed, to spend in discounts. 
                  </p>

                  <p>
                  A serie of missions, depending on the category of customer chosen, will allow the earning of points based on the reservations completed, to spend in discounts. 
                  The social objective of the app is also to promote real life moments to spend at restaurants, by inviting friends to subscribe, potentially increasing the incomes of the restaurants subscribed too.                  
                  </p>

                  <p><b className="underline">
                  <a href="https://github.com/StonesCutter/APPetito" target="_blank" rel="noopener noreferrer">Check out APPetito on GitHub</a>
                  </b> </p>

                <br/>
                <fieldset>
                  <table className="table-skills">
                    <tr className="row-skills">
                      <th> Programming languages:</th>
                      <th className="column-skills">JavaScript</th>
                    </tr>
                    <tr  className="row-skills">
                      <th> Frameworks and Services:</th>
                      <th className="column-skills">React Native, Firebase</th>
                    </tr>
                    <tr className="row-skills">
                      <th> Software used: </th>
                      <th className="column-skills">Visual Studio Code, Expo go</th>
                    </tr>
                  </table>
                 </fieldset>

                  <ImageGallery items={images2} size="4" />;

                  </div>
                   )}

              </motion.div>

              <h1 id="Art">Art projects</h1>

              <motion.div  layout className="card" 
              style={{borderRadius: "1rem"}}
              >
              
              <a href="#Art" className="smoothscroll"><motion.h2 id="boh" layout="position" style={{textAlign: "center"}} className="bold-hover" onClick={this.SetIsOpen3}>Teodorico di Verona - stained glass like artworks</motion.h2></a>
                <motion.img layout src={"images/Teodorico.jpg"} />

                {this.state.isOpen3 &&(
                  <div className="info" >

                  <p>
                  <b>La saga di Teodorico di Verona</b> (The Thidrekssaga Af Bern) is an epic-chivalric saga of Germanic origin, written in the mid-13th century and subsequently that narrates the adventures of the hero Thidrek Af Bern, known in the German-speaking regions under the name of Dietrich von Bern, where Bern is the early medieval name of the city of Verona. </p>

                  <p>
                  For the world premiere of the symphonic poem composed by Matteo Manzolini, I was asked to realize some artworks to be projected during the conncert. I created
                 <b> 18 digital artworks</b> representing the key moments of the saga, in a <b>stained glass</b>style inspired by the medieval stained glass windows of european cathedrals. 
                  By playing with shapes and strong contrasts of colours, I crated images that could express fully the subjects and atmosphere of this legendary character. 
                  </p>

                  <p><b className="underline">
                  <a href="https://www.filarmonicamosaico.ch/la-saga-di-teodorico-di-verona/" target="_blank" rel="noopener noreferrer">Concert manifest (Italian)</a>
                  </b> </p>

                <fieldset>
                  <table className="table-skills">
                    <tr className="row-skills">
                      <th> Software used: </th>
                      <th className="column-skills">Gimp</th>
                    </tr>
                  </table>
                 </fieldset>

                  <ImageGallery items={images3} size="4" />;

                  </div>
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

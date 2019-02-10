import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';

import Skills from './skills';



class Resume extends Component {

    render(){
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            {/* <img 
                                src = "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
                                alt="avatar"
                                style={{height: '200px'}}
                            /> */}
                        <img className="img-style-resume" src={require('../small.jpg')} />

                        </div>
                        <h2 style={{paddingTop: '2em'}}>Steven Victor</h2>
                        <h4 style={{color: 'grey'}}>Senior Software Engineer</h4>
                        <hr style={{borderTop: '3px solid #033fb2', width: '50%'}}/>
                        <p></p>

                        <hr style={{borderTop: '3px solid #033fb2', width: '50%'}}/>

                        <h5>Address</h5>
                        <p>15 Irone Street, Surulere, Lagos</p>
                        <h5>Phone</h5>
                        <p>+234 703-1172-366</p>
                        <h5>Email</h5>
                        <p>chikodi543@gmail.com</p>
                        <hr style={{borderTop: '3px solid #033fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>

                    <h2>Skills</h2>
                        <Skills 
                            skill="HTML/CSS"
                            progress={100}
                        />
                        <Skills 
                            skill="JavaScript"
                            progress={100}
                        />
                        <Skills 
                            skill="NodeJS"
                            progress={90}
                        />
                        <Skills 
                            skill="ReactJS"
                            progress={90}
                        />
                        <Skills 
                            skill="VueJS"
                            progress={100}
                        />
                        <Skills 
                            skill="PHP"
                            progress={90}
                        />
                        <Skills 
                            skill="Laravel"
                            progress={95}
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Education</h2>

                        <Education
                            startMonth ={'February'}
                            startYear={2011}
                            endMonth= {'December'}
                            endYear={2016}
                            schoolName="University of Port Harcourt"
                            schoolDescription="Bachelor of Engineering (B.ENG) in Petroleum and Gas Engineering (Petroleum Option)"
                            cgpa="4.04/5.0 CGPA"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>

                        <Experience 
                            startYear={2013}
                            endYear={2016}
                            jobName="Integral Computers"
                            jobDescription1="Trained on the basics of computer programming."
                            jobDescription2 ="Built engineering software for computation."
                            
                        />

                        <Experience 
                            startYear={2017}
                            endYear={2017}
                            jobName="Mastech Solutions"
                            jobDescription1= "Taught the basics of web programming."
                            jobDescription2 = "Built basic web projects with students."
                        />

                        <Experience 
                            startYear={2018}
                            endYear={2018}
                            jobName="Hotels.ng"
                            jobDescription1 = "Back end developer for https://roomhub.app"
                            jobDescription2 = "Built the admin authentication for https://roomhub.app"
                        />

                        <Experience 
                            startYear={2018}
                            endYear={2018}
                            jobName="https://ownerdirect.ng"
                            jobDescription1 = "Devops engineer"
                            jobDescription2 = "Oversee the entire development of https://ownerdirect.ng"
                        />

                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
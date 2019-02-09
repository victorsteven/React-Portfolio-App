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
                            <img 
                                src = "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Steven Victor</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #033fb2', width: '50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

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
                        <Education 
                            startYear={2000}
                            endYear={2006}
                            schoolName="My University"
                            schoolDescription="This is my school all year round. great one"
                        />

                        <Education 
                            startYear={2006}
                            endYear={2011}
                            schoolName="My Second University"
                            schoolDescription="This is my school all year round. great one"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>

                        <Experience 
                            startYear={2006}
                            endYear={2011}
                            jobName="My First University"
                            jobDescription="This is my school all year round. great one"
                        />

                        <Experience 
                            startYear={2006}
                            endYear={2011}
                            jobName="My Second University"
                            jobDescription="This is my school all year round. great one"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>

                        <Skills 
                            skill="JavaScript"
                            progress={100}
                        />
                        <Skills 
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills 
                            skill="NodeJS"
                            progress={50}
                        />
                        <Skills 
                            skill="Reacting"
                            progress={95}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
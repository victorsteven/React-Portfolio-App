import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'
class Landing extends Component {
    render(){
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img className="img-style" src={require('../small.jpg')} />



                        <div className="banner-text">
                            <p className="topic">Full Stack Web Developer</p>

                            {/* <hr/> */}
                            {/* <p>  */}
                                {/* HTML/CSS | JavaScript | ReactJS | VueJS | NodeJS | PHP | Laravel | MongoDB | PostgreSQL | Sequelize | Express  */}
                                <ul className="tech">
                                    <li>MERN Stack.</li>
                                    <li>JavaScript, NodeJS, ReactJS, VueJS, Express, MongoDB, Jquery.</li>
                                    <li>PHP, Laravel, PHPUnit.</li>
                                    <li>HTML5, CSS3, Bootstrap, Semantic UI.</li>
                                    <li>Linux, Docker, Devops.</li>
                                </ul>
                                
                            {/* </p> */}

                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/stevenchikodi" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden ="true" ></i>
                                </a>

                                <a href="https://github.com/victorsteven" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden ="true" ></i>
                                </a>

                                <a href="https://twitter.com/stevensunflash" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-twitter-square" aria-hidden ="true" ></i>
                                </a>

                                <a href="https://web.facebook.com/victorsteven75" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-facebook-square" aria-hidden ="true" ></i>
                                </a>

                                {/* <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-instagram-square" aria-hidden ="true" ></i>
                                </a> */}

                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'
class Landing extends Component {
    render(){
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://imgur.com/I80W1Q0.png"
                            className ="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>
                            <p> 
                                HTML/CSS | JavaScript | ReactJS | VueJS | NodeJS | PHP | Laravel | MongoDB | PostgreSQL | Sequelize | Express 
                            </p>

                            <div className="social-links">
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden ="true" ></i>
                                </a>

                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden ="true" ></i>
                                </a>

                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-twitter-square" aria-hidden ="true" ></i>
                                </a>

                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
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
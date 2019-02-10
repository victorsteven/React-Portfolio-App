import React, {Component} from 'react';

import {Grid, Cell} from 'react-mdl';

class Experience extends Component {
    render(){
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startMonth} {this.props.startYear} -  {this.props.endMonth} {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
                    <ul>
                        <li>{this.props.jobDescription1}</li>
                        <li>{this.props.jobDescription2}</li>
                    </ul>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;
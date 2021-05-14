import React, { Component } from 'react';
import classes from "./WelcomeText.module.css";
import TextLoop from 'react-text-loop';

class WelcomeText extends Component {
    state = {
        verbs: [
            'study',
            'learn',
            'give',
            'make'
        ],
        currentVerb: 0
    };


    render(){
        return(
        <div className = {classes.WelcomeText}>
            <h2>Hi, I'm Varetas Georgios!</h2>
            <p>I am a Cloud developer. I try to <TextLoop>
                    <span className = {classes.verb}>study</span>
                    <span className = {classes.verb}>learn</span>
                    <span className = {classes.verb}>give</span>
                    <span className = {classes.verb}>make</span>
                </TextLoop>.
            </p>
        </div>
        );
    }
}

export default WelcomeText;
import classes from './ChineseChallenge.module.css';
import React, { Component } from 'react';
import ChineseCharacter from './ChineseCharacter/ChineseCharacter';

class ChineseChallenge extends Component {
    state = {
        phrase: "你好吗?",
        characters: [
            '吗',
            '好',
            '?',
            '你'
        ],
        selectedResult: ""
    }

    characterClickedHandler(index){
        // console.log(this.state.characters[index]);
        let selectedResult = this.state.selectedResult;
        let characters = this.state.characters.filter((c,id) => id !== index);
        // console.log(characters);
        selectedResult = selectedResult.concat(this.state.characters[index]);
        this.setState({
            characters: characters,
            selectedResult: selectedResult
        });        
    }

    render(){
        let text = this.state.characters.map((c,index) => (
            <ChineseCharacter
                clicked = {() => this.characterClickedHandler(index)} 
                key = {index}>{c}</ChineseCharacter>
        ));
        // let validationCheck = "You are not chinese dude!";
        let validationCheck = null;
        if (this.state.characters.length === 0) {
            // console.log(this.state.phrase);
            // console.log(this.state.selectedResult);
            if (this.state.phrase === this.state.selectedResult)
            {
                validationCheck = <p>你 是 中 国 人, 你 好!</p>
            }
            else {
                validationCheck = <p>You are not chinese dude!</p>
            }
        }
        return(
            <div className = {classes.Chinese}>
                <div className = {classes.ChineseChallenge}>
                    <h1 className = {classes.ChineseTitle}>Chinese Challenge</h1>
                    <h2>Order the following chinese words!</h2>
                    <div>{text}</div>
                    <input type = "text" value={this.state.selectedResult} readOnly></input>
                    {validationCheck}
                </div>
            </div>
        );
    }
};


export default ChineseChallenge;
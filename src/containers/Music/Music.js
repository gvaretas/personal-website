import React, { Component } from 'react';
import MusicButton from './MusicButton/MusicButton';
import soundFile from '../../assets/music/sample.mp3';


class Music extends Component {
    state = {
        playing: false
    }

    audio = new Audio(soundFile);

    toggleMusicHandler = () => {
        if (this.state.playing) 
        {
            this.setState({
                ...this.state,
                playing: false
            });
        }
        else {
            this.setState({
                ...this.state,
                playing: true
            });
        }
    }

    render(){
        let text = "Play";
        if (this.state.playing){
            this.audio.play();
            text = "Pause";
        }
        else {
            this.audio.pause();
            text = "Play"
        }
        return(
            <div>
                <MusicButton clicked={this.toggleMusicHandler}>{text}</MusicButton>
            </div>
        );
    }
}

export default Music;
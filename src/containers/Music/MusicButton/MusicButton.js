import classes from './MusicButton.module.css';

const musicButton = (props) => (
    <button className = {classes.Button} onClick = {props.clicked}>{props.children}</button>
);

export default musicButton;
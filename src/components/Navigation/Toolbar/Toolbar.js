import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import Name from '../../Name/Name';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header>
        <div className = {classes.Top_header}>
            <Name />
            <NavigationItems />
        </div>
    </header>
);

export default toolbar;
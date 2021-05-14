import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className = {classes.NavigationItems}>
        <NavigationItem>Welcome</NavigationItem>
        <NavigationItem>Resume</NavigationItem>
        <NavigationItem>Interests</NavigationItem>
        <NavigationItem>Playroom</NavigationItem>
    </ul>
);

export default navigationItems;
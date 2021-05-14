import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
    <a className = {classes.NavigationItem} href="#">{props.children}</a>
)

export default navigationItem;
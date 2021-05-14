import classes from './WelcomePage.module.css';
import Logo from '../Logo/Logo';
import WelcomeText from './WelcomeText/WelcomeText';

const welcomePage = () => (
    <div className = {classes.WelcomePage}>
        <Logo />
        <WelcomeText />
    </div>
);

export default welcomePage;
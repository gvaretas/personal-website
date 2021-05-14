import React, { Component } from 'react';
// import './App.css';
import Layout from './hoc/Layout/Layout';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
// import Music from './containers/Music/Music';
// import ChineseChallenge from './containers/ChineseChallenge/ChineseChallenge';
import WelcomePage from './components/WelcomePage/WelcomePage';
import classes from './App.module.css';
import Footer from './components/Footer/Footer';

class App extends Component {
  render(){
    return(
      <div className = {classes.App}>
        <Layout>
          <Toolbar />
          <WelcomePage />
          {/* <ChineseChallenge />
          <Music /> */}
          <Footer />
        </Layout>
      </div>
    )
  }
}

export default App;

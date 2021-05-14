import classes from './Layout.module.css';
import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';

class Layout extends Component {
    render(){
        return(
            <Aux>
                <main className = {classes.Main}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;
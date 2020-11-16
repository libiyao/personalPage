import React, {Component} from 'react';
import styles from "./Header.module.css";
import {Link, withRouter} from 'react-router-dom';
import fencing from "../picture/fencing.jpg";
import Navigation from "./Navigation"
class Header extends Component{
    render(){
        return (
            <Navigation/>
        );
    }
}

export default withRouter(Header);
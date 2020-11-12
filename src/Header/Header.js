import React, {Component} from 'react';
import styles from "./Header.module.css";
import {Link, withRouter} from 'react-router-dom';
import fencing from "../picture/fencing.jpg";

class Header extends Component{
    render(){
        return (
            <div className={styles.container}>
                <img className={styles.picture} src={fencing} alt="haha">
                </img>
                <span className={styles.name}>
                    <Link to="/" className={styles.text2}>
                        Bill Li
                    </Link>
                </span>

                <ul className={styles.navigation}>
                    <li className={styles.tag}>
                        <Link to="/" className={styles.text}>
                        Home
                        </Link>
                    </li>
                    <li className={styles.tag}>
                        <Link to="/Education" className={styles.text}>
                        Education
                        </Link>
                    </li>
                    <li className={styles.tag}>
                        <Link to="/Experience" className={styles.text}>
                        Experience
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default withRouter(Header);
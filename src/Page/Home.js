import React, { Component } from "react";
import styles from "./Home.module.css";
import head from "../picture/bighead.jpg";

class Home extends Component{
    render(){
        return (
            <div className={styles.container}>
                <img src={head} alt="please work">
                    </img>
                <p>

                </p>
            </div>
        );
    }
}
export default Home;
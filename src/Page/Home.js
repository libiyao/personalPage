import React, { Component } from "react";
import styles from "./Home.module.css";
import head from "../picture/bighead.jpg";

class Home extends Component{
    render(){
        return (
            <div className={styles.container}>
                <div className={styles.pictureContainer}>
                    <img src={head} alt="please work" className={styles.picture}/>
                </div>
                <div className={styles.pContainer}>
                    <p className={styles.paragraph}>
                        My name is Bill Li and I'm a senior studying applied and computational mathematical science at the University of Washington. 
                        There are many options for the core courses and I choose the one with a strong emphasis on discrete mathematics and algorithm.
                        Beside theoretical mathematics courses, I have taken many computer science courses that included topics such as data structures & algorithms, querying languages,
                        objective and functional oriented languages, and software development tools and concepts. 
                    </p>
                </div>
                
            </div>
        );
    }
}
export default Home;
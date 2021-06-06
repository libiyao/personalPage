import React, { Component } from "react";
import styles from "./Home.module.css";
import head from "../picture/bighead.jpg";
import fencing from  "../picture/fencing.jpg";
import { Grid, Row, Col } from "react-bootstrap"
class Home extends Component{
    render(){
        return (
            <div className={styles.container}>
                <Row>
                    <Col lg={4}>
                        <div className={styles.pictureContainer}>
                            <img src={head} alt="please work" className={styles.picture}/>
                        </div>
                    </Col>

                    <Col lg={8}>
                        <div className={styles.pContainer}>
                            <h1 className={styles.header}>About me</h1>
                            <p className={styles.paragraph}>
                                My name is Biyao Li and I'm a student at the University of Washington studying applied and computational mathematical science - discrete math and algorithm.
                                I'm really passionate about computer science and discrete math and I had several experiences in front/back-end development and mathematical research. 
                                I'm currently working at Docusign as a data engineering summer intern and I'm interested any related intern/full-time opportunity for fall 2021 and beyond. Feel free to click on other tabs on the top to learn more about my past experiences and projects!
                            </p>
                            <Row>
                                <Col md={7}>
                                    <h3 className={styles.header}>
                                            Interests
                                    </h3>

                                    <ul>
                                        <li className={styles.list}>Software engineering</li>
                                        <li className={styles.list}>Discrete and combinatorial mathematics</li>
                                        <li className={styles.list}>Data analysis</li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                        
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Home;
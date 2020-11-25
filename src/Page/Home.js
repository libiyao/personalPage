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
                                My name is Bill Li and I'm currently a student at the University of Washington studying applied and computational mathematical science - discrete math and algorithm.
                                Beside applied math and pure math courses, I have taken many computer science courses which cover topics such as data structures & algorithm, database and quering langauges, and
                                objected-oriented and functional programming langauges.
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
                            <p className={styles.paragraph}>
                                Feel free to click on other tabs on top to learn more about my past experience and projects!
                            </p>
                        </div>
                        
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Home;
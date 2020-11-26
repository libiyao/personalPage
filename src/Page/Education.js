import React, { Component } from "react";
import styles from "./Education.module.css";
import { Grid, Row, Col } from "react-bootstrap";
import uw from "../picture/uw.png";
class Education extends Component{
    render(){
        return (
            <div className={styles.container}>
                <Row>
                    <Col lg={4}>
                        <div className={styles.piccontainer}>
                            <img className={styles.picture} src={uw} alt="uw">
                            </img>
                        </div>
                        
                    </Col>

                    <Col lg={8}>
                        <div className={styles.content}>
                            <h1>
                                University of Washington
                            </h1>
                            <span className={styles.bolded}>Degree:</span><span> Bachelor of Science</span> <br/>
                            <span className={styles.bolded}>Major:</span><span> Applied and computational mathematical science - Discrete math and algorithm</span><br/>
                            <span className={styles.bolded}>Expected Graduation date: </span> <span>Winter 2021</span><br/>
                            <span className={styles.bolded}>GPA: </span> <span>3.75</span><br/>
                            <span className={styles.bolded}>Award: </span> <span>Dean's list for 7 consecutive quarters</span><br/>
                            <span className={styles.bolded}>Course taken: </span>
                            <Row>
                                <Col md={4}>
                                    <h5 className={styles.nonCenter}>
                                        Math & Applied Math
                                    </h5>
                                    <ul>
                                        <li className={styles.list}>Differential Equation</li>
                                        <li className={styles.list}>Matrix algebra</li>
                                        <li className={styles.list}>Linear algebra and numerical analysis</li>
                                        <li className={styles.list}>Probability</li>
                                        <li className={styles.list}>Combinatorial theory</li>
                                    </ul>
                                </Col>
                                <Col md={4}>
                                    <h5 className={styles.nonCenter}>
                                        Computer science
                                    </h5>
                                    <ul>
                                        <li className={styles.list}>Computer programming with Java</li>
                                        <li className={styles.list}>Data structure & algorithm</li>
                                        <li className={styles.list}>Database system</li>
                                        <li className={styles.list}>Intermediate data programming with Python</li>
                                        <li className={styles.list}>Functional and Object-oriented programming languages</li>

                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                
            </div>
        )
    }
}

export default Education;
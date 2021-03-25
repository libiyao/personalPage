import React, { Component } from "react";
import styles from "./Experience.module.css";
import { Grid, Row, Col } from "react-bootstrap";
import TimeLine from "./TimeLine.js";
const experience = [{company: "Washington Experimental Mathematics Laboratory", startDate: "Sept, 2020", endDate: "Dec, 2020", position: "Researcher", link: "https://arxiv.org/abs/2012.04625"},
{company: "Local & Yonder", startDate: "Aug, 2020", endDate: "No, 2020", position: "Frontend developer", link: "https://portal.localandyonder.com/"},
                    {company: "Yule technology", startDate: "July, 2020", endDate: "Sept, 2020", position: "Backend developer"},


                    ];
class Experience extends Component{
    render(){
        return (
            <div className={styles.container}>
                <Row>
                    <Col lg={6}>
                        <h1>Experience</h1>
                    </Col>
                    <Col lg={6}>
                        <div className={styles.timeLine}>
                            {experience.map((data, idx) => (
                                <TimeLine data={data} key={idx}/>
                            ))}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Experience;
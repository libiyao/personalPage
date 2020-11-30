import react, {Component} from "react";
import styles from "./TimeLine.module.css";
class TimeLine extends Component{
    render(){
        const {data} = this.props;
        return(
            <div className={styles.timeLineContainer}>
                <div className={styles.content}>
                        <span className={styles.title}>
                            {data.position}
                        </span>
                        <span>
                            {data.company}
                        </span>

                        <span className={styles.time}>
                            {data.startDate} - {data.endDate}
                        </span>

                        {data.link != null && <a href={data.link}>View more</a>}
                        <span className={styles.circle} />
                </div>
                
            </div>
        )
    }
}

export default TimeLine;
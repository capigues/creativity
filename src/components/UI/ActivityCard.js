import classes from './ActivityCard.module.css'

const ActivityCard = (props) => {
    return <div className={classes.activity} id={props.activity.id}>
        <h3>{props.activity.activity}</h3>
        <p>Type: {props.activity.type}</p>
        <p>Participants: {props.activity.participants}</p>
        <p>Price: {props.activity.price}</p>
    </div>
}

export default ActivityCard;
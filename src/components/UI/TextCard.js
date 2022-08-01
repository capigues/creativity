import classes from './TextCard.module.css'

const TextCard = (props) => {
    return <div className={classes.card}>
        {props.children}
    </div>
}

export default TextCard;
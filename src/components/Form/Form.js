import { useState } from 'react';
import classes from './Form.module.css';

const Form = (props) => {
    const [enteredType, setEnteredType] = useState('');
    const [enteredAccessibility, setEnteredAccessibility] = useState('');
    const [enteredParticipants, setEnteredParticipants] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');

    const typeChangeHandler = (e) => {
        setEnteredType(e.target.value);
    }

    const accessibilityChangeHandler = (e) => {
        setEnteredAccessibility(e.target.value);
    }

    const participantsChangeHandler = (e) => {
        setEnteredParticipants(e.target.value);
    }

    const priceChangeHandler = (e) => {
        setEnteredPrice(e.target.value)

    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        const data = {
            type: enteredType,
            accessibility: enteredAccessibility,
            participants: enteredParticipants,
            price: enteredPrice
        }

        props.submitForm(data);
    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.fields}>
            <label htmlFor="type">Type</label>
            <input
                type="text"
                id="type"
                onChange={typeChangeHandler} 
                value={enteredType}
            />
        
        
            <label htmlFor="accessibility">Accessibility</label>
            <input 
                type="number"
                min={0}
                max={1}
                step={0.1} 
                id="accessibility"
                onChange={accessibilityChangeHandler}
                value={enteredAccessibility}
            />
        
        
            <label htmlFor="participants">Participants</label>
            <input 
                type="number"
                id="participants" 
                onChange={participantsChangeHandler}
                value={enteredParticipants}
            />
        
        
            <label htmlFor="price">Price</label>
            <input 
                type="number"
                min={0}
                max={1}
                step={0.1}  
                id="price" 
                onChange={priceChangeHandler}
                value={enteredPrice}
            />
            
            <button className={classes.button}>Get Activity!</button>
        </div>
        
    </form>
}

export default Form;
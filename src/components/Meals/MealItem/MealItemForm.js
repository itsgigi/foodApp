import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const [amountIsvalid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumbber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumbber < 1 ||
            enteredAmountNumbber > 10
        ) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumbber);
    };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Quantità"
                input={{
                    id: "amount_" + props.id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button>+ Aggiungi</button>
            {!amountIsvalid && <p>Per favore inserisci un numero valido (1-10)</p>}
        </form>
    );
};

export default MealItemForm;

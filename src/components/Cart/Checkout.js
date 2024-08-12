import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
//const isNot5Char = (value) => value.trim().length !== 5;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    roomNumber: true,
    notes: false
  });

  const nameInputRef = useRef();
  const roomNumberInputRef = useRef();
  const notesInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredRoomNumber = roomNumberInputRef.current.value;
    const enteredNotes = notesInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredRoomNumberIsValid = !isEmpty(enteredRoomNumber);

    setFormInputValidity({
      name: enteredNameIsValid,
      roomNumber: enteredRoomNumberIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredRoomNumberIsValid

    if (!formIsValid) {
      return;
    }
    //submit the cart data
    props.onSubmit({
      name: enteredName,
      roomNumber: enteredRoomNumber,
      notes: enteredNotes
    });
  };

  //css classes
  const nameControlClasses = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`;
  const roomNumberControlClasses = `${classes.control} ${
    formInputValidity.street ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">*Cognome</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Per favore inserisci un nome valido!</p>}
      </div>
      <div className={roomNumberControlClasses}>
        <label htmlFor="roomNumber">*Numero di camera</label>
        <input type="text" id="roomNumber" ref={roomNumberInputRef} />
        {!formInputValidity.street && <p>Per favore inserisci un numero valido!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor="notes">Note</label>
        <input type="text" id="notes" ref={notesInputRef}/>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Annulla
        </button>
        <button className={classes.submit}>Invia</button>
      </div>
    </form>
  );
};

export default Checkout;

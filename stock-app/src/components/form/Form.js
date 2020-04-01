import React, {useState, useEffect} from 'react';

const Form = (props) => {


    return (
        <form>
            <input className={"stockInput"} type={"text"} value={props.current} onChange={event => props.setCurrent(event.target.value)} />
            <button onClick={props.changeStock} type={"submit"} className={"submitStockChange"}>Submit</button>
        </form>
    )
};

export default Form;
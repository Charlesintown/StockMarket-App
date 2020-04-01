import React, {useState, useEffect} from 'react';
import stockSymbols2 from "../../stocksSymbols/StockSymbols2";

const Form = (props) => {

    const stock = stockSymbols2.stocks[0];
    const[title, setTitle] = useState("");

    const entries = Object.entries(stock);
    let stockTab = [];
    for(const el of entries) {
        stockTab.push(el[1][0]);
    }

    console.log(stockTab);



    return (

        <form>
            <input className={"stockInput"} type={"text"} value={props.current} onChange={event => props.setCurrent(event.target.value)} />
            <button onClick={props.changeStock} type={"submit"} className={"submitStockChange"}>Submit</button>
        </form>

    )


};

export default Form;
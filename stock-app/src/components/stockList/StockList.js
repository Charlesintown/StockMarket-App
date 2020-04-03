import React, {useState, useEffect} from 'react';
import stockSymbols2 from "../../stocksSymbols/StockSymbols2";

const StockList = (props) => {

    const stock = stockSymbols2.stocks[0];
    const entries = Object.entries(stock);
    let stockTab = [];

    for(const el of entries) {
        stockTab.push(el[1][0]);
    }

    const chooseCompany = (symbol, setCurrent, name) => {
        setCurrent(prevState => symbol);
        props.changeStock();
        props.companyName(name);
    };

    return (

        <>
            <ul>
                {stockTab.map(el => {
                    return (
                        <li onClick={event => chooseCompany(el.symbol, props.setCurrentStock, el.name)} key={el.symbol}>{el.name}</li>
                    )
                })}
            </ul>
        </>

    )


};

export default StockList;
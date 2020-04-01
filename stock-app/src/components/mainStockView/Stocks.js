import React, {useState, useEffect} from 'react';
import Plot from '../../../node_modules/react-plotly.js/react-plotly';
import Form from "../form/Form";
import PlotView from "../plotView/PlotView";
import stockSymbols from "../../stocksSymbols/StockSymbols";

const Stocks = () => {

    const[chartValuesX, setChartValuesX] = useState([]);
    const[chartValuesY, setChartValuesY] = useState([]);
    const[currentStock, setCurrentStock] = useState("");

    const fetchStockMarket = () => {
        const API_KEY = `P6C0Q88ZI50BWU1H`;
        let stockSymbol = `NKE`;
        let fetch_API = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${currentStock}&outputsize=compact&apikey=${API_KEY}`;

        fetch(fetch_API).then(response => {
            return response.json();
        }).then(data => {
            const dataDaily = data[`Time Series (Daily)`];
            for(const key in dataDaily) {
                setChartValuesX(prevState => [...prevState, key]);
                setChartValuesY(prevState => [...prevState, data[`Time Series (Daily)`][key][`4. close`]])
            }
        })
    };

    const changeStock = (e) => {
        e.preventDefault();
        setChartValuesX(prevState => []);
        setChartValuesY(prevState => []);
        fetchStockMarket();
    };

    useEffect(() => {
       fetchStockMarket()
    }, []);

    return (
        <>
            <h1>Stock</h1>
            <PlotView xValues={chartValuesX} yValues={chartValuesY}/>
            <Form current={currentStock} setCurrent={setCurrentStock} changeStock={changeStock}/>

        </>
    )
};

export default Stocks;
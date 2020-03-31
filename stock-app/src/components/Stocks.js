import React, {useState, useEffect} from 'react';
import Plot from 'react-plotly.js';
import stockSymbols from "../stocksSymbols/StockSymbols";

const Stocks = () => {

    const inputStock = document.querySelector(".stockInput");
    const submitStockChange = document.querySelector(".submitStockChange");

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
            console.log(data);
            const dataDaily = data[`Time Series (Daily)`];
            console.log(dataDaily);
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
            <p>
                <Plot
                    data={[
                        {
                            x: chartValuesX,
                            y: chartValuesY,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: {color: 'red'},
                        }
                    ]}
                    layout={{width: 740, height: 480, title: 'A Fancy Plot'}}
                />
            </p>
            <form>
                <input className={"stockInput"} type={"text"} value={currentStock} onChange={event => setCurrentStock(event.target.value)} />
                <button onClick={changeStock} type={"submit"} className={"submitStockChange"}>Submit</button>
            </form>

        </>
    )
};

export default Stocks;
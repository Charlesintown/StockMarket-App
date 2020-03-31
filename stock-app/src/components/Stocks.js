import React, {useState, useEffect} from 'react';

const Stocks = () => {

    const[chartValuesX, setChartValuesX] = useState([]);
    const[chartValuesY, setChartValuesY] = useState([]);

    const fetchStockMarket = () => {
        const API_KEY = `P6C0Q88ZI50BWU1H`;
        let stockSymbol = `AMZN`;
        let fetch_API = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&outputsize=compact&apikey=${API_KEY}`;

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

    useEffect(() => {
       fetchStockMarket()
    });

    return (
        <>
            <h1>Stock</h1>
            <p>
                x values: {chartValuesX}
                y values: {chartValuesY}
            </p>

        </>
    )
};

export default Stocks;
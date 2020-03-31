import React, {useState, useEffect} from 'react';
import Plot from 'react-plotly.js';

const Stocks = () => {

    const[chartValuesX, setChartValuesX] = useState([]);
    const[chartValuesY, setChartValuesY] = useState([]);

    const fetchStockMarket = () => {
        const API_KEY = `P6C0Q88ZI50BWU1H`;
        let stockSymbol = `IBM`;
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

        </>
    )
};

export default Stocks;
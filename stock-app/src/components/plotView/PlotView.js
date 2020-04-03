import React, {useState, useEffect} from 'react';
import Plot from '../../../node_modules/react-plotly.js/react-plotly';


const PlotView = (props) => {

    const[plotWidth, setPlotWidth] = useState(780);

    let plotHeight = 500;

    if(window.innerWidth < 1000) {
        setPlotWidth(prevState => 390)
    }



    return (
        <div>
            <div className={"plot-border"} style={{width: "100%"}}>
                <Plot

                    data={[
                        {
                            x: props.xValues,
                            y: props.yValues,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: {color: 'red'},
                        }
                    ]}
                    layout={{width: `${plotWidth}`, height: `${plotHeight}`,  title: `${props.companyName}`}}

                />
            </div>
        </div>


    )
};

export default PlotView;
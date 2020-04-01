import React, {useState, useEffect} from 'react';
import Plot from '../../../node_modules/react-plotly.js/react-plotly';


const PlotView = (props) => {


    return (
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
            layout={{width: 740, height: 480, title: 'A Fancy Plot'}}
        />
    )
};

export default PlotView;
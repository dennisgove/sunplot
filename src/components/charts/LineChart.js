import React from 'react'
import Chartist from 'chartist'

export default class LineChart extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.updateChart(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.updateChart(nextProps);
    }
    updateChart(props) {
        if(props.data!== undefined && props.data['result-set']!== undefined){
            const docs = props.data['result-set'].docs

            const data = {
                labels: [],
                series: [[]]
            }
            docs.map(doc=>(
                data.labels.push(Object.values(doc)[0]),
                data.series[0].push(Object.values(doc)[1])
            ))

            return new Chartist.Line('#linechart', data);
        }
    }

    render() {
        return (
            <div id="linechart" className="chart" style={{stroke:"red"}}></div>
        )
    }
}

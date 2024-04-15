import './SubscriptionChart.css'
import Chart from '../../templates/charts/Chart';
const SubscriptionChart=(props)=>{
    const chartData=[{label:'Jan',value:0},
                    {label:'Feb',value:0},
                    {label:'Mar',value:0},
                    {label:'Apr',value:0},
                    {label:'May',value:0},
                    {label:'Jun',value:0},
                    {label:'Jul',value:0},
                    {label:'Aug',value:0},
                    {label:'Sep',value:0},
                    {label:'Oct',value:0},
                    {label:'Nov',value:0},
                    {label:'Dec',value:0},
                ];
     for(const subscription of props.filteredSubscription){
        const month=subscription.data.getMonth;
        chartData[month].value += subscription.amount
     }               
    return (
        <Chart dataSets={chartData}/>
    )
}
export default SubscriptionChart;
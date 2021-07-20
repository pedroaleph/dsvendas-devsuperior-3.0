import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BACKEND_URL } from 'utils/requests';

type ChartData = {
  labels: string[],
  series: number[],
}

//const mockData = {
//  series: [477138, 499928, 444867, 220426, 473088],
//  labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
//}

const options = {
  legend: {
      show: true
  }
}

const DonutChart = () => {

  let chartData : ChartData = { labels: [], series: [] };

  axios.get(`${BACKEND_URL}/sales/amount-by-seller`)
    .then(res => {
      const data  = res.data as SaleSum[];
      const myLabels = data.map(x => x.seller_name);
      const mySeries = data.map(x => x.sum);

      chartData = { labels: myLabels, series: mySeries };
      console.log(chartData);
    })

  return (
    <Chart
      options={{...options, labels: chartData.labels}}
      series={chartData.series}
      type='donut'
      height='240'
    />
 );
};

export default DonutChart;

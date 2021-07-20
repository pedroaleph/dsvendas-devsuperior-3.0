import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BACKEND_URL } from 'utils/requests';

type ChartData = {
  labels: string[],
  series: number[],
}

const options = {
  legend: {
      show: true
  }
}

const DonutChart = () => {
  const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

  useEffect(() => {
    axios.get(`${BACKEND_URL}/sales/amount-by-seller`)
    .then(res => {
      const data  = res.data as SaleSum[];
      const myLabels = data.map(x => x.seller_name);
      const mySeries = data.map(x => x.sum);

      setChartData({ labels: myLabels, series: mySeries });
    })
  }, []);

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

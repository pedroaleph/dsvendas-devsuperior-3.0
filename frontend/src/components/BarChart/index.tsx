import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';
import { BACKEND_URL } from 'utils/requests';

type SeriesData = {
  name: string;
  data: number[];
}

type ChartData = {
  labels: {
    categories: string[];
  };
  series: SeriesData[];
}

const options = {
  plotOptions: {
    bar: {
      horizontal: true,
    }
  },
};

const BarChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: []
    },
    series: [
      {
        name: "",
        data: []
      }
    ]
  });

  useEffect(() => {
    axios.get(`${BACKEND_URL}/sales/success-by-seller`)
      .then(res => {
        const data = res.data as SaleSuccess[];
        const myLabels = data.map(x => x.seller_name);
        const mySeries = data.map(x => round(100.0 * x.deals / x.visited, 1));

        setChartData({
          labels: {
            categories: myLabels,
          },
          series: [
            {
              name: "% Success",
              data: mySeries,
            }
          ]
        });
      })
  }, []);

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
      height="240"
    />
  );
};

export default BarChart;

import React from 'react'
import Chart from 'react-apexcharts'

const ChartComponent = (props) => {
  const { chart } = props
  const { type, series, categories, labels } = chart

  var options = {
    series: series,
    chart: {
      type: type,
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: categories,
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val > 1 ? val + ' bugs' : val + ' bug'} `
        },
      },
    },
  }

  return <Chart series={series} type={type} options={options} labels={labels} />
}

export default ChartComponent

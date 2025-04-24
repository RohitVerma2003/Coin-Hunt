import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { XAxis } from 'recharts'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const HistoricCharts = ({ coinId }) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`
        )
        const json = await res.json()
        setError(false)
        setData(json.prices)
      } catch (error) {
        setError(true)
      }
    }

    fetchChartData()
  }, [coinId])

  const chartData = {
    labels:
      data.length > 0
        ? data.map(coin => {
            const date = new Date(coin[0])
            return date.toLocaleDateString()
          })
        : '',
    datasets: [
      {
        label: `${coinId.toUpperCase()} Price (USD)`,
        data: data.length > 0 ? data.map(coin => coin[1]) : '',
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)'
      }
    ]
  }

  return (
    <div>
      {!error ? <Line
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
          },
          scales: {
            x: { display: false },
            y: { display: false }
          },
          elements: {
            point: { radius: 0 }
          }
        }}
        height={50}
      />  : "No Graph Available"}
    </div>
  )
}

export default HistoricCharts

"use client"
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [{
            label: 'banks',
            data: [2356.54, 2123.5, 1223.9],
            backgroundColor: ['#0a07f6', '#22c6f5', '#049bc7']

        }],
        lebels: ['bank 1', 'bank 2', 'bank 3']
    }
    return <Doughnut data={data}
        options={{
            cutout: '60%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }
        }
    />
    }

    export default DoughnutChart

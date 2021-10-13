
import React from 'react'
import Chart from "react-apexcharts";



const PieChart = ({ pieData }) => {

    let labels = ["Male", "Female"]

    let options = {
        chart: {
            toolbar: {
                show: false
            },
        },
        legend: {
            show: false,
            position: 'bottom'
        },
        colors: ['#6B62CE', '#E91E63'],
        labels: labels,
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '60%',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            color: "black",
                        },
                        value: {
                            show: true,
                            fontSize: "14px"
                        },
                        total: {
                            show: true,
                            fontSize: "10px"
                        }
                    }
                }
            }
        }
    }

    return (

        <Chart
            options={options}
            series={pieData}
            type="donut"
            height="200px"
        />

    )
}

export default PieChart

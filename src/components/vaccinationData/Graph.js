import React, { useEffect, useState } from 'react'
import { Input } from 'semantic-ui-react'
import Chart from "react-apexcharts";
import axios from 'axios';

const Graph = ({ monthData, title }) => {

    //const [data, setData] = useState([])
    const [categories, setCategories] = useState([])
    const [total, setTotal] = useState([])
    const [male, setMale] = useState([])
    const [female, setFemale] = useState([])


    useEffect(() => {
        setCategoriesData(monthData)
        setTotalData(monthData)
        setFirstDose(monthData)
        setSecondDose(monthData)
    }, [])

    const setCategoriesData = () => {
        let categories = monthData.map(data => data.month)
        setCategories(categories)
    }

    const setTotalData = () => {
        let total = monthData.map(data => data.vaccination.total_dose)
        setTotal(total)
    }

    const setFirstDose = () => {
        let firstDose = monthData.map(data => (data.vaccination.total_dose - data.vaccination.second_dose))
        setMale(firstDose)
    }
    const setSecondDose = () => {
        let secondDose = monthData.map(data => data.vaccination.second_dose)
        setFemale(secondDose)
    }

    let options = {
        chart: {
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: true
        },
        stroke: {
            curve: 'smooth',
        },
        // stroke: {
        //     show: true,
        //     curve: "smooth",
        //     lineCap: 'round'
        // },
        colors: ['#44337a', '#E91E63', '#FF9800'],
        xaxis: {
            categories: categories,
        },
        yaxis: [
            {

                axisBorder: {
                    show: true,
                }
            }
        ]

    }
    let series = [

        {
            name: 'Male',
            type: 'bar',
            data: male
        },
        {
            name: "Female",
            type: "bar",
            data: female
        },
        {
            name: "Total",
            type: 'line',
            data: total
        }
    ]
    return (
        <div style={{ boxShadow: `-5px 5px 17px 2px rgba(235,223,223,0.75)`, borderRadius: "6px", padding: "5px 10px", minHeight: "40vh" }}>
            <div style={{ padding: "10px 10px", backgroundColor: "#f8ffff", border: "1px solid teal", borderRadius: "4px", marginBottom: "20px" }}>
                <h5 style={{ marginBottom: "2px" }}>{title} Data for A Month</h5>
            </div>
            <Chart
                options={options}
                series={series}
                width="100%"
                height="100%"
            />
        </div>
    )
}

export default Graph

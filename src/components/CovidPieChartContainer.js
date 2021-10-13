import React, { useEffect, useState } from 'react'
import PieChart from './covidData/PieChart'
import { Dropdown, Label } from 'semantic-ui-react'
import axios from "axios"



const PieChartContainer = ({ monthData, title }) => {


    const [options, setOptions] = useState([])
    const [date, setDate] = useState("")
    const [pieData, setPieData] = useState([0, 0])

    const updateDropdownMonthData = ({ daily_records }) => {
        let newArray = daily_records.map((data, index) => ({ key: index + 1, text: data.date, value: data.date }))
        setOptions(newArray)
    }

    useEffect(() => {
        updateDropdownMonthData(monthData)

    }, [])




    const handleDropdown = (e, { value }) => {
        if (value) {
            setDate(value)
            let newArray = monthData.daily_records.filter(data => data.date === value)
            let pieArray = [newArray[0]["male"], newArray[0]["female"]]
            setPieData(pieArray)
        } else {
            setPieData([0, 0])
            setDate("")
        }
    }

    return (
        <>

            <div style={{ width: "30vw" }}>
                <div style={{ padding: "10px 10px", backgroundColor: "#f8ffff", border: "1px solid teal", borderRadius: "4px", marginBottom: "20px" }}>
                    <h5 style={{ marginBottom: "2px" }}>{title} Daily data for the Month of January</h5>
                    <p style={{ color: "gray", fontSize: "12px" }}>Click on the dropdown to change dates</p>
                </div>

                <>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Label as='a' style={{ width: "15vw", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {date ? new Date(date).toDateString() : "Kindly Select A Date"}
                        </Label>
                        <Dropdown placeholder='Select Date' clearable options={options} search selection onChange={handleDropdown} />
                    </div>
                    <PieChart pieData={pieData} />
                </>

            </div>
        </>
    )
}

export default PieChartContainer

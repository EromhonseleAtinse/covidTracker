import React, { useEffect, useState } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const DataTable = ({ tableData }) => {

    const Header = ["Month", "Total Infected", "Male Infected", "Female Infected"];

    const [tableDataArray, setTableDataArray] = useState([])

    const handleData = () => {
        let emptyArray = []
        let tableArray = []
        tableData.forEach(data => {
            if (!emptyArray.includes(data.month)) {
                emptyArray.push(data.month)
                tableArray.push(data)
            }

            setTableDataArray(tableArray)
        })
    }

    const getTotalInfection = (dataArray) => {
        let number = 0
        dataArray.forEach(data => number = number + data.total_infection)
        return number
    }

    const getMaleInfection = (dataArray) => {
        let number = 0
        dataArray.forEach(data => number = number + data.male)
        return number
    }

    const getFemaleInfection = (dataArray) => {
        let number = 0
        dataArray.forEach(data => number = number + data.female)
        return number
    }

    useEffect(() => {
        handleData()
    }, [])

    return (
        <div style={{ padding: "0" }}>
            <div style={{ padding: "10px 10px", backgroundColor: "#f8ffff", border: "1px solid teal", borderRadius: "4px", marginBottom: "20px" }}>
                <h5 style={{ marginBottom: "2px" }}> Total Data For The Year 2021</h5>
                <p style={{ color: "gray", fontSize: "12px" }}>Click on the dropdown to change dates</p>
            </div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Month</Table.HeaderCell>
                        <Table.HeaderCell>Total Infected</Table.HeaderCell>
                        <Table.HeaderCell>Male Infected</Table.HeaderCell>
                        <Table.HeaderCell>Female Infected</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {tableDataArray.map(data =>
                    (<Table.Row>
                        <Table.Cell>{data.month}</Table.Cell>
                        <Table.Cell>{getTotalInfection(data.daily_records)}</Table.Cell>
                        <Table.Cell>{getMaleInfection(data.daily_records)}</Table.Cell>
                        <Table.Cell>{getFemaleInfection(data.daily_records)}</Table.Cell>
                    </Table.Row>)
                    )
                    }
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>

                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>

        </div>
    )
}

export default DataTable

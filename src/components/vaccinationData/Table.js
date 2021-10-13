import React, { useEffect, useState } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const DataTable = ({ tableData, title }) => {

    const Header = ["Month", "Total Vaccinated", "First Dose", "Second Dose"];

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



    useEffect(() => {
        handleData()
    }, [])

    return (
        <div style={{ padding: "0" }}>
            <div style={{ padding: "10px 10px", backgroundColor: "#f8ffff", border: "1px solid teal", borderRadius: "4px", marginBottom: "20px" }}>
                <h5 style={{ marginBottom: "2px" }}> {title} Total Data For The Year 2021</h5>
                <p style={{ color: "gray", fontSize: "12px" }}>Click on the dropdown to change dates</p>
            </div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Month</Table.HeaderCell>
                        <Table.HeaderCell>Total Vaccinated</Table.HeaderCell>
                        <Table.HeaderCell>First Dose</Table.HeaderCell>
                        <Table.HeaderCell>Second Dose</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {tableDataArray.map((data, index) =>
                    (<Table.Row key={index}>
                        <Table.Cell>{data.month}</Table.Cell>
                        <Table.Cell>{data.vaccination.total_dose}</Table.Cell>
                        <Table.Cell>{data.vaccination.total_dose - data.vaccination.second_dose}</Table.Cell>
                        <Table.Cell>{data.vaccination.second_dose}</Table.Cell>
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

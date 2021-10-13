import React, { useEffect, useState } from 'react'
import Graph from '../components/covidData/Graph'
import Table from '../components/covidData/Table'
import { Grid, Label } from 'semantic-ui-react'
import CovidPieChartContainer from '../components/CovidPieChartContainer'
import { Loader } from 'semantic-ui-react'

import axios from "axios"

const CovidView = () => {

    const [monthData, setMonthData] = useState({})
    const [loading, setLoading] = useState(true)
    const [tableData, setTableData] = useState([])


    useEffect(() => {
        axios.get("http://localhost:5000/covid_19")
            .then((response) => {
                setMonthData(response.data[0]["months"][0])
                setTableData(response.data[0]["months"])
            }).catch((error) => {

            }).finally(() => {
                setLoading(false)
            })
        // eslint-disable-next-line
    }, [])

    return (
        <div style={{ padding: "0 10px" }}>
            <Grid columns={2} stackable>
                <Grid.Column width={16}>
                    {loading ? <Loader active={loading} inline /> : <Graph monthData={monthData} title="Covid" />}
                </Grid.Column>
                <Grid.Column width={10} >
                    `{loading ? <Loader active={loading} inline /> : <Table tableData={tableData} title="Covid" />}
                </Grid.Column>
                <Grid.Column width={6} style={{ marginTop: "18px" }}>
                    {loading ? <Loader active={loading} inline /> : <CovidPieChartContainer monthData={monthData} title="Covid" />}
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default CovidView

import React, { useEffect, useState } from 'react'
import Graph from '../components/vaccinationData/Graph'
import Table from '../components/vaccinationData/Table'
import { Grid, Label } from 'semantic-ui-react'
import VaccinationPieContainer from "../components/VaccinationPieContainer"

import { Loader } from 'semantic-ui-react'

import axios from "axios"

const VaccinationView = () => {

    const [monthData, setMonthData] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        axios.get("http://localhost:5000/vaccination")
            .then((response) => {

                setMonthData(response.data)

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
                    {loading ? <Loader active={loading} inline /> : <Graph monthData={monthData} title="Vaccination" />}
                </Grid.Column>
                <Grid.Column width={10} >
                    `{loading ? <Loader active={loading} inline /> : <Table tableData={monthData} title="Vaccination" />}
                </Grid.Column>
                <Grid.Column width={6} style={{ marginTop: "18px" }}>
                    {loading ? <Loader active={loading} inline /> : <VaccinationPieContainer monthData={monthData} title="Vaccination" />}
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default VaccinationView

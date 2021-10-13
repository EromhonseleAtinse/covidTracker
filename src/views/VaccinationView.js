import React from 'react'
import Graph from '../components/vaccinationData/Graph'
import PieChart from '../components/vaccinationData/PieChart'
import Table from '../components/vaccinationData/Table'

const VaccinationView = () => {
    return (
        <div>
            <Graph />
            <Table />
            <PieChart />
        </div>
    )
}

export default VaccinationView

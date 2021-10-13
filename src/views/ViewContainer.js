import React, { useState } from 'react'
import Header from '../components/Header'
import Switcher from '../components/Switcher'
import CovidView from './CovidView'
import VaccinationView from './VaccinationView'



const ViewContainer = () => {
    const [state, setState] = useState("covid")
    let switchData = ["covid", "vaccination"]
    return (
        <div className="app_container">
            <Switcher setState={setState} switchData={switchData} state={state} />
            <div className="app_body">
                {state === "covid" ? <CovidView /> : <VaccinationView />}
            </div>

        </div>
    )
}

export default ViewContainer

import React, { useState, lazy, Suspense } from 'react'
import Switcher from '../components/Switcher'
import { Loader } from 'semantic-ui-react'
const CovidView = lazy(() => import('./CovidView'))
const VaccinationView = lazy(() => import('./VaccinationView'))

const ViewContainer = () => {
    const [state, setState] = useState("covid")
    let switchData = ["covid", "vaccination"]
    return (
        <div className="app_container">
            <Switcher setState={setState} switchData={switchData} state={state} />
            <div className="app_body">
                {state === "covid" ?
                    <Suspense fallback={<Loader active inline />}>
                        <CovidView />
                    </Suspense>
                    :
                    <Suspense fallback={<Loader active inline />} >
                        <VaccinationView />
                    </Suspense>
                }
            </div>

        </div>
    )
}

export default ViewContainer

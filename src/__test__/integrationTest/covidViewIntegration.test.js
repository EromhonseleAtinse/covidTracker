import React from 'react'
import { render, waitFor } from '@testing-library/react'
import axios from 'axios';
import { mount, configure } from 'enzyme';
import CovidView from "../../views/CovidView"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

jest.mock('axios');

describe("Integration works well", () => {

    it('API gets called when component gets mounted', async () => {

        const setLoading = jest.fn((b) => b)
        const data = [
            {
                months:
                    [
                        {
                            month: "September",
                            daily_records: [
                                { "date": "9/1/2021", "total_infection": 566, "male": 203, "female": 363 },
                                { "date": "9/2/2021", "total_infection": 678, "male": 327, "female": 351 },
                            ]
                        }
                    ]
            }
        ]

        await axios.get.mockResolvedValueOnce(() => Promise.resolve({ data: {} }))
        const useStateMock = (initState) => [initState, setLoading];
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);

        mount(<CovidView />)

        setLoading(false)

        expect(axios.get).toHaveBeenCalledWith("http://localhost:5000/covid_19");

    })
})

import React from 'react'
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import { shallow, mount, configure } from 'enzyme';
import Switcher from '../../components/Switcher';
import ViewContainer from "../../views/ViewContainer"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });


test('Renders Button with props data', () => {
    let switchData = ["covid", "vaccination"]

    const { getByText } = render(<Switcher switchData={switchData} />);
    expect(getByText("covid")).toBeInTheDocument();
    expect(getByText("vaccination")).toBeInTheDocument();

});

test('Each Switcher button calls state update function setState, and state to be updated', async () => {
    let switchData = ["covid", "vaccination"]
    let initialState = "covid"
    const setState = jest.fn(() => initialState = `${initialState === "covid" ? "vaccination" : "covid"}`)


    const SwitcherComponent = render(<Switcher state={initialState} switchData={switchData} setState={setState} />);
    const useStateMock = (initState) => [initState, setState];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    let covidButton = SwitcherComponent.getByText("covid")
    let vaccinationButton = SwitcherComponent.getByText("vaccination")

    fireEvent.click(vaccinationButton);


    expect(initialState).toBe("vaccination");
    expect(vaccinationButton).toContainHTML("<button class='switcher_button1 switcher_active>vaccination</button>")

    fireEvent.click(covidButton);
    expect(initialState).toBe("covid");
    expect(covidButton).toContainHTML("<button class='switcher_button2 switcher_active>covid</button>")

    expect(setState).toHaveBeenCalledTimes(2);

});


describe('Simulate switcher', () => {
    let wrapper;
    let initialState = "covid"
    const setState = jest.fn((a) => a)
    let switchData = ["covid", "vaccination"]
    const useStateMock = (initState) => [initState, setState];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    beforeEach(() => {
        wrapper = mount(<Switcher state={initialState} switchData={switchData} setState={setState} />);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });


    describe('Home button clicked', () => {
        it('Initial class properties for switcher buttons are rendered ', () => {
            let { getByText } = render(<ViewContainer />);

            expect(getByText("covid")).toContainHTML('<button class="switcher_button1 switcher_active">covid</button>');

            expect(getByText('vaccination')).toContainHTML('<button class="switcher_button2 switcher_default">vaccination</button>');
        });
        it('When switcher is clicked the setState is called', () => {
            wrapper.invoke('setState')()
            expect(setState).toHaveBeenCalled();

        });
    });
});
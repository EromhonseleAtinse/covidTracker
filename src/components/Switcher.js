import React from 'react'

const Switcher = ({ state, setState, switchData }) => {
    const clickHandler = (title) => {
        setState(title)
    }
    return (
        <div style={{ backgroundColor: '#6100bc', width: '100%', borderRadius: "5px", margin: '4px 0' }}>
            {switchData.map((title, index) => <button key={index} className={`switcher_button${index + 1} ${state === title ? 'switcher_active' : 'switcher_default'}`} onClick={() => clickHandler(title)}>{title}</button>)}
        </div>
    )
}

export default Switcher

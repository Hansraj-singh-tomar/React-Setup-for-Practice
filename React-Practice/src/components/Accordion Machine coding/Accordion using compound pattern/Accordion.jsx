import React, { createContext } from 'react'

const AccordionContext = createContext({});

const Accordion = ({ openTabs, handleToggle, children }) => {

    return (
        <AccordionContext.Provider value={{ openTabs, handleToggle }}>
            {children}
        </AccordionContext.Provider>
    )
}

Accordion.Item = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

Accordion.Header = ({ index, children }) => {
    const { handleToggle } = React.useContext(AccordionContext);

    return (
        <div
            onClick={() => handleToggle(index)}
            className="cursor-pointer border-2 border-white p-2"
        >
            {children}
        </div>
    );
};

Accordion.Body = ({ index, children }) => {
    const { openTabs } = React.useContext(AccordionContext);
    if (!openTabs.includes(index)) {
        return null;
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default Accordion
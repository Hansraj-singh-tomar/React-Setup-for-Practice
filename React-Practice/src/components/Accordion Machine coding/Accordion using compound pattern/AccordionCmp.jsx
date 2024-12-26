import React, { useState } from 'react'
import Accordion from './Accordion'

const AccordionCmp = () => {
    const [openTabs, setOpenTabs] = useState([]);

    const handleToggle = (index) => {
        setOpenTabs((prev) =>
            prev.includes(index)
                ? prev.filter((tab) => tab !== index) // Remove if already open
                : [...prev, index] // Add if not open
        );
    };

    return (
        <Accordion openTabs={openTabs} handleToggle={handleToggle}>
            <Accordion.Item>
                <Accordion.Header index={1}>Item 1</Accordion.Header>
                <Accordion.Body index={1}>
                    This is the content of Item 1.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item>
                <Accordion.Header index={2}>Item 2</Accordion.Header>
                <Accordion.Body index={2}>
                    This is the content of Item 2.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default AccordionCmp
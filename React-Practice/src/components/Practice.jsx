import React, { useEffect, useState } from 'react'

const Practice = () => {
    return (
        <div className='flex justify-center'>
            <div>
                <h1 className='font-bold text-3xl'>Custom Tabs</h1>
                <Tabs>
                    <div title='Home'>
                        Tab content for Home
                    </div>
                    <div title='About'>
                        Tab content for About
                    </div>
                    <div title='Contact'>
                        Tab content for Contact
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default Practice

const Tabs = ({ children }) => {
    const [tabHeaders, setTabHeaders] = useState([]);
    const [tabContent, setTabContent] = useState({});
    const [activeTab, setActiveTab] = useState();

    useEffect(() => {
        const headers = [];
        const map = {};
        children.forEach(element => {
            const { title } = element.props
            headers.push(title);
            map[title] = element.props.children
        });
        setTabContent(map);
        setTabHeaders(headers);
        setActiveTab(tabHeaders[0]);
    }, [])

    function handleTabChange(tab) {
        setActiveTab(tab);
    }

    return (
        <div className='mt-4'>
            {
                tabHeaders.map((tab, idx) => {
                    return (
                        <button onClick={() => handleTabChange(tab)} key={tab} className='border-2 border-black p-2 mr-2 active:bg-slate-400'>{tab}</button>
                    )
                })
            }
            <div>
                {
                    Object.keys(tabContent).map((key, idx) => {
                        if (key === activeTab) {
                            return (
                                <p key={idx}>{tabContent[key]}</p>
                            )
                        } else {
                            return null;
                        }
                    })
                }
            </div>
        </div>
    )
}

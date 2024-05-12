import React, { useEffect, useState } from 'react'

const Tabs = (props) => {
    const [tabsHeaders, setTabsHeaders] = useState([]);
    const [contentMap, setContentMap] = useState({});
    const [active, setActive] = useState('');

    const { children } = props;

    // console.log(children);

    useEffect(() => {
        const headers = [];
        const map = {};
        children.forEach(element => {
            // console.log('Element : ', element);
            const { title } = element.props;
            headers.push(title);
            map[title] = element.props.children;
        });
        // console.log('headers => ', headers); // ['Home', 'About', 'Contact']
        setTabsHeaders(headers);
        setActive(headers[0]);
        setContentMap(map);
    }, [props, children])

    function handleTabChange(tab) {
        setActive(tab);
    }

    return (
        <div>
            <div>
                {
                    tabsHeaders.map((tab, idx) => {
                        return (
                            <button onClick={() => handleTabChange(tab)} key={idx} className='border-2 border-black mr-3 px-2 font-bold'>{tab}</button>
                        )
                    })
                }
            </div>
            <div>
                {
                    Object.keys(contentMap).map((key, idx) => {
                        if (key === active) {
                            return (
                                <div key={idx} className='text-center mt-3 font-semibold'>
                                    {contentMap[key]}
                                </div>
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

export default Tabs
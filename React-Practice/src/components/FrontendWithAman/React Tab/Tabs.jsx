import React, { useState } from 'react'

const Tabs = ({ tabsData, onChange }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleTabChange(index) {
        setCurrentTabIndex(index);
    }

    return (
        <div className=''>
            {/* Tabs button */}
            <div>
                {
                    tabsData.map((tab, index) => {
                        return (
                            <button key={index} onClick={() => { handleTabChange(index); onChange(index) }} className='border-white border-2 px-2 active:border-none'>
                                {tab.label}
                            </button>
                        )
                    })
                }
            </div>

            {/* Tabs content */}
            <div className='w-80 h-80 border-white border-2 flex justify-center items-center'>
                {tabsData[currentTabIndex].content}
            </div>
        </div>
    )
}

export default Tabs
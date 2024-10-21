import React from 'react'
import Tabs from './Tabs'

const tabsData = [
    {
        label: "Profile",
        content: <div>Profile Info Content</div>,
    },
    {
        label: "Dashboard",
        content: <div>Dashboard Content</div>,
    },
    {
        label: "Settings",
        content: <div>Settings Content</div>,
    },
    {
        label: "Invoice",
        content: <div>Invoice Content</div>,
    },
]

const ReactTab = () => {
    // console me dekhne ko milega output of this function
    const onTabChangeHandler = (index) => {
        console.log("Tab Changed", index);
    }

    return (
        <Tabs tabsData={tabsData} onChange={onTabChangeHandler} />
    )
}

export default ReactTab
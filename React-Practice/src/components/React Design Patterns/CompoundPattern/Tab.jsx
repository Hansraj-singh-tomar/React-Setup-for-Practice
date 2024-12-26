import { createContext, useContext } from "react";

const TabContext = createContext();

const Tab = ({ currentTab, onChange, children }) => {
    return (
        <TabContext.Provider value={{ currentTab, onChange }}>
            <div className="w-[30%] p-2 border-2 border-white">
                {children}
            </div>
        </TabContext.Provider>
    )
}

export default Tab;

Tab.HeadContainer = ({ children }) => {
    return <div className="flex justify-between">{children}</div>
}

Tab.Item = ({ label, index }) => {
    const { currentTab, onChange } = useContext(TabContext) || {};

    const handleClick = () => {
        onChange(index);
    };

    const isActive = currentTab === index;

    return (
        <div
            onClick={handleClick}
            role="tab"
            aria-selected={isActive}
            className={`cursor-pointer border-2 border-white p-2 
                        ${isActive ? 'bg-green-400 font-bold' : 'bg-black'} 
                        hover:bg-green-400`}
        >
            {label}
        </div>
    );
}

Tab.ContentContainer = ({ children }) => {
    return <div>{children}</div>
}

Tab.ContentItem = ({ index, children }) => {
    const { currentTab } = useContext(TabContext) || {};
    if (currentTab !== index) {
        return null;
    }
    return <div className="bg-gray-600 mt-2 px-2">{children}</div>
}

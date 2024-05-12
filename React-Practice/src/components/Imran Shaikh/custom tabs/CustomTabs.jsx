import React from 'react'
import Tabs from './Tabs'

const CustomTabs = () => {
    return (
        <div className='flex justify-center'>
            <div className='mt-6'>
                <h1 className='font-bold text-2xl text-center'>Custom Tabs</h1>
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

export default CustomTabs
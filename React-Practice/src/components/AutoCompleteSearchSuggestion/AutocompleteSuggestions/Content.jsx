import React from 'react'

const Content = ({ userLang }) => {
    return (
        <div className='w-7/12 bg-black rounded-lg p-2 text-white mt-2'>
            <h1 className='text-center'>User Selected Language</h1>
            {userLang.length == 0 && <h1 className='mt-2 text-center'>No items ...</h1>}
            <ul className='mt-2 pl-4'>
                {
                    [...new Set(userLang)].map((val, i) => <li key={val.id}>{i + 1}. {val.value}</li>)
                }
            </ul>
        </div>
    )
}

export default Content
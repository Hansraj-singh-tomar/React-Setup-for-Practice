import React, { useState } from 'react'

const data = [
    {
        id: 0,
        title: "First",
        checked: false
    },
    {
        id: 1,
        title: "Second",
        checked: false
    },
    {
        id: 2,
        title: "Third",
        checked: false
    },
    {
        id: 3,
        title: "Fourth",
        checked: false
    }
]

const TransferList = () => {

    const [leftList, setLeftList] = useState(data);
    const [rightList, setRightList] = useState([]);

    function checkedList(list, id, checked) {
        return list.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    checked: !checked
                }
            }
            return item
        })
    }


    function handleClick(id, checked, direction) {
        if (direction === 'LEFT') {
            let copyList = [...leftList];
            copyList = checkedList(copyList, id, checked);
            setLeftList(copyList);
        } else {
            let copyList = [...rightList];
            copyList = checkedList(copyList, id, checked);
            setRightList(copyList);
        }
    }

    function reset(list) {
        return list.map((item) => {
            return {
                ...item,
                checked: false
            }
        })
    }

    const handleTransferBtn = (dir) => {
        if (dir === 'left_to_right') {
            let copyList = [...leftList];
            let selectedList = copyList.filter((item) => item.checked)
            let unSelectedList = copyList.filter((item) => !item.checked)
            setLeftList(unSelectedList);
            setRightList(reset([...rightList, ...selectedList]))
        } else if (dir === 'right_to_left') {
            let copyList = [...rightList];
            let selectedList = copyList.filter((item) => item.checked)
            let unSelectedList = copyList.filter((item) => !item.checked)
            setRightList(unSelectedList);
            setLeftList(reset([...leftList, ...selectedList]))
        }
    }

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-2/3 flex items-center justify-around'>
                {/* left list */}
                <div className='w-52 h-60 border-2 border-black p-3'>
                    {
                        leftList?.map(({ title, id, checked }) => {
                            return (
                                <p onClick={() => handleClick(id, checked, 'LEFT')} key={title} id={id} className={`${checked && 'bg-green-300'} cursor-pointer m-2 p-2 bg-gray-300 rounded-lg text-center`}>{title}</p>
                            )
                        })
                    }
                </div>

                {/* center btn */}
                <div className='mx-4 space-y-3'>
                    <button onClick={() => handleTransferBtn('right_to_left')} className='block bg-indigo-500 text-white rounded-lg w-full px-3 py-2'>Left</button>
                    <button onClick={() => handleTransferBtn('left_to_right')} className='block bg-indigo-500 text-white rounded-lg w-full px-3 py-2'>Right</button>
                </div>

                {/* right list */}
                <div className='w-52 h-60 border-2 border-black p-3'>
                    {
                        rightList?.map(({ title, id, checked }) => {
                            return (
                                <p onClick={() => handleClick(id, checked, 'RIGHT')} key={title} id={id} checked={checked} className={`${checked && 'bg-green-300'} m-2 p-2 bg-gray-300 rounded-lg text-center cursor-pointer`}>{title}</p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TransferList
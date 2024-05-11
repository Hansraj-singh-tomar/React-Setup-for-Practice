import React, { useState } from 'react';

const listData = [
    {
        id: 1,
        title: "item-1",
        checked: false,
    },
    {
        id: 2,
        title: "item-2",
        checked: false,
    },
    {
        id: 3,
        title: "item-3",
        checked: false,
    },
    {
        id: 4,
        title: "item-4",
        checked: false,
    },
]


function Practice() {

    const [leftList, setLeftList] = useState(listData);
    const [rightList, setRightList] = useState([]);

    function checkedList(list, id, checked) {
        return list.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    checked: !checked
                }
            }
            return item;
        })
    }

    function handleClick(id, checked, dir) {
        if (dir === 'LEFT') {
            let copyList = [...leftList];
            copyList = checkedList(copyList, id, checked)
            setLeftList(copyList);
        } else {
            let copyList = [...rightList];
            copyList = checkedList(copyList, id, checked)
            setRightList(copyList);
        }
    }

    function reset(list) {
        return list.map((item) => {
            return {
                ...item,
                checked: false,
            }
        })
    }

    function handleTransferBtn(dir) {
        if (dir === 'right_to_left') {
            let copyList = [...rightList];
            let checkedList = copyList.filter((item) => item.checked);
            let unCheckedList = copyList.filter((item) => !item.checked);
            setLeftList(reset([...leftList, ...checkedList]));
            setRightList(unCheckedList);
        } else {
            let copyList = [...leftList];
            let checkedList = copyList.filter((item) => item.checked);
            let unCheckedList = copyList.filter((item) => !item.checked);
            setLeftList(unCheckedList);
            setRightList(reset([...rightList, ...checkedList]))
        }
    }

    return (
        <div className='w-full h-screen bg-gray-500 flex justify-center items-center'>
            <div className='flex items-center w-[50%]'>
                {/* left list */}
                <div className='h-56 w-40 border-2 border-black p-3'>
                    {
                        leftList?.map(({ id, title, checked }) => {
                            return (
                                <h1 onClick={() => handleClick(id, checked, 'LEFT')} key={title} id={id} className={`${checked && 'bg-green-400'} w-full cursor-pointer text-center bg-gray-300 m-2 p-2 rounded-lg`}>{title}</h1>
                            )
                        })
                    }
                </div>


                {/* action button */}
                <div className='mx-4'>
                    <div onClick={() => handleTransferBtn('right_to_left')} className='cursor-pointer w-32 text-center bg-green-400 py-2 '>Left</div>
                    <div onClick={() => handleTransferBtn('left_to_right')} className='cursor-pointer w-32 text-center bg-green-400 py-2 my-2'>Right</div>
                </div>


                {/* right list */}
                <div className='h-56 w-40 border-2 border-black p-3'>
                    {
                        rightList?.map(({ id, title, checked }) => {
                            return (
                                <h1 onClick={() => handleClick(id, checked, 'LEFT')} key={title} id={id} className={`${checked && 'bg-green-400'} w-full cursor-pointer text-center bg-gray-300 m-2 p-2 rounded-lg`}>{title}</h1>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Practice;




import React, { useState } from 'react'

const Folder = ({ folderData, handleInsertFolder = () => { } }) => {

    const [show, setShow] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [isFolder, setIsFolder] = useState(false);


    function handleNewFolder(e, isFolder) {
        setIsFolder(isFolder);
        setShowInput(true);
    }


    function onAddFolder(e) {
        const value = e.target.value;

        if (value && e.keyCode == 13) {
            handleInsertFolder(folderData.id, value, isFolder);
            setShow(true);
            setShowInput(false);
        }
    }


    return (
        <div className='mt-2'>
            <div className='flex justify-between border-2 border-white w-[20%] p-2 mb-2 ml-3 cursor-pointer'>
                <div onClick={() => setShow(!show)} className='hover:underline'>
                    {folderData.type == "folder" ? '📁' : '🗃️'}
                    <span className='ml-2'>{folderData.name}</span>
                </div>
                <div>
                    <button onClick={(e) => handleNewFolder(e, true)} className='bg-white text-black rounded-lg ml-2 p-1'>Folder+</button>
                    <button onClick={(e) => handleNewFolder(e, false)} className='bg-white text-black rounded-lg ml-2 p-1'>File+</button>
                </div>
            </div>
            {
                showInput && (
                    <div className='ml-3'>
                        <input
                            className='p-1 rounded-lg text-black'
                            type="text"
                            placeholder='create file/folder'
                            onBlur={() => setShowInput(false)}
                            autoFocus
                            onKeyDown={(e) => onAddFolder(e)}
                        />
                    </div>
                )
            }
            {
                show &&
                <div className='ml-3' >
                    {
                        folderData?.items?.map((item, idx) => <Folder key={idx} folderData={item} handleInsertFolder={handleInsertFolder} />)
                    }
                </div>
            }
        </div>
    )
}

export default Folder
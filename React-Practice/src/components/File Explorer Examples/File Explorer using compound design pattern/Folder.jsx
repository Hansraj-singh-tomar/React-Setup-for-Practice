import React from 'react'

const Folder = ({ structure, fileFolderName, setFileFolderName, fileFolderDetail, setFileFolderDetail, onFileFolderSave, onDelete }) => {
    return (
        <div className='text-white ml-3'>
            <div className='w-[400px] group flex justify-between mb-2 cursor-pointer'>
                <div className=''>
                    {structure.type == "folder" ? '📁' : '📄'}
                    <span>{structure.name}</span>
                </div>
                <div className='hidden group-hover:flex'>
                    {
                        structure.type == "folder" && (
                            <>
                                <button onClick={() => setFileFolderDetail({ id: structure.id, type: "folder" })} className='hover:text-blue-600'>+📁</button>
                                <button onClick={() => setFileFolderDetail({ id: structure.id, type: "file" })} className='ml-1 hover:text-blue-600'>+📄</button>
                            </>
                        )
                    }
                    <button onClick={() => onDelete(structure.id)} className='ml-2'>🗑️</button>
                    {
                        structure?.id == fileFolderDetail?.id && (
                            <input
                                type="text"
                                value={fileFolderName}
                                onChange={(e) => setFileFolderName(e.target.value)}
                                onKeyUp={onFileFolderSave}
                                autoFocus
                                placeholder='Enter File/Folder Name'
                                className='ml-2 border-2 border-white mt-1 rounded-lg text-black'
                            />
                        )
                    }
                </div>
            </div>
            {
                structure?.items?.map((child) => {
                    return <Folder
                        key={child.id}
                        structure={child}
                        fileFolderDetail={fileFolderDetail}
                        setFileFolderDetail={setFileFolderDetail}
                        fileFolderName={fileFolderName}
                        setFileFolderName={setFileFolderName}
                        onFileFolderSave={onFileFolderSave}
                        onDelete={onDelete}
                    />
                })
            }
        </div>
    )
}

export default Folder


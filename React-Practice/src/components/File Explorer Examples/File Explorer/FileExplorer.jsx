import React, { useState } from 'react'
import { data } from "./data";
import Folder from './Folder';
import useTraverseTree from './useTraverseTree';

const FileExplorer = () => {
    const [folderData, setFolderData] = useState(data);

    const { insertNode, deleteNode } = useTraverseTree();

    function handleInsertFolder(id, folderName, isFolder) {
        let newTree = insertNode(folderData, id, folderName, isFolder);
        setFolderData(newTree);
    }

    function handleDeleteFolder(id) {
        let newTree = deleteNode(folderData, id)
        // console.log("newTree", newTree);
        setFolderData(newTree)
    }

    return (
        <div>
            <h1>File Explorer</h1>
            <Folder folderData={folderData} handleInsertFolder={handleInsertFolder} handleDeleteFolder={handleDeleteFolder} />
        </div>
    )
}

export default FileExplorer
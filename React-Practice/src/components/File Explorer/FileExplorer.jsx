import React, { useState } from 'react'
import { data } from "./data";
import Folder from './Folder';
import useTraverseTree from './useTraverseTree';

const FileExplorer = () => {
    const [folderData, setFolderData] = useState(data);

    const { insertNode } = useTraverseTree();

    function handleInsertFolder(id, folderName, isFolder) {
        let newTree = insertNode(folderData, id, folderName, isFolder);
        console.log("New Tree", newTree);
        setFolderData(newTree);
    }

    return (
        <div>
            <h1>File Explorer</h1>
            <Folder folderData={folderData} handleInsertFolder={handleInsertFolder} />
        </div>
    )
}

export default FileExplorer
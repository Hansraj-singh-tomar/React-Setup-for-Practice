import React from 'react'
import Folder from './Components/Folder';
import {dir} from './Data/folderData'

const FileExplorer = () => {
    console.log(dir);
  return (
    <div style={{margin: 25}}>
        <Folder dir={dir}/>
    </div>
  )
}

export default FileExplorer
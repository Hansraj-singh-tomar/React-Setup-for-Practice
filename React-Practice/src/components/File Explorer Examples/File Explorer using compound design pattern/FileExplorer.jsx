import React, { useCallback, useState } from 'react'
import Folder from './Folder';

const intitalData = {
    id: 1,
    name: "root",
    type: "folder",
    items: [
        {
            id: 2,
            name: "src",
            type: "folder",
            items: [
                {
                    id: 3,
                    name: "App.js",
                    type: "file",
                    items: [],
                },
                {
                    id: 4,
                    name: "App.css",
                    type: "file",
                    items: [],
                },
            ],
        },
        {
            id: 5,
            name: "public",
            type: "folder",
            items: [
                {
                    id: 6,
                    name: "index.html",
                    type: "file",
                    items: [],
                },
            ],
        },
    ],
};



const FileExplorer = () => {
    const [structure, setStructure] = useState(intitalData);
    const [fileFolderName, setFileFolderName] = useState("");
    const [fileFolderDetail, setFileFolderDetail] = useState({
        id: null,
        type: "",
    });

    function insertNode(tree, fileFolderDetail, newItem) {

        if (tree.id == fileFolderDetail.id) {
            return {
                ...tree,
                items: [...tree.items, newItem],
            }
        }

        let latestNode = tree?.items?.map((obj) => {
            return insertNode(obj, fileFolderDetail, newItem);
        });

        return { ...tree, items: latestNode };
    }

    const onFileFolderSave = (e) => {
        console.log("is it two time being called");
        if (e.key == "Enter") {
            let newItem = {
                id: Date.now(),
                name: fileFolderName,
                type: fileFolderDetail.type,
            }
            if (fileFolderDetail.type == "folder") {
                newItem.items = [];
            }

            setStructure((prev) => insertNode(prev, fileFolderDetail, newItem));
            setFileFolderName("");
            setFileFolderDetail({ id: null, type: "" });
        }
    };

    function deleteNode(tree, id) {
        if (tree.id === id) {
            return tree;
        }

        let filteredItems = tree.items.filter((obj) => obj.id !== id);
        const newItems = filteredItems.map((obj) => deleteNode(obj, id));
        return { ...tree, items: newItems };
    }

    const onDelete = (id) => {
        setStructure((prev) => deleteNode(prev, id));
    }

    return (
        <Folder
            structure={structure}
            fileFolderName={fileFolderName}
            setFileFolderName={setFileFolderName}
            fileFolderDetail={fileFolderDetail}
            setFileFolderDetail={setFileFolderDetail}
            onFileFolderSave={onFileFolderSave}
            onDelete={onDelete}
        />
    )
}

export default FileExplorer


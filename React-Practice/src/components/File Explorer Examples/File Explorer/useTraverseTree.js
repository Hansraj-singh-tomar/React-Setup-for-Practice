const useTraverseTree = () => {
    const insertNode = (tree, id, folderName, isFolder) => {
        if (tree.id == id) {

            tree.items.unshift({
                id: new Date().getTime(),
                name: folderName,
                type: isFolder ? "folder" : "file",
                items: [],
            })

            return tree;
        }


        let latestNode = tree?.items?.map((obj) => {
            return insertNode(obj, id, folderName, isFolder)
        });

        console.log("latestNode", latestNode);

        return { ...tree, items: latestNode }
    }


    const deleteNode = (tree, id) => {
        if (tree.id === id) {
            // We can't delete the root node; so return it unchanged
            return tree;
        }

        // // Check if the node has the item we want to delete
        // const index = tree.items.findIndex((obj) => obj.id === id);
        // if (index !== -1) {
        //     // Remove the item
        //     tree.items.splice(index, 1);
        //     return { ...tree, items: [...tree.items] };
        // }

        // // Recursively delete the item from nested structures
        // const newItems = tree.items.map((obj) => deleteNode(obj, id));


        // Filter out the item with the matching id
        const filteredItems = tree.items.filter((obj) => obj.id !== id);

        // Recursively delete the item from nested structures
        const newItems = filteredItems.map((obj) => deleteNode(obj, id));

        return { ...tree, items: newItems };
    }
    return { insertNode, deleteNode }
}

export default useTraverseTree;

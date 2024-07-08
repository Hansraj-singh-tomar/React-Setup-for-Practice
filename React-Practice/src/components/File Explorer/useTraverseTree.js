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

        console.log("latest node", latestNode);

        return { ...tree, items: latestNode }
    }

    return { insertNode }
}

export default useTraverseTree;
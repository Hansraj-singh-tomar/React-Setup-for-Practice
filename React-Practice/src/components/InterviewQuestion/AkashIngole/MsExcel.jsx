import React, { useState } from 'react'

const MsExcel = () => {
    const [rows, setRows] = useState(2);
    const [cols, setCols] = useState(2);
    const [grid, setGrid] = useState(createGrid(2, 2));

    function createGrid(rows, cols) {
        const data = [];

        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < cols; j++) {
                row.push("")
            }
            data.push(row);
        }

        return data;

        // second Way
        // const data = new Array(rows).fill("").map((_) => new Array(cols).fill(""));
        // return data;
    }

    const addRows = () => {
        setRows(rows + 1);
        setGrid(createGrid(rows + 1, cols))
    }

    const addCols = () => {
        setCols(cols + 1);
        setGrid(createGrid(rows, cols + 1));
    }

    const handleCellValueChange = (rowIndex, cellIndex, value) => {
        let data = [...grid];
        data[rowIndex][cellIndex] = value;
        setGrid(data);
    };

    const calculateFormula = (formula) => {
        const numbers = formula.substring(1).split("+").map((num) => parseFloat(num.trim()) || 0);
        return numbers.reduce((acc, num) => acc + num, 0);
    }

    return (
        <div>
            <table>
                <tbody>
                    {
                        grid.map((row, rowIndex) => {
                            return (
                                <tr key={rowIndex}>
                                    {
                                        row.map((cell, cellIndex) => {
                                            return (
                                                <td key={cellIndex}>
                                                    <input
                                                        type="text"
                                                        value={cell}
                                                        onChange={(e) => handleCellValueChange(rowIndex, cellIndex, e.target.value)}
                                                        onBlur={(e) => {
                                                            if (e.target.value.startsWith("=")) {
                                                                const result = calculateFormula(e.target.value);
                                                                handleCellValueChange(rowIndex, cellIndex, result)
                                                            }
                                                        }}
                                                        className='text-black p-2 m-1 rounded-lg'
                                                    />
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button onClick={addRows} className='border-2 border-white px-3 m-2'>Add Row</button>
            <button onClick={addCols} className='border-2 border-white px-3 m-2'>Add Column</button>
        </div>
    )
}

export default MsExcel

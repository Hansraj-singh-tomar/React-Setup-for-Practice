// Column is responsible for X-Axis
// Row is responsible for Y-Axis

// 1. create state snakeBody
// 2. unn div ko green karna hai jinke cordinates match karte ho
// create function isSnakeBodyDiv = (xc, yc) => {}
// 3. useEffect me setInterval ka use karke ham snake ko move karvayenge
// inside the interval we have to add logic of reset, when snake hit the wall



// most of the part from the chat gpt

// import React, { useEffect, useState, useRef } from 'react';

// const GRID_SIZE = 15;
// const INIT_SNAKE = [[5, 5]]; // [column, row]
// const GameGrid = Array.from({ length: GRID_SIZE }, () => new Array(GRID_SIZE).fill(""));

// function generateFood() {
//     const x = Math.floor(Math.random() * GRID_SIZE);
//     const y = Math.floor(Math.random() * GRID_SIZE);

//     return [x, y];
// }


// const SnakeGame = () => {
//     const [snake, setSnake] = useState(INIT_SNAKE);
//     const [food, setFood] = useState(generateFood());
//     // const [direction, setDirection] = useState([1, 0]);
//     const directionRef = useRef([1, 0]);

//     function isSnakeBodyDiv(xc, yc) {
//         // it will return true and false
//         return snake.some(([x, y]) => {
//             return x === xc && y === yc;
//         })
//     }

//     const moveSnake = () => {
//         setSnake((prevSnakeBody) => {
//             const newHead = [prevSnakeBody[0][0] + directionRef.current[0], prevSnakeBody[0][1] + directionRef.current[1]];

//             const newSnakeBody = [newHead, ...prevSnakeBody]

//             if (newHead[0] === food[0] && newHead[1] === food[1]) {
//                 setFood(generateFood());
//             }

//             if (newHead[0] < 0 || newHead[0] >= GRID_SIZE || newHead[1] < 0 || newHead[1] >= GRID_SIZE) {
//                 directionRef.current = [1, 0]
//                 return INIT_SNAKE
//             }

//             // Check for self-collision
//             if (prevSnakeBody.some(([x, y]) => x === newHead[0] && y === newHead[1])) {
//                 directionRef.current = [1, 0]
//                 return INIT_SNAKE;
//             }

//             if (newHead[0] === food[0] && newHead[1] === food[1]) {
//                 setFood(generateFood());
//             } else {
//                 newSnakeBody.pop();
//             }

//             return newSnakeBody;
//         });
//     };

//     useEffect(() => {
//         function handleDirection(e) {
//             const key = e.key;

//             if (key == "ArrowRight" && directionRef.current[0] !== -1) {
//                 directionRef.current = [1, 0]
//             } else if (key == "ArrowLeft" && directionRef.current[0] !== 1) {
//                 directionRef.current = [-1, 0]
//             } else if (key == "ArrowUp" && directionRef.current[1] !== 1) {
//                 directionRef.current = [0, -1]
//             } else if (key == "ArrowDown" && directionRef.current[1] !== -1) {
//                 directionRef.current = [0, 1]
//             }
//         }

//         window.addEventListener("keydown", handleDirection)
//         return () => {
//             window.removeEventListener("keydown", handleDirection);
//         }
//     }, [directionRef.current]);



//     useEffect(() => {
//         const intervalId = setInterval(moveSnake, 200);
//         return () => clearInterval(intervalId);
//     }, [directionRef.current]);

//     return (
//         <div className="w-80 h-80 border-2 border-white grid grid-cols-[repeat(15,_minmax(0,_1fr))]">
//             {
//                 GameGrid.map((row, yc) => {
//                     return (
//                         row.map((cell, xc) => {
//                             return (
//                                 <div key={`${xc}-${yc}`} className={`border-[0.5px] border-white ${isSnakeBodyDiv(xc, yc) ? 'bg-green-500' : ""} ${food[0] == xc && food[1] == yc ? "bg-red-500 rounded-lg" : ""} `}></div>
//                             )
//                         })
//                     )
//                 })
//             }
//         </div>
//     );
// };

// export default SnakeGame;

// --------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

// second way while using the useState hook instead of the useRef hook

import React, { useEffect, useState } from 'react';

const GRID_SIZE = 15;

const GameGrid = Array.from({ length: GRID_SIZE }, () => new Array(GRID_SIZE).fill(""));

const INIT_SNAKE = [[5, 5]];  // [[4,5], [3, 5], [2, 5]];

const generateFood = () => {
    const x = Math.floor(Math.random() * GRID_SIZE);
    const y = Math.floor(Math.random() * GRID_SIZE);
    return [x, y];
}


const SnakeGame = () => {
    const [snakeBody, setSnakeBody] = useState(INIT_SNAKE);

    const [direction, setDirection] = useState([1, 0]);

    const [food, setFood] = useState(generateFood());

    const [score, setScore] = useState(0);

    const [speed, setSpeed] = useState(1000);

    const isSnakeBodyDiv = (xc, yc) => {
        return snakeBody.some(([x, y]) => {
            return x == xc && y == yc
        })
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSnakeBody((prevSnakeBody) => {
                const newHead = [prevSnakeBody[0][0] + direction[0], prevSnakeBody[0][1] + direction[1]];
                const newSnakeBody = [newHead, ...prevSnakeBody];

                if (newHead[0] == food[0] && newHead[1] == food[1]) {
                    setFood(generateFood());
                }

                // check snake hitting on wall or not
                if (newHead[0] < 0 || newHead[0] >= GRID_SIZE || newHead[1] < 0 || newHead[1] >= GRID_SIZE) {
                    setDirection([1, 0]);
                    setScore(0);
                    return INIT_SNAKE;
                }

                // snake self collision
                if (prevSnakeBody.some(([x, y]) => x == newHead[0] && y == newHead[1])) {
                    setDirection([1, 0]);
                    setScore(0);
                    return INIT_SNAKE;
                }

                // // food over to snake
                // if (prevSnakeBody.some(([x, y]) => x == food[0] && y == food[1])) {
                //     setFood(generateFood());
                // }

                if (newHead[0] == food[0] && newHead[1] == food[1]) {
                    setScore(score + 1);
                    setFood(generateFood());
                } else {
                    newSnakeBody.pop();
                }
                return newSnakeBody;
            })
        }, speed);

        return () => clearInterval(intervalId);
    }, [direction]);

    useEffect(() => {
        function handleDirection(e) {
            const key = e.key;

            if (key == "ArrowLeft" && direction[0] !== 1) {
                setDirection([-1, 0])
            } else if (key == "ArrowRight" && direction[0] !== -1) {
                setDirection([1, 0]);
            } else if (key == "ArrowUp" && direction[1] !== 1) {
                setDirection([0, -1])
            } else if (key == "ArrowDown" && direction[1] !== -1) {
                setDirection([0, 1]);
            }
        }
        window.addEventListener("keydown", handleDirection)

        return () => window.removeEventListener("keydown", handleDirection);
    }, [direction])

    return (
        <div className='w-[50%] mx-6'>
            <div className='flex justify-start items-center'>
                <h1 className='font-bold text-2xl my-3 text-yellow-400'>Score - <span className='text-red-400'>{score}</span></h1>
                <div className='ml-2'>
                    <button onClick={() => setSpeed(prev => prev - 100)} className='border-2 border-white px-2 active:bg-slate-500'>Inc Speed</button>
                    <button onClick={() => setSpeed(prev => prev + 100)} className='border-2 border-white px-2 ml-2 active:bg-slate-500'>Dec Speed</button>
                </div>
            </div>
            <div className='w-80 h-80 border-2 border-white grid grid-cols-[repeat(15,_minmax(0,_1fr))]'>
                {
                    GameGrid.map((row, yc) => {
                        return row.map((col, xc) => {
                            return <div key={`${yc}-${xc}`} className={`border-[0.5px] border-white ${isSnakeBodyDiv(xc, yc) ? "bg-green-500" : ""} ${food[0] == xc && food[1] == yc ? "bg-red-500 rounded-lg" : ""}`}></div>
                        })
                    })
                }
            </div>
        </div>
    )
}

export default SnakeGame

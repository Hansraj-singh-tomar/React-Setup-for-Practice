const MouseTracerCmp = ({ render }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
    }

    return (
        <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
            {render(position)}
        </div>
    )
}

const Parent = () => {
    return (
        <MouseTracerCmp
            render={({ x, y }) => {
                return (
                    <h1>Mouse Position: ({x}, {y})</h1>
                )
            }}
        />
    )
}

export default Parent
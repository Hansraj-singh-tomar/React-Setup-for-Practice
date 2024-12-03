const ThemeProvider = ({ render }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => setDarkMode(!darkMode);

    return render({ darkMode, toggleTheme });
}

const Parent = () => {
    return (
        <ThemeProvider
            render={({ darkMode, toggleTheme }) => {
                return (
                    <div
                        style={{
                            backgroundColor: darkMode ? "black" : "white",
                            color: darkMode ? "white" : "black",
                            padding: "20px",
                        }}
                    >
                        <h1>Mode: {darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
                        <button onClick={toggleTheme}>Toggle Theme</button>
                    </div>
                )
            }}
        />
    )
}
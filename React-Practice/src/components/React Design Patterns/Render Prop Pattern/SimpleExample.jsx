//?The render prop pattern in React is a pattern where a component receives a function as a prop
//?and uses it to dynamically render content.This function is called a "render prop" and allows for flexible composition of UI and behavior.


//? Benefits -
// 1. You can write clean and more flexible code.
// 2. you can write reusable code.
// 3. use function composition
// 4. separation of concern
// 5. Easier to test the code


//Todo :- Here are some examples of using the render prop pattern:
const RenderPropComponent = ({ render }) => {
    return <div>{render()}</div>;
}
const Parent = () => {
    return (
        <RenderPropComponent
            render={() => <h1>Hello World</h1>}
        />
    )
}

export default Parent;
import { useState } from "react";

const FormComponent = ({ render }) => {
    const [value, setValue] = React.useState("");

    const handleChange = (e) => setValue(e.target.value);

    return (
        <form>
            {render(value, handleChange)}
        </form>
    );
};

const Parent = () => {
    return (
        <FormComponent
            render={(value, handleChange) => (
                <>
                    <input type="text" value={value} onChange={handleChange} />
                    <p>Typed value: {value}</p>
                </>
            )}
        />
    );
};

export default Parent;

// --------------------------------------------------------------

//! Another Example from the JsCafe

const Input = (props) => {
    const [value, setValue] = useState("");
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <div>
            <input value={value} onChange={handleChange} />
            <br />
            {props.renderTextBelow(value)}
        </div>
    )
}

const RenderProps = () => {
    const showValue = (value) => <>The value is {value}</>
    const multiplyByTen = (value) => <>The multiplied value is {value * 10}</>
    return (
        <div>
            {/* <Input renderTextBelow={(value) => <>The value is { value }</>} /> */}
            <Input renderTextBelow={showValue} />
            <br />
            <Input renderTextBelow={multiplyByTen} />
        </div>
    )
}

// export default RenderProps;

//! --------------------------------------------------------------

// Another from handling example By studyTonightWithAbhishek

const Parent1 = () => {
    return (
        <>
            <FormHandler
                render={({ formData, error, handleChange, handleSubmit }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="userName" placeholder="User Name" onChange={handleChange} />
                            <input type="password" name="userName" placeholder="password" onChange={handleChange} />
                            <button type="submit">Submit Form</button>
                            <div>{error.msg && error.msg}</div>
                        </form>
                    )
                }}
            />
        </>
    )
}

const FormHandler = ({ render }) => {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value, type } = e.target;

        if (value == "") {
            setError({ msg: `${name} field is required`, type: type });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let formDataObj = Object.fromEntries(formData);
        setFormData(formDataObj);
    }

    return render({ formData, error, handleChange, handleSubmit });
}

// export default Parent1;


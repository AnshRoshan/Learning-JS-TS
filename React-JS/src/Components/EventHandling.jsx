import { useState } from "react"

function EventHandling() {

    const intialState = {
        name: "",
        email: "",
        password: ""
    }
    const [formValues, setFormValues] = useState(intialState);

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        console.log(data)
        setFormValues(intialState)
    }

    // for controlled input
    const handleChange = (e) => {
        // console.log(e.target);--it will give the input field
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };


    return (
        <form action="" method="POST" onSubmit={(event) => handleSubmit(event)} className="flex  flex-col gap-4 text-xl font-semibold">
            <label htmlFor="name">
                Name: <input type="text" name="name" id="name" onChange={(e) => handleChange(e)} />
            </label>
            <label htmlFor="email">
                Email: <input type="email" name="email" id="email" onChange={e => handleChange(e)} />
            </label>
            <label htmlFor="password">
                Password: <input type="password" name="password" id="password" onChange={handleChange} />
            </label>
            <button type="submit" className="bg-blue-500 text-white rounded-lg p-2">Submit</button>
        </form>
    )
}
export default EventHandling
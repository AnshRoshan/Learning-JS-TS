import PropTypes from 'prop-types'

function PropsDrill(props) {
    let statement = "Unknown User"
    switch (props.age) {
        case 18:
            statement = "User is 18 years old .Enjoy the adulthood"
            break;
        case 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17:
            statement = "User is not 18 years old. And is a minor"
            break;
        default:
            statement = "User is not 18 years old. And is an adult"
    }
    return (
        <>
            <p>Username: {props.username}</p>
            <div>
                <p className="text-slate-600 ">Email: <span className=" text-slate-900">{props.email}</span></p>

            </div >
            <p>{statement}</p>

            <button className="border-4 rounded-lg p-2 border-indigo-700 bg-sky-300 m-4">
                {props.islogged ? "User is Authenticated." : "Unknown User"}

            </button>


            <section className="px-8">
                <ul className="list-disc mb-4">
                    {props.list.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <h2 className="underline ">Subject Marks</h2>
                <ul className="text-md mb-4  list-decimal">
                    {Object.entries(props.marks).map(([subject, mark]) => (
                        <li key={subject}>
                            <strong>{subject}:</strong> {mark}
                        </li>
                    ))}
                </ul>

                <h2 className="underline ">Additional Information </h2>
                <ul className="text-md mb-4  list-disc">
                    {props.info.map((item, index) => <li key={index}>{item.name} : {item.value}</li>)}
                </ul>

            </section>
            {props.children}
        </>
    )
}
export default PropsDrill


PropsDrill.propTypes = {
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    marks: PropTypes.objectOf(PropTypes.number).isRequired,
    islogged: PropTypes.bool,
    children: PropTypes.element
}
import { useEffect, useState } from "react"

function RenderDynamic() {
    const url = "https://jsonplaceholder.typicode.com/users"

    async function fetchData(url) {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetchData(url)
            .then(data => setUsers(data))
            .catch(error => console.log(error))
    }, [url])

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {users.map(user => (
                <div key={user.id} className="bg-indigo-300 even:bg-rose-300  p-4 text-lg m-4 rounded-xl">
                    <h2 className="text-2xl text-purple-800 font-semibold mb-4 pb-4 border-b-4 border-black">{user.name}</h2>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                </div>
            ))}
        </div>
    )
}
export default RenderDynamic
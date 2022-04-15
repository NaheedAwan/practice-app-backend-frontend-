import React from 'react'
import { useState } from 'react'
export default function Input({ setUserData}) {
    const [username, setUsername] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:9000/github/user/${username}`)
        const data = await response.json()

        setUserData(data)
        console.log(e)
        // console.log('submitted')
        // const response = await fetch(`http://localhost:5000/github/user/${username}`)
        // const data = await response.json()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    onChange={(e) => setUsername(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
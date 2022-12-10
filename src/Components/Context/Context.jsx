import React, { useState, useEffect, createContext, useContext } from 'react'

import axios from 'axios'

const ContextApi = createContext(null)
export const useContextApi = () => useContext(ContextApi)

export const ContextProvider = (props) => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({
        id: '',
        fname: '',
        lname: '',
        email: '',
        address: '',
        phone: '',
    })

    const getAllUsers = async () => {
        try {
            const users = await axios.get('http://localhost:3030/users')
            setUsers(users.data)
        } catch (err) {
            alert('something is wrong in get method')
        }
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async () => {
        try {
            await axios.post(`http://localhost:3030/users`, user)
        } catch (err) {
            alert('something went wrong in post method')
        }
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3030/users/${id}`, user)
        const newUser = users.filter((item) => {
            return item.id !== id
        })
        setUsers(newUser)
    }

    return (
        <>
            <ContextApi.Provider value={{ getAllUsers, users, handleChange, user, handleSubmit, handleDelete }}>
                {props.children}
            </ContextApi.Provider>
        </>
    )
}
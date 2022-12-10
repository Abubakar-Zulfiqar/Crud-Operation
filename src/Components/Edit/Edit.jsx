import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

import axios from 'axios'

const Edit = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [user, setUser] = useState({
        fname: '',
        lname: '',
        email: '',
        address: '',
        phone: '',
    })

    const getUser = async () => {
        try {
            const user = await axios.get(`http://localhost:3030/users/${id}`)
            setUser(user.data)
        } catch (err) {
            alert('something is wrong in second get method')
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:3030/users/${id}`, user)
            navigate('/view')
        } catch (err) {
            alert('something went wrong in post method')
        }
    }

    return (
        <>
            <div className='container'>
                <h1 className='header'>Edit User</h1>

                <form className='row g-3 needs-validation' >
                    <div className='col-md-4'>
                        <label htmlFor='validationCustom01' className='form-label'>First name</label>
                        <input type='text' className='form-control' id='validationCustom01'
                            name='fname' value={user.fname}
                            onChange={(e) => setUser({ ...user, fname: e.target.value })} required />
                        <div className='valid-feedback'>
                            Looks good!
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <label htmlFor='validationCustom02' className='form-label'>Last name</label>
                        <input type='text' className='form-control' id='validationCustom02'
                            name='lname' value={user.lname}
                            onChange={(e) => setUser({ ...user, lname: e.target.value })} required />
                        <div className='valid-feedback'>
                            Looks good!
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div>
                            <label htmlFor='exampleInputEmail1' className='form-label'>Email address</label>
                            <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp'
                                name='email' value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })} required />
                            <div className='form-text'>
                                <small> Format: abc@abc.com </small>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-8'>
                        <label htmlFor='validationCustom03' className='form-label'>Address</label>
                        <input type='text' className='form-control' id='validationCustom03'
                            name='address' value={user.address}
                            onChange={(e) => setUser({ ...user, address: e.target.value })} required />
                    </div>

                    <div className='col-md-4'>
                        <label htmlFor='validationCustom04' className='form-label'>Phone#</label>
                        <input type='tel' id='phone' className='form-control'
                            pattern='[0-9]{4}-[0-9]{7}'
                            name='phone' value={user.phone}
                            onChange={(e) => setUser({ ...user, phone: e.target.value })} required />
                        <div className='form-text'>
                            <small> Format: 0312-1234567 </small>
                        </div>
                    </div>

                    <div className='button col-12' style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem'
                    }}>
                        <button className='btn btn-primary' type='submit'
                            onClick={e => handleSubmit(e)}>
                            Update
                        </button>
                        <Link to='/view'>
                            <button className='btn btn-secondary' type='submit'>Back to View Page</button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Edit
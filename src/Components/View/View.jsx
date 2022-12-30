import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { Button, Col, Container, Row, Card } from 'react-bootstrap'

import { useContextApi } from '../Context/Context'

import './view.css'

const View = () => {
    const context = useContextApi()
    const navigate = useNavigate()
    const [userData, setUserData] = useState([])
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const getData = async () => {
        try {
            const users = await axios.get('http://localhost:3030/users')
            setUserData(users.data)
        } catch (err) {
            alert('something is wrong in get method')
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const handlsearch = () => {
        const newdata = userData.filter(
            (value) => value.fname === fname || value.lname === lname || value.email === email || value.address === address
        )
        setUserData(newdata)
    }

    return (
        <>
            <Container>
                <Link to='/'>
                    <Button variant='primary'
                        className='button me-3'>
                        Create User
                    </Button>
                </Link>
                <Link to='/table'>
                    <Button variant='secondary'
                        className='button'>
                        View Table
                    </Button>
                </Link>

                <div className='mb-5 dropdowns'>
                    <div className='form-group col-md-3 me-3'>
                        <label className='mb-2'>Fname</label>
                        <select
                            className='form-control'
                            onChange={(e) => setFname(e.target.value)}
                        >
                            <option value='All'>--Select FName--</option>
                            <option value='Ali'>Ali</option>
                            <option value='Ahsan'>Ahsan</option>
                            <option value='Abdul'>Abdul</option>
                            <option value='Ali'>Ali</option>
                        </select>
                    </div>
                    <div className='form-group col-md-3 me-3'>
                        <label className='mb-2'>Lname</label>
                        <select
                            className='form-control'
                            onChange={(e) => setLname(e.target.value)}
                        >
                            <option value='All'>--Select LName--</option>
                            <option value='ahmad'>ahmad</option>
                            <option value='rasool'>rasool</option>
                            <option value='rehman'>rehman</option>
                            <option value='rehman'>rehman</option>
                        </select>
                    </div>

                    <div className='form-group col-md-3 me-3'>
                        <label className='mb-2'>Email</label>
                        <select
                            className='form-control'
                            onChange={(e) => setEmail(e.target.value)}
                        >
                            <option value='All'>--Select Email--</option>
                            <option value='ali@gmail.com'>ali@gmail.com</option>
                            <option value='ahsan@gmail.com'>ahsan@gmail.com</option>
                            <option value='abdul@gmail.com'>abdul@gmail.com</option>
                            <option value='rehman@gmail.com'>rehman@gmail.com</option>
                        </select>
                    </div>

                    <div className='form-group col-md-3 me-3'>
                        <label className='mb-2'>Address</label>
                        <select
                            className='form-control'
                            onChange={(e) => setAddress(e.target.value)}
                        >
                            <option value='All'>--Select Address--</option>
                            <option value='abc1'>abc1</option>
                            <option value='abc2'>abc2</option>
                            <option value='abc3'>abc3</option>
                            <option value='abc4'>abc4</option>
                        </select>
                    </div>

                    <button type='button' className='btn btn-success mt-3'
                        onClick={() => handlsearch()}
                    >Search</button>
                </div>

                <Row>
                    <Col className='col'>
                        {
                            userData
                                .map((user, i) => {
                                    return (
                                        <Card className='card' key={i}>
                                            <Card.Body>
                                                <Card.Title>{user.fname} {user.lname}</Card.Title>
                                                <Card.Text>
                                                    {user.email}
                                                </Card.Text>
                                                <Card.Text>
                                                    {user.address}
                                                </Card.Text>
                                                <Card.Text>
                                                    {user.phone}
                                                </Card.Text>
                                                <Button style={{ marginLeft: '1rem' }} variant='primary'
                                                    onClick={() => navigate(`/edit/${user.id}`)}>
                                                    Edit
                                                </Button>
                                                <Button style={{ marginLeft: '1rem' }} variant='danger'
                                                    onClick={() => context.handleDelete(user.id)}>
                                                    Delete
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    )
                                })
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default View
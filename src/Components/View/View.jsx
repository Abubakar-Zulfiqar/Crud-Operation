import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Button, Col, Container, Row, Card } from 'react-bootstrap'

import { useContextApi } from '../Context/Context'

import './view.css'

const View = () => {
    const context = useContextApi()
    const navigate = useNavigate()

    return (
        <>
            <Container>
                <Link to='/'>
                    <Button variant='primary'
                        className='button'>
                        Create User
                    </Button>
                </Link>
                <Row>
                    <Col className='col'>
                        {
                            context.users.map((user, i) => {
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
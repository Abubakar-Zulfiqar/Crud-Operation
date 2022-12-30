import React from 'react'
import { Link } from 'react-router-dom'

import { useContextApi } from '../Context/Context'

import './create.css'

const Create = () => {
    const context = useContextApi()

    return (
        <>
            <div className='container'>
                <h1 className='header'>Create User</h1>

                <form className='row g-3 needs-validation'>
                    <div className='col-md-4'>
                        <label htmlFor='validationCustom01' className='form-label'>First name</label>
                        <input type='text' className='form-control' id='validationCustom01'
                            name='fname' onChange={e => context.handleChange(e)} required />
                        <div className='valid-feedback'>
                            Looks good!
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <label htmlFor='validationCustom02' className='form-label'>Last name</label>
                        <input type='text' className='form-control' id='validationCustom02'
                            name='lname' onChange={e => context.handleChange(e)} required />
                        <div className='valid-feedback'>
                            Looks good!
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div>
                            <label htmlFor='exampleInputEmail1' className='form-label'>Email address</label>
                            <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' name='email'
                                onChange={e => context.handleChange(e)} required />
                            <div className='form-text'>
                                <small> Format: abc@abc.com </small>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-8'>
                        <label htmlFor='validationCustom03' className='form-label'>Address</label>
                        <input type='text' className='form-control' id='validationCustom03'
                            name='address' onChange={e => context.handleChange(e)} required />
                    </div>

                    <div className='col-md-4'>
                        <label htmlFor='validationCustom04' className='form-label'>Phone#</label>
                        <input type='tel' id='phone' className='form-control'
                            name='phone' onChange={e => context.handleChange(e)}
                            pattern='[0-9]{4}-[0-9]{7}'
                            required />
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
                            onClick={e => context.handleSubmit(e)}>Submit</button>
                        <Link to='/view'>
                            <button className='btn btn-secondary'>Go to View Page</button>
                        </Link>
                    </div>
                </form>
            </div >
        </>
    )
}

export default Create
import React, { useState } from 'react'

import { useContextApi } from '../Context/Context'

import './table.css'

const Table = () => {
    const [query, setQuery] = useState('')
    const context = useContextApi()

    const keys = ['fname', 'lname', 'email', 'address']

    return (
        <>
            <>
                <div className="container table-input">
                    <div className="search-input">
                        <input type="text"
                            placeholder='search...'
                            className='search'
                            onChange={e => setQuery(e.target.value)} />
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                            </tr>
                            {context.users
                                .filter((value) =>
                                    keys.some((key) => value[key].toLowerCase().includes(query))
                                )
                                .map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.fname} {data.lname}</td>
                                        <td>{data.email}</td>
                                        <td>{data.address}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </>
        </>
    )
}

export default Table
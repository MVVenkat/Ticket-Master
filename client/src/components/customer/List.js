import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../../config/axios'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customers: [],
            isLoading: true
        }

    }

    componentDidMount() {

        axios.get('/customers', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        }).then(response => {
            const customers = response.data
            this.setState({ customers, isLoading: false })
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {


        return (
            <div>

                <h2> Customer List </h2>
                {this.state.isLoading ? (<p> loading... </p>) : (
                    <ul>
                        {this.state.customers.map((customer) => {
                            return (
                                <li key={customer._id}><Link to={`/customers/${customer._id}`}>{customer.name}</Link></li>
                            )
                        })
                        }
                    </ul>
                )}

                <Link to="/customers/register">Add Customer</Link>
            </div>
        )
    }
}

export default List
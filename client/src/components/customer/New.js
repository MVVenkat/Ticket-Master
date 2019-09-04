import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../../config/axios'
import CustomerForm from './Form'

class NewCustomer extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formData) {
        axios.post('/customers', formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data)
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                } else {
                    const id = response.data._id
                    this.props.history.push(`/customers/${id}`)
                }
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {
        return (
            <div>
                <h2> Customer Details </h2>
                <CustomerForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}


export default NewCustomer
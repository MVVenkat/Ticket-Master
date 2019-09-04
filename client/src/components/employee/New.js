import React from 'react'
//import {Link} from 'react-router-dom'
import axios from '../../config/axios'

import EmployeeForm from './Form'

class NewEmployee extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formData) {
        axios.post('/employees', formData, {
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
                    this.props.history.push(`/employees/${id}`)
                }
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {
        return (
            <div>
                <h2> Employee Details </h2>
                <EmployeeForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}


export default NewEmployee
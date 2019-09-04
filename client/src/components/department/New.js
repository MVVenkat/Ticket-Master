import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../../config/axios'
import DepartmentForm from './Form'

class NewDepartment extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formData) {
        axios.post('/departments', formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data)
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                } else {
                    console.log("handleSubmit from NewDepartment")

                    this.props.handleSubmit(formData)
                }
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {
        return (
            <div>
                <h2> Department Details </h2>
                <DepartmentForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}


export default NewDepartment
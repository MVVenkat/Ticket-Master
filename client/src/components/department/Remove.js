import React from 'react'
import axios from '../../config/axios'
import { Link } from 'react-router-dom'


class DeleteDepartment extends React.Component {


    componentDidMount() {
        const confirm = window.confirm("Are you sure?")
        if (confirm) {
            const id = this.props.match.params.id
            axios.delete(`/departments/${id}`, {
                headers: {
                    'x-auth': localStorage.getItem('token')
                }
            }).then(response => {
                this.props.history.push("/departments")
            })
        }
    }

    render() {
        return (
            <h1></h1>
        )
    }


}

export default DeleteDepartment
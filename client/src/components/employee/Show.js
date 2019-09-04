import React from 'react'
import axios from '../../config/axios'
import { Table } from 'reactstrap';

import { Link } from 'react-router-dom'


class ShowEmployee extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employee: {}


        }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`/employees/${id}`, {
            
        }).then(response => {

            console.log(response.data)
            const employee = response.data
            this.setState(() => ({ employee }))
        })
    }


    handleRemove = () => {
        const confirm = window.confirm("Are you sure?")
        if (confirm) {
            const id = this.props.match.params.id
            //const id = this.state.employees._id

            axios.delete(`/employees/${id}`, {
                headers: {
                    'x-auth': localStorage.getItem('token')
                }
            }).then(response => {
                console.log("delete employees")
                this.props.history.push("/employees")

            })
        }
    }

    render() {
        return (
            <div>

                <h2> Employee Details</h2>
                {Object.keys(this.state.employee).length !== 0 &&
                    <Table>
                        <tr><th> Name :</th> <td> {this.state.employee.name}</td></tr>
                        <tr><th> EMail :</th> <td> {this.state.employee.email}</td></tr>
                        <tr><th>Mobile :</th> <td>  {this.state.employee.mobile}</td></tr>
                        <tr><th>Department :</th> <td>{this.state.employee.department.name}</td></tr>
                        <tr><th><button onClick={this.handleRemove}> remove</button></th> <td>
                            <Link to="/employees">back</Link></td></tr>
                    </Table>
                }


            </div >
        )

    }
}

export default ShowEmployee
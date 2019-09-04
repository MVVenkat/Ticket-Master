import React from 'react'
import axios from '../../config/axios'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'

class ShowTicket extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ticket: {}
        }

    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`/tickets/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        }).then(response => {

            console.log(response.data)
            const ticket = response.data
            this.setState(() => ({ ticket }))
        })

    }



    handleRemove = () => {
        const confirm = window.confirm("Are you sure?")
        if (confirm) {
            const id = this.props.match.params.id

            axios.delete(`/tickets/${id}`, {
                headers: {
                    'x-auth': localStorage.getItem('token')
                }
            }).then(response => {
                console.log("ticket employees")
                this.props.history.push("/tickets")

            })
        }
    }

    render() {
        return (
            <div>
                <h2> Ticket Details</h2>


                {Object.keys(this.state.ticket).length !== 0 &&
                    <Table>
                        <tbody>
                            <tr><th>Customer</th><td>{this.state.ticket.customer.name}</td></tr>
                            <tr><th>Message</th><td>{this.state.ticket.message}</td></tr>
                            <tr><th>Department</th><td>{this.state.ticket.department.name}</td></tr>
                            <tr><th>Employee</th><td>{this.state.ticket.employee.name}</td></tr>
                            <tr><th>priority</th><td>{this.state.ticket.priority}</td></tr>
                            <tr><th>Status</th><td>{this.state.ticket.isCompleted}</td></tr>
                            <tr><td><button onClick={this.handleRemove}> remove</button></td><td><Link to="/tickets">back</Link></td></tr>
                        </tbody>
                    </Table>
                }


            </div>
        )

    }
}

export default ShowTicket
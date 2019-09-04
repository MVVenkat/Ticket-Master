import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../../config/axios'
import { Table } from 'reactstrap'

class TicketsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tickets: [],
            isLoading: true
        }

    }

    componentDidMount() {

        axios.get('/tickets', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
            const tickets = response.data
            this.setState(() => ({ tickets, isLoading: false })
            )
        })
    }

    render() {
        return (
            <div>

                <h2> Tickets List </h2>
                {this.state.isLoading ? (<p> loading... </p>) : (

                    this.state.tickets.length === 0 ? (<p> No Tickets Found </p>) : (
                        <Table bordered striped>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Customer</th>
                                    <th>Message</th>
                                    <th>Department</th>
                                    <th>Employee</th>
                                    <th>priority</th>
                                    <th>status</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.tickets.map((ticket, index) => {
                                    return (
                                        <tr key={ticket._id}>
                                            <td>{index + 1}</td>
                                            <td><Link to={`/tickets/${ticket._id}`}>{ticket.customer.name}</Link></td>
                                            <td>{ticket.message}</td>
                                            <td>{ticket.department.name}</td>
                                            <td>{ticket.employee.name}</td>
                                            <td>{ticket.priority}</td>
                                            <td>{ticket.isCompleted}</td>

                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </Table>

                    )

                )}
                <Link to="/tickets/new">Add Ticket</Link>
            </div>
        )
    }
}

export default TicketsList
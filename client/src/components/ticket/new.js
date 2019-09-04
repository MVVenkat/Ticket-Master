import React from 'react'
//import {Link} from 'react-router-dom'
import axios from '../../config/axios'

import TicketForm from './form'

class NewTicket extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formData) {
        axios.post('/tickets', formData, {
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
                    this.props.history.push(`/tickets/${id}`)
                }
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {
        return (
            <div>
                <h2> Ticket Details </h2>
                <TicketForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}


export default NewTicket
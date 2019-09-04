import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../../config/axios'

class CustomerForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: props.isEdit ? (props.customer.name) : (''),
            email: props.isEdit ? (props.customer.email) : (''),
            mobile: props.isEdit ? (props.customer.mobile) : ('')
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleNameChange(e) {
        const name = e.target.value
        this.setState(() => ({ name }))
    }

    handleEmailChange = (e) => {
        const email = e.target.value
        this.setState(() => ({ email }))
    }

    handleMobileChange(e) {
        const mobile = e.target.value
        this.setState(() => ({ mobile }))
    }

    handleSubmit(e) {
        e.preventDefault()

        const formData = {
            name: this.state.name,
            mobile: this.state.mobile,
            email: this.state.email
        }
        console.log("handleSubmit")
        console.log(formData)
        this.props.handleSubmit(formData)
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Name   <input type="text" value={this.state.name} onChange={this.handleNameChange}></input></label> <br />
                    <label> Email  <input type="text" value={this.state.email} onChange={this.handleEmailChange}></input></label><br />
                    <label> Mobile <input type="text" value={this.state.mobile} onChange={this.handleMobileChange.bind(this)}></input></label><br />
                    <input type="submit" /> or <Link to="/customers">back</Link>
                </form>
            </div>
        )

    }
}

export default CustomerForm
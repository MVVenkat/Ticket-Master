import React from 'react'
import axios from '../../config/axios'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap';


class ShowCustomer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customer: "",
            isLoading: true
        }

    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`/customers/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        }).then(response => {
            console.log("show Customer")
            console.log(response.data)
            const customer = response.data
            this.setState(() => ({ customer, isLoading: false })
            )
        })
    }

    handleRemove = () => {
        const confirm = window.confirm("Are you sure?")
        if (confirm) {
            const id = this.props.match.params.id
            //const id = this.state.customer._id

            axios.delete(`/customers/${id}`, {
                headers: {
                    'x-auth': localStorage.getItem('token')
                }
            }).then(response => {
                console.log("delete Customer")
                this.props.history.push("/customers")

            })
        }
    }

    render() {
        return (
            <div>

                <h2> Customer Details</h2>
                {this.state.isLoading ? (<p> loading... </p>) : (
                    <Table>

                        <tr><th> Name :</th> <td> {this.state.customer.name}</td></tr>
                        <tr><th>EMail :</th> <td> {this.state.customer.email}</td></tr>
                        <tr><th>Mobile :</th> <td>  {this.state.customer.mobile}</td></tr>
                        <tr><th>   <Link to={`/customers/edit/${this.state.customer._id}`} >Edit</Link></th>

                            <th>  <button onClick={this.handleRemove}> remove</button></th>
                            <th>   <Link to="/customers">back</Link></th>

                        </tr>


                    </Table>
                )}
            </div>
        )

    }
}

export default ShowCustomer
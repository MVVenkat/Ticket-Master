import React from 'react'
//import {Link} from 'react-router-dom'
import axios from '../../config/axios'
import Select from 'react-select'
import { Input } from 'reactstrap'




class TicketForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            departments: [],
            employees: [],
            customers: [],
            customer: '',
            message: '',
            priority: '',
            department: '',
            employee: '',
            isLoding1: true,
            isLoding2: true
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }


    componentDidMount() {
        axios.get('/departments', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        }).then(response => {
            const departments = response.data
            this.setState(() => ({ departments, isloading1: false })
            )
        })
        axios.get('/customers', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        }).then(response => {
            const customers = response.data
            this.setState(() => ({ customers, isloading2: false })
            )
        })
    }
    handleCustomerChange(selection) {
        const customer = selection
        this.setState(() => ({ customer }))
    }

    handleMessageChange(e) {
        const message = e.target.value
        this.setState(() => ({ message }))
    }

    handleDepartmentChange(selection) {
        const department = selection
        console.log("Dept:" + department)
        this.setState(() => ({ department }))
        axios.get(`/employees/departments/${department.value}`, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
            const employees = response.data
            this.setState(() => ({ employees })
            )
        })
    }

    handleEmployeeChange(selection) {
        const employee = selection
        this.setState(() => ({ employee }))
    }

    handlePriorityChange(e) {
        const priority = e.target.value
        this.setState(() => ({ priority }))
    }
    // handleTicketChange(e) {
    //     const ticketcode = e.target.value
    //     this.setState(() => ({ ticketcode }))
    // }

    handleSubmit(e) {
        e.preventDefault()

        const formData = {
            customer: this.state.customer.value,
            message: this.state.message,
            priority: this.state.priority,
            department: this.state.department.value,
            employee: this.state.employee.value,
            // ticketCode: this.state.ticketcode
        }
        console.log(formData)

        this.props.handleSubmit(formData)
    }



    render() {
        return (
            <div>
                {this.state.isloading1 & this.state.isLoding2 ? (<p> loading </p>) : (

                    <form onSubmit={this.handleSubmit}>


                        customer

                            <Select value={this.state.customer} onChange={this.handleCustomerChange.bind(this)}
                            options={this.state.customers.map(customer => {
                                return { value: customer._id, label: customer.name }
                            })}
                        />


                        <label > Message

                        <Input type="textarea" value={this.state.message} name="text" id="exampleText" onChange={this.handleMessageChange.bind(this)}></Input></label> <br />



                        Department

                        <Select value={this.state.department} onChange={this.handleDepartmentChange.bind(this)}
                            options={this.state.departments.map(department => {
                                return { value: department._id, label: department.name }
                            })}
                        />


                        Employees

                                <Select value={this.state.employee} onChange={this.handleEmployeeChange.bind(this)}
                            options={this.state.employees.map(employee => {
                                return { value: employee._id, label: employee.name }
                            })}
                        />



                        {/* <label>
                            Employee

                            <select value={this.state.employee} onChange={this.handleEmployeeChange.bind(this)} >
                                <option value="">Select</option>
                                {this.state.department &&

                                    this.state.employees.map((employee) => {
                                        return <option key={employee._id} value={employee._id}>{employee.name}</option>
                                    })

                                }

                            </select>

                            </label>*/}

                        Priority <br />
                        <label> <input type="radio" name="priority" value="low" onClick={this.handlePriorityChange.bind(this)} checked={this.state.priority == "low"} /> low</label>
                        <label> <input type="radio" name="priority" value="medium" onClick={this.handlePriorityChange.bind(this)} checked={this.state.priority == "medium"} /> medium</label>
                        <label> <input type="radio" name="priority" value="high" onClick={this.handlePriorityChange.bind(this)} checked={this.state.priority == "high"} /> high </label>

                        <br />
                        <input type="submit" />
                    </form>

                )
                }

            </div >
        )

    }
}

export default TicketForm
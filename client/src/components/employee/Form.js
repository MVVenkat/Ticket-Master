import React from 'react'
//import {Link} from 'react-router-dom'
import axios from '../../config/axios'

class EmployeeForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            mobile: '',
            department: '',
            departments: []
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    componentDidMount() {
        axios.get('/departments', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
            const departments = response.data
            this.setState(() => ({ departments })
            )
        })
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
    handleDepartmentChange(e) {
        const department = e.target.value
        this.setState(() => ({ department }))
    }

    handleSubmit(e) {
        e.preventDefault()

        const formData = {
            name: this.state.name,
            mobile: this.state.mobile,
            email: this.state.email,
            department: this.state.department
        }
        console.log("handleSubmit from Form")

        this.props.handleSubmit(formData)
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Name   <input type="text" value={this.state.name} onChange={this.handleNameChange}></input></label> <br />
                    <label> Email  <input type="text" value={this.state.email} onChange={this.handleEmailChange}></input></label><br />
                    <label> Mobile   <input type="text" value={this.state.mobile} onChange={this.handleMobileChange.bind(this)}></input></label><br />
                    <label>
                        Department
                <select value={this.state.department} onChange={this.handleDepartmentChange.bind(this)} >
                            <option value="">Select</option>
                            {this.state.departments.map(department => {
                                return <option value={department._id}>{department.name}</option>
                            })}
                        </select>
                    </label>
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )

    }
}

export default EmployeeForm
import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../../config/axios'


class EmployeeList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            isLoading: true
        }

    }

    componentDidMount() {

        axios.get('/employees', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
            const employees = response.data
            this.setState(() => ({ employees, isLoading: false })
            )
        })
    }

    render() {
        return (
            <div>

                <h2> Employee List </h2>
                {this.state.isLoading ? (<p> loading... </p>) : (

                    this.state.employees.length === 0 ? (<p> No Employee Found </p>) : (
                        <ul>
                            {this.state.employees.map((employee) => {
                                return (
                                    <li key={employee._id}><Link to={`/employees/${employee._id}`}>{employee.name}</Link></li>

                                )
                            })
                            }
                        </ul>
                    )

                )}
                <Link to="/employee/register">Add Employee</Link>
            </div>
        )
    }
}

export default EmployeeList
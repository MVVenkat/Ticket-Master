import React from 'react'
//import {Link,Window} from 'react-router-dom'
import axios from '../../config/axios'
import NewDepartment from './New'

class DepartmentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            departments: [],
            isLoading: true,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleRemove = (e) => {
        const confirm = window.confirm("Are you sure?")
        if (confirm) {
            const id = e.target.value
            console.log("id:" + id)
            axios.delete(`/departments/${id}`, {
                headers: {
                    'x-auth': localStorage.getItem('token')
                }
            }).then(response => {
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                }
                else {
                    const NewDepartment = this.state.departments.filter((department) => {
                        return department._id !== id
                    })

                    this.setState(() => ({ departments: NewDepartment }))
                    /* console.log("delete department")

                    {this.state.departments.map((dept)=>{
                     console.log("dept:"+dept.name)
                    })}
                    axios.get('http://dct-ticket-master.herokuapp.com/departments',{
                    headers:{
                    'x-auth':localStorage.getItem('token')
                    }
                    }).then(response =>{
                    console.log(response.data)
                    const departments=response.data
                    this.setState(()=> ({departments}))
                    }) */
                }
            })

        }

    }



    componentDidMount() {


        axios.get('/departments', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
            const departments = response.data
            this.setState(() => ({ departments, isLoading: false })
            )
        })
    }

    handleSubmit(formData) {
        console.log("handleSubmit from  List")

        console.log(formData)
        this.setState((prevState) => ({ departments: prevState.departments.concat(formData) }))


        /*  axios.get('http://dct-ticket-master.herokuapp.com/departments',{
             headers:{
                 'x-auth':localStorage.getItem('token')
             }
         }).then(response =>{
                  console.log(response.data)
                  const departments=response.data
                  this.setState(()=> ({departments})
         )}) */

    }


    render() {
        return (
            <div>
                <NewDepartment handleSubmit={this.handleSubmit} />

                <h2> Department List </h2>

                {this.state.isLoading ? (<p> loading... </p>) : (
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Department Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.departments.map((department) => {
                                return (
                                    <tr key={department._id}>
                                        <td> {department.name}</td>
                                        <td><button onClick={this.handleRemove} value={department._id}>remove</button></td>

                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>


                    
                )}
            </div>
        )
    }

}

export default DepartmentList
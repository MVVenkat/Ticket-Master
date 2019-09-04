import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../../config/axios'

class DepartmentForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',

        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleNameChange(e) {
        const name = e.target.value
        this.setState(() => ({ name }))
    }



    handleSubmit(e) {
        e.preventDefault()

        const formData = {
            name: this.state.name,

        }
        this.setState(() => ({ name: '' }))
        console.log("handleSubmit from Form")

        this.props.handleSubmit(formData)
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Name   <input type="text" value={this.state.name} onChange={this.handleNameChange}></input></label> <br />

                    <input type="submit" />
                </form>
            </div>
        )

    }
}

export default DepartmentForm
import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../../config/axios'
import Select from 'react-select'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customers: [],
            customers2:[],
            customer:{},
            selectedOption:null,
            selectedOption2:null,
            isLoading: true
        }

    }

    componentDidMount() {

        axios.get('/customers', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        }).then(response => {

            console.log(response.data)
            const customers = response.data

          let options=customers.map((customer)=>{
                return {value: customer.name, label: customer.name}
            })
            this.setState(() => ({ customers :options,customers2:response.data, isLoading: false })
           ) 
        
            console.log(this.state.customers)
        })
    }
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      }
      handleChange2 = selectedOption2 => {
        this.setState({ selectedOption2 });
        console.log(`Option2 selected :`, selectedOption2);
      }

    render() {

        const { selectedOption , selectedOption2} = this.state;

        return (
            <div>

                <h2> Customer List </h2>
              {/*  {this.state.isLoading ? (<p> loading... </p>) : (
                    <ul>
                        {this.state.customers.map((customer) => {
                            return (
                                <li key={customer._id}><Link to={`/customers/${customer._id}`}>{customer.name}</Link></li>
                            )
                        })
                        }
                    </ul>
                    )}*/}

                    {this.state.isLoading ? (<p> loading... </p>) : (
                        <Select value={selectedOption} onChange={this.handleChange.bind(this)}
                          options={this.state.customers}
                      />)
                    }

                    {this.state.isLoading ? (<p> loading... </p>) : (
                        <Select value={selectedOption2} onChange={this.handleChange2.bind(this)}
                         options={this.state.customers2.map(customer=> {
                            return  {value:customer._id ,label:customer.name}
                    })}
                       />)
                    }

                  {/*  <Select value={this.state.customer} onChange={this.handleChange.bind(this)} >
                    <option value="">Select</option>
                    {this.state.customers.map(customer=> {
                            return  <option key={customer._id} value={customer._id}>{customer.name}</option>
                    })}
                    </Select> 
                */}

               {/* <Link to="/customers/register">Add Customer</Link> */}
            </div>
        )
    }
}

export default List
import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import ListCustomer from './components/customer/List'
import NewCustomer from './components/customer/New'
import ShowCustomer from './components/customer/Show'
import EditCustomer from './components/customer/Edit'


import DepartmentList from './components/department/List'
import NewDepartment from './components/department/New'


import EmployeeList from './components/employee/List'
import NewEmployee from './components/employee/New'
import ShowEmployee from './components/employee/Show'
import TicketsList from './components/ticket/list'
import NewTicket from './components/ticket/new'
import ShowTicket from './components/ticket/show'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    {/*   <Navbar color="light" light expand="md">

                        <NavbarBrand href="/tickets">Ticket Master</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/customers">Customer</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/departments">Department</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/employees">Employee</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/tickets">Tickets</NavLink>
                            </NavItem>
                        </Nav>
        </Navbar>*/}
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/customers">customers</Link></li>
                        <li><Link to="/departments">departments</Link></li>
                        <li><Link to="/employees">employees</Link></li>
                    </ul>


                    <Switch>
                        <Route path="/customers" component={ListCustomer} exact={true} />
                        <Route path="/customers/register" component={NewCustomer} exact={true} />
                        <Route path="/customers/edit/:id" component={EditCustomer} exact={true} />
                        <Route path="/customers/:id" component={ShowCustomer} exact={true} />


                        <Route path="/departments" component={DepartmentList} exact={true} />
                        <Route path="/departments/register" component={NewDepartment} />
                        {/* <Route path="/departments/:id" component={DeleteDepartment} exact={true} /> */}
                        <Route path="/departments/:id" component={DepartmentList} exact={true} />



                        <Route path="/employees" component={EmployeeList} exact={true} />
                        <Route path="/employee/register" component={NewEmployee} />
                        <Route path="/employees/:id" component={ShowEmployee} />

                        <Route path="/tickets" component={TicketsList} exact={true} />
                        <Route path="/tickets/new" component={NewTicket} />
                        <Route path="/tickets/:id" component={ShowTicket} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import { withRouter } from "react-router";

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data});
        });
    }

    addEmployee() {
        this.props.history.push('/add-employee');
    }

    editEmployee(id) {
        this.props.history.push(`/update-employee/${id}`);
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({
                employees: this.state.employees.filter(employee => employee.id !== id)
            });
        });
    }

    viewEmployee(id) {
        this.props.history.push(`/view-employee/${id}`);
    }

    render() {
        return (
            <div className="main">
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <div className="btn btn-primary" onClick={this.addEmployee.bind(this)}>Add Employee</div>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee first name</th>
                                <th>Employee last name</th>
                                <th>Employee email id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.employees.map(
                                employee => 
                                <tr key = {employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td class="d-flex justify-content-around">
                                        <button className="btn btn-info" onClick= {() => this.editEmployee(employee.id)}>update</button>
                                        <button className="btn btn-danger" onClick= {() => this.deleteEmployee(employee.id)}>delete</button>
                                        <button className="btn btn-info" onClick= {() => this.viewEmployee(employee.id)}>view</button>
                                    </td>
                                </tr>   
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default withRouter(ListEmployeeComponent);

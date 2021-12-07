import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import { withRouter } from "react-router";

class CreateComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            emailId: '',
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId
        }
        EmployeeService.createEmployee(employee).then(res => {
            this.props.history.push('/employees');
        });
    }

    cancel = () => {
        this.props.history.push('/employees');
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }
    changeEmailIdHandler = (event) => {
        this.setState({emailId: event.target.value});
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="my-4 p-2 card col-md-6 offset-md-3">
                            <h1 className="text-center">Employee Form</h1>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <label htmlFor="firstname">first name: </label>
                                        <input className="form-control" name="firstname" placeholder="first name" value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastname">last name: </label>
                                        <input className="form-control" name="lastname" placeholder="last name" value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="emailId">first name: </label>
                                        <input className="form-control" name="emailId" placeholder="first name" value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    <button className="ml-2 btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CreateComponent);


import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class ViewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }
    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({employee: res.data});
        });
    }
    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h2 className="text-center">Employee View</h2>
                    <div className="card-body">
                        <div className="row">
                            <label>first name: </label>
                            <div>{this.state.employee.firstName}</div>
                        </div>
                        <div className="row">
                            <label>last name: </label>
                            <div>{this.state.employee.lastName}</div>
                        </div>
                        <div className="row">
                            <label>email id: </label>
                            <div>{this.state.employee.emailId}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

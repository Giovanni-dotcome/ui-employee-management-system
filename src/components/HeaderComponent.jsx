import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="navbar-brand">
                            <a className="btn btn-outline-light navbar-a" href="http://localhost:3000/employees">Employee Management Application</a>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

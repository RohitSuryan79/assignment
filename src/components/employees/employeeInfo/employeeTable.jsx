import React, {Component} from 'react';
import {Query} from "react-apollo";
import QueryAllEmployee from "../../../GraphQL/QueryAllEmployee";

class EmployeeTable extends Component {

    render() {
        return (
            <Query query={QueryAllEmployee}>
                {({error, loading, data}) => {
                    if (error) return "Error!";
                    if (loading) return "Loading!";
                    if (data) {
                        let employees = data.listEmpoyeeTables.items;
                        return (
                            <table id="employee">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile Number</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    employees.map((emp) =>
                                        <tr key={emp.id}>
                                            <td>{emp.name}</td>
                                            <td>{emp.email}</td>
                                            <td>{emp.mobile_number}</td>
                                        </tr>
                                    )
                                }
                                </tbody>
                            </table>
                        )
                    }
                }}
            </Query>

        )
    }
}


export default EmployeeTable;
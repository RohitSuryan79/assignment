import React, {Component} from 'react';
import { graphql } from "react-apollo";
import QueryAllEmployee from "../../../GraphQL/QueryAllEmployee";
import QueryGetEmployee from "../../../GraphQL/QueryGetEmployee";
import MutationCreateEmployee from "../../../GraphQL/MutationCreateEmployee";

import EmployeeNav from '../employeeNav/employeeNav';

class EmployeeFormCreate extends Component {
    static defaultProps = {
        createEmpoyeeTable: () => null,
    }

    state = {
        employee: {
            name: '',
            email: '',
            mobile_number: '',
        }
    };

    handleChange(field, { target: { value } }) {
        const { employee } = this.state;

        employee[field] = value;

        this.setState({ employee });
    }


    handleSave = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        const { createEmpoyeeTable, history } = this.props;
        const { employee } = this.state;
        await createEmpoyeeTable({input: employee });
        history.push('/');
    }

    render() {
        const { employee } = this.state;
        return (
            <div className="employee-container">
                <EmployeeNav/>
                <div className="content">
                    <div className="main-heading">
                        <h3>Add New Employee</h3>
                    </div>

                    <div className="container">
                        <form>
                            <label htmlFor="name">Name<span className="star-lablel">*</span></label>
                            <input type="text" id="name" name="name" placeholder="Your name.." value={employee.name} onChange={this.handleChange.bind(this, 'name')} required={true}/>

                            <label htmlFor="email">Email<span className="star-lablel">*</span></label>
                            <input type="email" id="email" name="email" placeholder="Your email.." value={employee.email} onChange={this.handleChange.bind(this, 'email')} required={true}/>

                            <label htmlFor="phoneNo">Mobile Number<span className="star-lablel">*</span></label>
                            <input type="number" id="phoneNo" name="phoneNo" placeholder="Your mobile no.." value={employee.mobile_number} onChange={this.handleChange.bind(this, 'mobile_number')} required={true}/>
                            <button className="submit-btn" onClick={this.handleSave}>Save</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default graphql(
    MutationCreateEmployee,
    {
        props: (props) => ({
            createEmpoyeeTable: (CreateEmpoyeeTableInput) => {
                return props.mutate({
                    update: (proxy, { data: { createEmpoyeeTable } }) => {
                        // Update QueryAllEmployee
                        const query = QueryAllEmployee;
                        const data = proxy.readQuery({ query });

                        data.listEmpoyeeTables.items = [...data.listEmpoyeeTables.items.filter(e => e.id !== createEmpoyeeTable.id), createEmpoyeeTable];

                        proxy.writeQuery({ query, data });

                        // Create cache entry for QueryGetEmployee
                        const query2 = QueryGetEmployee;
                        const variables = { id: createEmpoyeeTable.id };
                        const data2 = { getEmpoyeeTable: { ...createEmpoyeeTable } };

                        proxy.writeQuery({ query: query2, variables, data: data2 });
                    },
                    variables: CreateEmpoyeeTableInput,
                    optimisticResponse: () => ({
                        createEmpoyeeTable: {
                            ...CreateEmpoyeeTableInput, __typename: 'EmployeeTable'
                        }
                    }),
                })
            }
        })
    }
)(EmployeeFormCreate);

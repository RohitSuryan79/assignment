import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

class EmployeeNav extends Component{
    render(){
        return(
            <div className="tab hideMobile ">
                <NavLink className="tablinks" activeClassName="active" to="/"><i className="fas fa-users" aria-hidden="true"/>Employees</NavLink>

            </div>
        )
    }
}
export default EmployeeNav;
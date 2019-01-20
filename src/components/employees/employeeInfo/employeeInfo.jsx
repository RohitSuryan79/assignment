import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import EmployeeNav from '../employeeNav/employeeNav';
import EmployeeTable from './employeeTable';

class EmployeeInfo extends Component{
    render(){
        return(
            <div className="employee-container">
                <EmployeeNav/>
                <div className="content">
                   <div className="create-btn">
                       <div></div>
                       <div>
                           <Link to={'/employees/create'}>
                               <i className="fas fa-plus"></i>create
                           </Link>
                       </div>
                   </div>
                    <div>
                        <EmployeeTable/>
                    </div>
                </div>
            </div>
        )
    }
}
export default EmployeeInfo;
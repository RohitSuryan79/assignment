import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './header/header';
import EmployeeInfo from './employees/employeeInfo/employeeInfo';
import EmployeeFormCreate from './employees/employeeCreateForm/employeeCreateForm';

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={EmployeeInfo} />
            <Route exact path='/employees/create' component={EmployeeFormCreate} />
          </Switch>
        </div>
    );
  }
}

export default App;

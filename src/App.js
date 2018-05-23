import React from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import addEmployee from './components/addEmployee'
import employeeList from './components/employeeList'

class App extends React.Component {

  render() {
    return (
      <Router>
      <div className="App">     
      <h1>Home Page</h1>
      <div>
        <ul>
        <li><Link to="/addEmployee">Add Employee</Link></li>
       <li><Link to="/employeeList">Employee List</Link></li>
        </ul>
      </div>    
        <Route exact path="/" component={addEmployee}></Route>
        <Route path="/addEmployee" component={addEmployee}></Route>
        <Route path="/employeeList" component={employeeList}></Route>     
      </div>
      </Router>
    );
  }
 
}



export default App;

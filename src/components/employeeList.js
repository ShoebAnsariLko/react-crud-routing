import React from 'react'

class employeeList extends React.Component{
    
    constructor(){
        super()
        this.fetchFirst()
        this.state={
            employees:[] 
        }
    }
    render(){
        return(
            <div>
            <h1>Employee List</h1>           
            <table>
                <thead>
                    <tr>
                        <th>SR No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.employees.map((data,i)=>
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{data.firstname}</td>
                    <td>{data.lastname}</td>
                </tr>
                )}
                
                </tbody>
            </table>
            </div>
        )
    }

    fetchFirst() {
        var that = this;
          fetch('http://www.mocky.io/v2/59b994573a0000f501f7fb05').then(function (response) {
            return response.json();
          }).then(function (result) {
            console.log(result);
            that.setState({
                employees:result
            })
          });
      }
}
export default employeeList
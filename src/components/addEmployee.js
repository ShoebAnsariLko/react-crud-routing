import React, { Component } from 'react';


class addEmployee extends Component {
  constructor(props){
    super(props)
    this.state={
      Title:"This is Crud App",
      isSave:true,
      stateData:[],
      fields:{},
      errors:{}
    }
  }


  submitButton(e){
      e.preventDefault();
     if(this.handleValidation()){     
      let firstName=this.refs.firstName.value;
      let lastName=this.refs.lastName.value;
      let Data=this.state.stateData;
      let index=this.state.index
      let isSave=this.state.isSave

      let data={
        firstName,lastName
      }
      if(isSave){
      Data.push(data);
      }
      else{
        Data[index].firstName=firstName;
        Data[index].lastName=lastName;
      }
      this.setState({
        stateData:Data
      })
      this.refs.SubmitForm.reset()
      this.refs.firstName.focus()
      this.state.isSave=true;
      this.state.fields={};
     }

  }
  editButton(i){
    let data=this.state.stateData[i];
    this.refs.firstName.value=data.firstName;
    this.refs.lastName.value=data.lastName;
    this.state.index=i;
    this.state.isSave=false;

  }
  removeButton(i){
    let data=this.state.stateData;
     data.splice(i,1);
     this.setState({
      stateData:data
     })
  }

  handleChange(e,name){
    let fields=this.state.fields;
    fields[name]=e.target.value;
    this.setState({fields:fields})
    console.log(this.state)
  } 
  handleValidation(){
     let fields=this.state.fields;
     let isValid=true;
     let error={};
     console.log(fields)
     if(!fields['firstName']){
        error['firstName']="First Name can not be blank"
        isValid=false;
     }
     if(!fields['lastName']){
        error['lastName']="Last Name can not be blank"
        isValid=false;
     }
     this.setState({errors:error})
     return isValid;
  }
  render() {
    return (
      <div className="App">
     <h1>ADD EMPLOYEE</h1>
      <form ref="SubmitForm">
        <input type="text" ref="firstName" placeholder="Enter First Name" onChange={(e)=>this.handleChange(e,"firstName")}  className="formField"/>
        <span style={{color: "red"}}>{this.state.errors["firstName"]}</span><br/>
        <input type="text" ref="lastName" placeholder="Enter Your Name" onChange={(e)=>this.handleChange(e,"lastName")}   className="formField"/>
        <span style={{color: "red"}}>{this.state.errors["lastName"]}</span><br/>
        <button onClick={(e)=>{this.submitButton(e)}}>Submit</button>
      </form>
      <pre>
        <table>
          <thead>
            <tr>
              <th>S.R</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
        {this.state.stateData.map((data,i)=>
        <tr key={i}>
        <td>{i+1}</td>
        <td>{data.firstName}</td>
        <td>{data.lastName}</td>
        <td><button onClick={(e)=>{this.editButton(i)}}>Edit</button></td>
        <td><button onClick={(e)=>{this.removeButton(i)}}>Remove</button></td>
        </tr>
        )}
        </tbody>
        </table>


      </pre>
      </div>
    );
  }
}

export default addEmployee;

import React, { Component } from "react";
import Header from "./components/Header";
import Search from "./components/Search"
import Table from "./components/Table"
import employees from "./employees.json"
import "./app.css"

let employeeArray = []
console.log(employeeArray)

class App extends Component {
  state = {
    search: "",
    results: "",
    employees
  };
  
  handleInputChange = (event) => {
    const { name, value } = event.target;
    
    this.setState({
      [name]: value,
    });
  }
  
  filterEmployees = (event) => {
    const returnSearch = this.state.search
    // console.log(returnSearch)
    // let employeeArray = []
    for (let i = 0; i < this.state.employees.length; i++) {
      let element = this.state.employees[i];
      let elementName = this.state.employees[i].name
      if(elementName.charAt(0).toLocaleLowerCase() === returnSearch.charAt(0).toLocaleLowerCase() && returnSearch.length === 1){
        employeeArray.push(element)
      }
  }
    
}

componentDidMount(){
  this.filterEmployees()
}

render() {
  this.filterEmployees()
    return (
      <div>
        <Header />
        <p>{this.state.search}</p>
        <Search 
        search = {this.state.search}
        handleInputChange = {this.handleInputChange}/>
        <div className="container">
          <div className="row">
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">DOB</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employees.map(employee => (
                  <tr>
                    <Table
                      key={employee.id}
                      id={employee.id}
                      img={employee.image}
                      name={employee.name}
                      phone={employee.phone}
                      email={employee.email}
                      dob={employee.dob}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
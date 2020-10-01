import React, { Component } from "react";
import Header from "./components/Header";
import SearchName from "./components/Search"
import Table from "./components/Table"
import employees from "./employees.json"

class App extends Component {
  state = {
    employees,
    search: ""
  };

  render() {
    return (
      <div>
        <Header />
        <SearchName />
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
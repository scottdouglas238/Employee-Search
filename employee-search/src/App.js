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

  render(){
    return(
      <div>
        <table className = "table table-striped">
        <Header />
        <SearchName />
        <thread>
        <tr>
        <th scope="col">Image</th>
        <th scope="col">Name</th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
        <th scope="col">DOB</th>
        </tr>
    </thread>
        {this.state.employees.map(employee => (
          <Table 
          id={employee.id}
          img={employee.image}
          name={employee.name}
          phone={employee.phone}
          email={employee.email}
          dob={employee.dob}
          />
        ))}
        </table>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div>
//     <Header />
//     <SearchName />
//     <Table />
//     </div>
//   )

// }

export default App;
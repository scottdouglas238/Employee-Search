import React from "react";
import "../styles/Body.css";

function Body() {
    return (
        <div className = "container">
        <div className = "row searchBarRow">
        <div  className = "searchBar">
            <input placeholder = "Search" type="text" className="search">
            </input>
        </div>
        </div>
        <div >
        </div>
        <div className = "row">
{/* dis where it goes */}
<table className="table table-striped">
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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>9/10/1987</td>
    </tr>
    
    
  </tbody>
</table>
{/* dis where it goes */}
        </div>
        </div>
    )
}

export default Body;
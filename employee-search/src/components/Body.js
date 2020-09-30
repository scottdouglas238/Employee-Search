import React from "react";
import "../styles/Body.css";
const image = "https://media.phillyvoice.com/media/images/11222017_Anthony_Green.2e16d0ba.fill-735x490.jpg"


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
    <th scope="row"><img className = "personImage" src = {image}/></th>
      <td>Anthony Green</td>
      <td>555-123-1234</td>
      <td>circaSurvive@yahoo.com</td>
      <td>9/10/1985</td>
    </tr>
    
    
  </tbody>
</table>
{/* dis where it goes */}
        </div>
        </div>
    )
}

export default Body;
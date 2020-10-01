import React, { Component } from "react";
import "../styles/table.css";

function Table(props) {
    console.log(props)
    return (
        <table className="table table-striped">
            <td scope="row"><img className="personImage" alt={props.name} src={props.img} /></td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </table>
)
}

export default Table;
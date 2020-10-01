import React, { Component } from "react";
import "../styles/table.css";

function Table(props){
    console.log(props)
    return(
    <div>
    <thread>
        <tr>
        <th scope="col"><img src = {props.image}></img></th>
        <th scope="col">{props.Name}</th>
        <th scope="col">{props.Phone}</th>
        <th scope="col">{props.Email}</th>
        <th scope="col">{props.dob}</th>
        </tr>
    </thread>
</div>
)
}

export default Table;
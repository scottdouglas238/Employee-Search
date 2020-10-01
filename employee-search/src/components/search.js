import React, { Component } from "react";
import "../styles/search.css";

class SearchName extends Component {
    state = {
        search: "",
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <p>
                    {this.state.search}
                </p>
                <form className="form">
                    <input
                        className = "searchBar"
                        value={this.state.search}
                        name="search"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Search"
                    />
                </form>
            </div>
        );
    }
}


export default SearchName;
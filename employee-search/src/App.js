import React from "react";
import Header from "./components/Header";
import SearchName from "./components/Search"
import Table from "./components/Table"
import employees from "./employees.json"

function App() {
  return (
    <div>
    <Header />
    <SearchName />
    <Table />
    </div>
  )

}

export default App;
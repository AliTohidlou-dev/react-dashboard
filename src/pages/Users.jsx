import { useState } from "react";
import PaginationTable from "../utils/PaginationTable";
import { Link, useNavigate } from "react-router-dom";

function Users() {
  const navigate=useNavigate();
  const data = [
    { 
      id: 1,
      username: "one",
      email: "test@gmail.com",
    },
    {
      id: 2,
      username: "two",
      email: "test@gmail.com",
    },
    {
      id: 3,
      username: "three",
      email: "test@gmail.com",
    },
    {
      id:4,
      username: "one",
      email: "test@gmail.com",
    },
    {
      id:5,
      username: "one",
      email: "test@gmail.com",
    },
  ];
  const dataInfo = [
    { field: "username", title: "username" },
    { field: "email", title: "email" },
  ];
  const handleEdit=(id)=>{
    navigate(`/users/add-user/${id}`)
  }
  const additionalElement = (id) => {
    return (
      <>
        <i className="fa-solid fa-share-nodes"></i>
        <i className="fa-solid fa-pen-to-square" onClick={()=> handleEdit(id)}></i>
        <i className="fa-solid fa-plus"></i>
        <i className="fa-solid fa-trash"></i>
      </>
    );
  };
  const additionalField = {
    title: "Actions",
    element: (id) => additionalElement(id),
  };
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = (value) => {
    if (value) {
      setSearchInput(value);
    } else {
      setSearchInput("");
    }
  };
  return (
    <div className="edit-pages">
      <h1>Users</h1>
      <div className="header">
        <div className="search-bar">
          <label htmlFor="searchBar">Search</label>
          <input
            id="searchBar"
            name="searchBar"
            onChange={(e) => handleSearch(e.target.value)}
            value={searchInput}
          />
        </div>
        <Link to={"/users/add-user"}>
          <button className="add">+</button>
        </Link>
      </div>
      <PaginationTable
        data={data}
        dataInfo={dataInfo}
        additionalField={additionalField}
        search={searchInput}
        searchBy={"username"}
      />
    </div>
  );
}

export default Users;

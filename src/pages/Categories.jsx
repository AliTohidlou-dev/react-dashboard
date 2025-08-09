import { useState } from "react";
import PaginationTable from "../utils/PaginationTable";
import { Link } from "react-router-dom";

function Categories() {
  const data = [
    {
      id: 1,
      title: "one",
      status: "active",
    },
    {
      id: 1,
      title: "two",
      status: "active",
    },
    {
      id: 1,
      title: "three",
      status: "active",
    },
    {
      id: 1,
      title: "four",
      status: "active",
    },
    {
      id: 1,
      title: "five",
      status: "active",
    },
    {
      id: 1,
      title: "six",
      status: "active",
    },
    {
      id: 1,
      title: "a",
      status: "active",
    },
    {
      id: 1,
      title: "b",
      status: "active",
    },
  ];
  const dataInfo = [
    { field: "title", title: "Title" },
    { field: "status", title: "Status" },
  ];
  const additionalElement = () => {
    return (
      <>
        <i className="fa-solid fa-share-nodes"></i>
        <i className="fa-solid fa-pen-to-square"></i>
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
      <h1>Categories</h1>
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
        <Link to={"/categories/add-category"}>
          <button className="add">+</button>
        </Link>
      </div>

      <PaginationTable
        data={data}
        dataInfo={dataInfo}
        additionalField={additionalField}
        search={searchInput}
        searchBy={'title'}
      />
    </div>
  );
}

export default Categories;

import PaginationTable from "../components/categories/PaginationTable";
import SearchBar from "../utils/searchBar";

function Categories() {
      const data = [
    {
      title: "one",
      status: "active",
    },
    {
      title: "two",
      status: "active",
    },
    {
      title: "three",
      status: "active",
    },
    {
      title: "four",
      status: "active",
    },
    {
      title: "five",
      status: "active",
    },
    {
      title: "six",
      status: "active",
    },
    {
      title: "a",
      status: "active",
    },
    {
      title: "b",
      status: "active",
    },
  ];
  const dataInfo = [
    { field: "count", title: "#" },
    { field: "title", title: "Title" },
    { field: "status", title: "Status" },
    { field: "actions", title: "Actions" },
  ];


  return (
    <div className="edit-pages">
      <h1>Categories</h1>
      <SearchBar link={"/categories/add-category"} />
      <PaginationTable data={data} dataInfo={dataInfo}/>
    </div>
  );
}

export default Categories;

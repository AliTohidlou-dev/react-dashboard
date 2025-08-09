import ActionCategoriesComponent from "../components/categories/ActionCategoriesComponent";
import PaginationTable from "../utils/PaginationTable";
import SearchBar from "../utils/searchBar";

function Users() {
      const data = [
    {
      username: "one",
      email: "test@gmail.com",
    },
    {
      username: "one",
      email: "test@gmail.com",
    },
    {
      username: "one",
      email: "test@gmail.com",
    },
    {
      username: "one",
      email: "test@gmail.com",
    },
    {
      username: "one",
      email: "test@gmail.com",
    },
  ];
  const dataInfo = [
    { field: "username", title: "username" },
    { field: "email", title: "email" },
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


  return (
    <div className="edit-pages">
      <h1>Users</h1>
      <SearchBar link={"/users/add-user"} />
      <PaginationTable data={data} dataInfo={dataInfo} additionalField={additionalField}/>
    </div>
  );
}

export default Users;

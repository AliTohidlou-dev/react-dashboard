import CategoriesTable from "../components/categories/CategoriesTable";
import SearchBar from "../utils/searchBar";
import Pagination from "./Pagination";

function Categories() {
  return (
    <div className="edit-pages">
      <h1>Categories</h1>
      <SearchBar link={"/categories/add-category"} />
      <CategoriesTable />
      <Pagination />
    </div>
  );
}

export default Categories;

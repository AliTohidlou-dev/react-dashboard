function Categories() {
  return (
    <div className="edit-pages">
      <h1>Categories</h1>
      <div className="header">
        <div className="search-bar">
          <label htmlFor="searchBar">Search</label>
          <input id="searchBar" name="searchBar" />
        </div>
        <button className="add">+</button>
      </div>
      <div className="edit-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>test</td>
              <td>active</td>
              <td className="actions-btn">
                <i class="fa-solid fa-share-nodes"></i>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-plus"></i>
                <i class="fa-solid fa-trash"></i>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>test</td>
              <td>active</td>
              <td className="actions-btn">
                <i class="fa-solid fa-share-nodes"></i>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-plus"></i>
                <i class="fa-solid fa-trash"></i>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>test</td>
              <td>active</td>
              <td className="actions-btn">
                <i class="fa-solid fa-share-nodes"></i>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-plus"></i>
                <i class="fa-solid fa-trash"></i>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>test</td>
              <td>active</td>
              <td className="actions-btn">
                <i class="fa-solid fa-share-nodes"></i>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-plus"></i>
                <i class="fa-solid fa-trash"></i>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>test</td>
              <td>active</td>
              <td className="actions-btn">
                <i class="fa-solid fa-share-nodes"></i>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-plus"></i>
                <i class="fa-solid fa-trash"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button>
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <button>
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Categories;

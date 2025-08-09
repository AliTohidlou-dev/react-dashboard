import { useEffect } from "react";
import { useState } from "react";

function PaginationTable({ data, dataInfo, additionalField, search ,searchBy}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState(data);
  const [currentData,setCurrentData]=useState(tableData)
  const limit = 4;
  const totalPages = Math.ceil(tableData.length / limit);
    useEffect(() => {
    console.log(search);
    if (search.length >= 1) {
      setTableData(data.filter((d) => d[searchBy].includes(search)));
      setCurrentPage(1);
    }else{
      setTableData(data)
    }
  }, [search,data,searchBy]);

  useEffect(() => {
    const skip = (currentPage - 1) * limit;
    setCurrentData(tableData.slice(skip, skip + limit));
  }, [currentPage, tableData]);
  return (
    <>
      <div className="edit-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              {dataInfo?.map((info) => (
                <th key={info.field}>{info.title}</th>
              ))}
              {additionalField && <th>{additionalField.title}</th>}
            </tr>
          </thead>
          <tbody>
            {currentData?.map((d, index) => (
              <tr key={index}>
                <td>{(currentPage - 1) * limit + index + 1}</td>
                {dataInfo?.map((info) => (
                  <td key={info.field + d.title}>{d[info.field]}</td>
                ))}
                {additionalField && (
                  <td className="actions-btn">
                    {additionalField.element(d.id)}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>

        <button
          disabled={currentPage >= totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </>
  );
}

export default PaginationTable;

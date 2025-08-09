import { useEffect } from "react";
import { useState } from "react";

function PaginationTable({ data, dataInfo,additionalField }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState(data);
  const limit = 4;
  const totalPages = Math.ceil(data.length / limit);
  useEffect(() => {
    const skip = (currentPage - 1) * limit;
    setTableData(data.slice(skip, skip + limit));
  }, [currentPage, data]);

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
            {tableData?.map((d, index) => (
              <tr key={index}>
                <td>{(currentPage - 1) * limit + index + 1}</td>
                {dataInfo?.map((info) => (
                  <td key={info.field + d.title}>{d[info.field]}</td>
                ))}
                {additionalField&&<td className="actions-btn">{additionalField.element(d.id)}</td>}
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

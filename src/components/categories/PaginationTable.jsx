import { useEffect } from "react";
import { useState } from "react";

function PaginationTable({ data, dataInfo }) {
  const [currentPage,setCurrentPage]=useState(1);
  const [tableData,setTableData]=useState(data);
  const limit=4;
  const totalPages=Math.ceil(data.length/limit);
  useEffect(()=>{
    const skip=(currentPage-1)*limit;
    console.log(skip+limit);
    
    setTableData(data.slice(skip,skip+limit))
  },[currentPage,data])

  return (
    <>
      <div className="edit-table">
        <table>
          <thead>
            <tr>
              {dataInfo?.map((info) => (
                <th key={Math.random()}>{info.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData?.map((d, index) => (
              <tr key={index}>
                <td>{(currentPage-1)*limit+index+1}</td>
                <td>{d.title}</td>
                <td>{d.status}</td>
                <td className="actions-btn">
                  <i className="fa-solid fa-share-nodes"></i>
                  <i className="fa-solid fa-pen-to-square"></i>
                  <i className="fa-solid fa-plus"></i>
                  <i className="fa-solid fa-trash"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button disabled={currentPage<=1} onClick={()=>setCurrentPage((prev)=>prev-1)}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        
        <button disabled={currentPage>=totalPages} onClick={()=>setCurrentPage((prev)=>prev+1)}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
        
      </div>
    </>
  );
}

export default PaginationTable;

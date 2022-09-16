import React from 'react'
import "./Table.css"
const Table = ({data}) => {
    const x = data.length;
    const newData  = data.slice(0,x/2);
    const remainData  = data.slice(x/2);

    // console.log(data);
    return (
        <div className="container grid grid-cols-2 gap-4 mt-4 ">
          <table>
            <thead>
              <tr className="bg-darkRed" >
                <th>Region Name</th>
                <th>Super Region Name</th>
              </tr>
            </thead>
            <tbody>
              {newData.map((d,idx) => (
                <tr key={idx} className="hover:bg-darkRed " >
                  <td>
                    {d.regionName}
                  </td>
                  <td>
                    {d.superRegionName}
                   
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table>
            <thead>
              <tr className="bg-darkRed" >
                <th>Region Name</th>
                <th>Super Region Name</th>
              </tr>
            </thead>
            <tbody>
              {remainData.map((d,idx) => (
                <tr key={idx} className="hover:bg-darkRed " >
                  <td>
                    {d.regionName}
                  </td>
                  <td>
                    {d.superRegionName}
                   
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }


export default Table
  


    
  
    
  
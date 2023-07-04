import React from 'react'

const DataTable = ({data}) => {
    console.log(data)
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>SR. NO.</th>
                <th>NAME</th>
                <th>BATCH</th>
                <th>COURSE</th>
                <th>RATING</th>
                <th>STATUS</th>
            </tr>
        </thead>
        <tbody>
            {data?.map((e,i)=>{
                return (
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{e.name}</td>
                    <td>{e.batch}</td>
                    <td>{e.course}</td>
                    <td>{e.rating}</td>
                    <td>{e.status}</td>
                </tr>
            )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable

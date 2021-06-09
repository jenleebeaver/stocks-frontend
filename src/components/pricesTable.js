// https://react-table.tanstack.com/docs/quick-start
import React from 'react';
import { useTable } from 'react-table'

export default function PricesTable(props) {
    console.log( 'table', props.prices)
    
    //retrieve memoized(stores expensive function calls by returning cached results) data 
    //? can we use JSX to pass props into key value pairs?
    const data = React.useMemo( () => [props.prices], [props.prices])
    
    //set of memoized column definitions 
    const columns = React.useMemo( () => [
        {
            Header: 'Current Price',
            accessor: 'c',
        },
        {
            Header: 'Opening Price',
            accessor: 'o',
        },
        {
            Header: 'Closing Price',
            accessor: 'pc',
        },
        {
            Header: 'High Price',
            accessor: 'h',
        },
        {
            Header: 'Low Price',
            accessor: 'l',
        },
    ],
    []
    )

    //useTable hook
    const tableInstance = useTable({ columns, data })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance 

    return (
        <table className="text-center w-full border p-4 my-4" {...getTableProps()}>
            <thead>
                {/* loop over header rows */}
                {headerGroups.map(headerGroup => (
                    // apply header row props 
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {/* loop over headers in each row  */}
                        {headerGroup.headers.map(column => (
                            // apply header cell props 
                            <th {...column.getHeaderProps()}>
                                {//render header
                                column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {//loop over table rows
                rows.map(row => {
                    //display row 
                    prepareRow(row)
                    return (
                        // apply row props
                        <tr {...row.getRowProps()}>
                            {//loop over row cells
                            row.cells.map(cell => {
                                //apply cell props
                                return (
                                    <td {...cell.getCellProps()}>
                                        {//render cell content
                                        cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )

}


import './table.scss'
import { useMemo, useState } from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'
import Row from './Row'
import ChangePhrase from './ChangePhrase'

export default function Table({ phrases }) {
  const columns = useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id'
      },

      {
        Header: 'Phrase',
        accessor: 'name',
        Cell: (row) => {
          return <ChangePhrase phrase={row.row.values} />
        }
      },
      {
        Header: 'Topic',
        accessor: 'topic_id'
      },
      {
        Header: 'Action',
        Cell: (row) => {
          return <Row phrase={row.row.values} />
        }
      }
    ],
    []
  )

  const tableInstance = useTable({ columns, data: phrases }, useSortBy, usePagination)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize
  } = tableInstance
  const { pageIndex, pageSize } = state

  return (
    <>
      <table {...getTableProps()} className='table-admin'>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {
                        // Render the header
                        column.render('Header')
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>

        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            page.map((row) => {
              // Prepare the row for display
              prepareRow(row)
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render('Cell')
                          }
                        </td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
      {/* ALL THE OPTIONS START FROM HERE BELOW FOR THE PAGINATION - A LOT OF OPTIONS!! */}
      <div className='pagination'>
        <span>
          Page{''}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span>
          | Go to page:{' '}
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(pageNumber)
            }}
            style={{ width: '50px' }}
          />
        </span>
        <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {' << '}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {' >> '}
        </button>
      </div>
    </>
  )
}

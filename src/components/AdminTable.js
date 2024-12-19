import React, { useState } from 'react';
import Pagination from './CustomPagination';
import DataTable from 'react-data-table-component';
import edit from "../images/edit-2.png"
import trash from "../images/trash.png"

const customStyles = {
    rows: {
        style: {
            backgroundColor: 'white',
            textAlign: 'left',
            height: '66px', // override the row height
        },
    },
    headCells: {
        style: {
            justifyContent: 'center',
            textAlign: 'center',

            padding: '16px 24px', // override the cell padding for head cell
            color: '#121F3E',
            'WhiteSpace': 'nowrap',
            fontWeight: '600',
        },
    },
    cells: {
        style: {
            textAlign: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            overflow: "visible",
            textOverflow: "unset",
            width: '2px',
            borderBottom: '1px solid #EAEBF0',

        },
    },
    pagination: {
        style: {
            color: '#576378',
            fontSize: '13px',
            minHeight: '56px',

            borderTopStyle: 'solid',
            borderTopWidth: '1px'
        },
        pageButtonsStyle: {
            borderRadius: '50%',
            height: '40px',
            width: '40px',
            padding: '8px',
            margin: 'px',
            cursor: 'pointer',
            transition: '0.4s',
            color: '',
            fill: '',
            backgroundColor: 'transparent',
            '&:disabled': {
                cursor: 'unset',
                color: '',
                fill: '',
            },
            '&:hover:not(:disabled)': {
                backgroundColor: '',
            },
            '&:focus': {
                outline: 'none',
                backgroundColor: '',
            },
        },
    },
    headRow: {
        style: {
            height: '64px', // override the row height
        }
    },

};
const AdminTable = ({ tableData, handleDelete, toggleForm, handleEdit }) => {

    const columns = [

        {
            name: 'S/N',
            selector: row => row.sn,
            width: "70px",
            compact: true,
        },
        {
            name: 'SKU',
            selector: row => row.sku,
            grow: 1.5,
        },
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Cost Price',
            selector: row => row.costPrice,
        },
        {
            name: 'Sales Price',
            selector: row => row.salesPrice,
        },
        {
            name: 'Qty',
            selector: row => row.qty,
        },
        {
            name: "Stock Date",
            wrap: false,
            selector: row => row.stockDate,
            grow: 2,
        },
        {
            name: "Category",
            wrap: false,
            selector: row => row.category,
        },
        {
            name: 'Manage',
            selector: row => row.manage,
            sortable: false,
            cell: row => (
                <div className='flex gap-2'>
                    <button onClick={
                        () => handleEdit(row)
                    } className='text-darkBlue rounded-md'>
                        <img src={edit} alt="Edit" className='w-[16px] h-[16px]' />
                    </button>
                    <button className='py-1 px-2 text-xs text-red rounded-md'>
                        <img src={trash} alt="Delete" onClick={() => handleDelete(row.sn)} className='w-[16px] h-[16px]' />
                    </button>
                </div>
            ),
            right: true,
        }
    ];
    return (
        <div className='w-full px-8 pt-28 bg-LightGrayishBlue'>
            <div className='flex justify-between'>
                <form className='flex gap-3'>
                    <input placeholder='Search...' type='text' className='py-2.5 px-4 rounded-md w-[306px] border-[1px] border-lightgrayBlue placeholder:text-DarkGrey placeholder:text-sm'></input>
                    <button style={{ border: "0.5px solid rgba(33, 56, 153, 0.6)", boxShadow: "0px 0px 6px 0px rgba(33, 56, 153, 0.16)" }} type='submit' className='py-2 px-[30px] rounded-md text-darkBlue text-sm'>Search</button>
                </form>
                <button style={{ border: "0.5px solid rgba(33, 56, 153, 0.6)", boxShadow: "0px 0px 6px 0px rgba(33, 56, 153, 0.16)" }} type='submit' className='py-2 px-[30px] rounded-md text-darkBlue text-sm' onClick={toggleForm}>Add item</button>
            </div>
            <DataTable
                customStyles={customStyles}
                columns={columns}
                data={tableData}
                defaultSortField="sn"
                defaultSortAsc={true}
                pagination
                paginationComponent={Pagination}
                noDataComponent="No data found"
                // paginationRowsPerPageOptions={[13, 20, 27]}
                fixedHeader
                fixedFooter
                responsive={true}
                onRowClick={(row) => console.log('You clicked row:', row)}
                striped
                highlightOnHover
                persistTableHead
                dense
            // paginationComponentOptions={{
            //     rowsPerPageText: 'show',
            //     rangeSeparatorText: 'enteries per page',
            //     ofText: 'of',
            //     firstTooltip: 'First page',
            //     lastTooltip: 'Last page',
            //     nextTooltip: 'Next page',
            //     previousTooltip: 'Previous page',
            //     pageText: 'Page',
            // }}
            />
        </div>
    )
}

export default AdminTable

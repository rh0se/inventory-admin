import React from 'react'
import { useFormContext } from '../FormContext';
import DataTable from 'react-data-table-component';
import edit from "../images/edit-2.png"
import trash from "../images/trash.png"

const AdminTable = () => {
    const { showForm } = useFormContext();

    const columns = [

        {
            name: 'S/N',
            selector: row => row.sn,
        },
        {
            name: 'SKU',
            selector: row => row.sku,
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
            selector: row => row.stockDate,
        },
        {
            name: "Category",
            selector: row => row.category,
        },
        {
            name: 'Manage',
            selector: row => row.manage,
            sortable: false,
            cell: row => (
                <div className='flex gap-2'>
                    <button className='py-1 px-2 text-xs text-darkBlue rounded-md'>
                        <img src={edit} alt="Edit" className='w-[16px] h-[16px]' />
                    </button>
                    <button className='py-1 px-2 text-xs text-red rounded-md'>
                        <img src={trash} alt="Delete" className='w-[16px] h-[16px]' />
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
                <button style={{ border: "0.5px solid rgba(33, 56, 153, 0.6)", boxShadow: "0px 0px 6px 0px rgba(33, 56, 153, 0.16)" }} type='submit' className='py-2 px-[30px] rounded-md text-darkBlue text-sm' onClick={showForm}>Add item</button>
            </div>
        </div>
    )
}

export default AdminTable

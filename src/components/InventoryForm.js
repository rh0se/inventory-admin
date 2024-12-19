import { Formik, Form, useFormik } from "formik";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomUpload from "./CustomUpload";
import { inventorySchema, fileSchema } from "../schemas/InventorySchema";
import React from 'react'
import cancel from "../images/x.png"

const formSchema = inventorySchema.concat(fileSchema);

const InventoryForm = ({ setTableData, toggleForm, handleSubmit, editData }) => {

    const generateSku = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 10; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };
    return (
        <div className="fixed z-50 inset-0 flex bg-opacity-30 justify-center items-center bg-black backdrop-blur-sm">
            <div className="bg-white rounded-[10px] pb-10">
                <div className="flex justify-center">
                    <div className="w-[574px] py-[5px] px-8 flex justify-between items-center border-b-[1px] border-[#F2F4F7]">
                        <h2 className="text-darkBlue text-xs font-semibold">New inventory stock entry</h2>
                        <button type="button" onClick={toggleForm} className="w-[18px] h-[18px]"><img src={cancel} alt="cancel button" /></button>
                    </div>
                </div>
                <div className="flex justify-center items-center">

                    <Formik
                        initialValues={{
                            name: editData?.name || "",
                            qty: editData?.qty || "",
                            costPrice: editData?.costPrice || "",
                            salesPrice: editData?.salesPrice || "",
                            category: editData?.category || "",
                            file: null,
                        }}
                        validationSchema={formSchema}
                        onSubmit={(values, { resetForm }) => {
                            handleSubmit({
                                ...values,
                                costPrice: "£" + values.costPrice + ".00",
                                salesPrice: "£" + values.salesPrice + ".00",
                                stockDate: editData ? editData.stockDate : new Date().toLocaleString(),
                                sku: editData ? editData.sku : generateSku(),

                            });
                            resetForm();
                        }}
                    >
                        {({ props }) => (
                            <Form className="w-[574px] m-auto">
                                <div className="w-[510px] m-auto">
                                    <CustomInput
                                        label="Product/service name"
                                        name="name"
                                        type="text"
                                    />
                                </div>

                                <div class="grid grid-cols-3 w-[510px] gap-3 justify-between m-auto mb-2">
                                    <CustomInput
                                        label="Quantity"
                                        name="qty"
                                        type="number"
                                    />
                                    <CustomInput
                                        label="Cost price"
                                        name="costPrice"
                                        type="number"
                                    />
                                    <CustomInput
                                        label="Sales price"
                                        name="salesPrice"
                                        type="number"
                                    />
                                </div>
                                <CustomSelect
                                    label=""
                                    name="category"
                                    placeholder="Category">
                                    <option value="">Category</option>
                                    <option value="books">Books</option>
                                    <option value="food">Food</option>
                                    <option value="clothes">Clothes</option>
                                    <option value="other">Other</option>
                                </CustomSelect>
                                <CustomUpload name="file" /> {/* No need to pass value='' */}

                                <div className="flex justify-end items-center px-8 gap-[16px] mt-16">

                                    <button type="button" className="w-[114px] h-[35px] ml-2 bg-w text-[#47505B] font-medium  hover:bg-gray-400 transition-all duration-300" onClick={toggleForm}>Cancel</button>
                                    <button type="submit" className="w-[114px] h-[35px] bg-darkBlue text-white font-medium rounded-[5px] hover:bg-darkBlue-dark transition-all duration-300">Save</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div >
    )
}

export default InventoryForm

import { Formik, Form, useFormik } from "formik";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import { inventorySchema } from "../schemas/InventorySchema";
import React from 'react'

const InventoryForm = () => {
    return (
        <>
            <div className="flex justify-center items-center">
                <Formik initialValues={{
                    name: "",
                    Quantity: "",
                    costPrice: "",
                    salesPrice: "",
                }} validationSchema={inventorySchema}>
                    {({ props }) => (
                        <Form className="w-[574px]">
                            <CustomInput
                                label="Product/service name"
                                name="name"
                                type="text"
                            />
                            <div class="grid grid-cols-3 w-[510px] gap-3 justify-between mb-2">
                                <CustomInput
                                    label="Quantity"
                                    name="Quantity"
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

                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default InventoryForm

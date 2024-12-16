import { Formik, Form, useFormik } from "formik";
import CustomInput from "./CustomInput";
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
                            <div class="flex gap-3 mb-2">
                                <CustomInput
                                    className="w-[162px]"
                                    label="Quantity"
                                    name="Quantity"
                                    type="number"
                                />
                                <CustomInput
                                    className="w-[162px]"

                                    label="Cost price"
                                    name="costPrice"
                                    type="number"
                                />
                                <CustomInput
                                    className="w-[162px]"

                                    label="Sales price"
                                    name="salesPrice"
                                    type="number"
                                />
                            </div>


                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default InventoryForm

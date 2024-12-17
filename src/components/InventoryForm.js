import { Formik, Form, useFormik } from "formik";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomUpload from "./CustomUpload";
import { useFormContext } from "../FormContext";
import { inventorySchema, fileSchema } from "../schemas/InventorySchema";
import React from 'react'
import cancel from "../images/x.png"

const formSchema = inventorySchema.concat(fileSchema);

const InventoryForm = () => {
    const { isFormVisible, hideForm } = useFormContext();
    if (!isFormVisible) { return null; }

    return (
        <div className="fixed inset-0 flex bg-opacity-30 justify-center items-center backdrop-blur-sm">
            <div>
                <div className="flex justify-center">
                    <div className="w-[574px] py-[5px] px-8 flex justify-between items-center">
                        <h2 className="text-darkBlue text-xs font-semibold">New inventory stock entry</h2>
                        <button type="button" onClick={hideForm} className="w-[18px] h-[18px]"><img src={cancel} alt="cancel button" /></button>
                    </div>
                </div>
                <div className="flex justify-center items-center">

                    <Formik initialValues={{
                        name: "",
                        Quantity: "",
                        costPrice: "",
                        salesPrice: "",
                        category: "",
                        file: null,
                    }} validationSchema={formSchema}>
                        {({ props }) => (
                            <Form className="w-[574px] m-auto">
                                <CustomInput
                                    label="Product/service name"
                                    name="name"
                                    type="text"
                                />
                                <div class="grid grid-cols-3 w-[510px] gap-3 justify-between m-auto mb-2">
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
                                <CustomUpload name="file" /> {/* No need to pass value='' */}


                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default InventoryForm

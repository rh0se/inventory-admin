import * as yup from 'yup';

export const inventorySchema = yup.object().shape({
    name: yup.string().min(2).required("Required"),
    Quantity: yup.number().positive().integer().required("Required"),
    costPrice: yup.number().positive().required("Required"),
    salesPrice: yup.number().positive().integer().required("Required"),
    category: yup
        .string()
        .oneOf(["books", "food", "cloth", "other"], "Invalid Job Type")
        .required("Required"),
});

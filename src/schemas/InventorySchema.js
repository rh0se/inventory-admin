import * as yup from 'yup';

export const inventorySchema = yup.object().shape({
    name: yup.string().min(2).required("Required"),
    qty: yup.number().positive().integer().required("Required"),
    costPrice: yup.number().positive().required("Required"),
    salesPrice: yup.number().positive().integer().required("Required"),
    category: yup
        .string()
        .oneOf(["books", "food", "clothes", "other"], "Invalid Job Type")
        .required("Required"),
});

export const fileSchema = yup.object().shape({
    file: yup.mixed().nullable()
        .test('fileFormat', 'Only jpg, jpeg, png files are allowed', value => {
            if (value && value.name) { // Ensure `value` and `value.name` are defined
                const supportedFormats = ['jpg', 'jpeg', 'png'];
                const fileExtension = value.name.split('.').pop().toLowerCase();
                return supportedFormats.includes(fileExtension);
            }
            return false; // Return false if no file or invalid file object
        })
        .test('fileSize', 'File size must not be more than 15MB', value => {
            if (value && value.size) { // Ensure `value` and `value.size` are defined
                const maxSize = 15 * 1024 * 1024;  // 15MB in bytes
                return value.size <= maxSize;
            }
            return false; // Return false if no file or invalid file object
        }),
})
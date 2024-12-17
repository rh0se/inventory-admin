import React, { useState } from 'react';
import { ErrorMessage, useField, useFormikContext } from 'formik';

const CustomUpload = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const { setFieldValue } = useFormikContext();  // Get Formik's setFieldValue method
    const [fileName, setFileName] = useState('');
    const [imagePreview, setImagePreview] = useState(null); // State to store the image preview



    // Function to validate the file size
    const validateFileSize = (file) => {
        if (file && file.size > 15 * 1024 * 1024) {  // 15MB limit
            alert('File size should not exceed 15MB');
            return false;
        }
        return true;
    };

    const validateFileType = (file) => {
        // Check if the file type is allowed (only jpg, jpeg, png)
        if (file) {
            const allowedTypes = ['image/jpeg', 'image/png'];
            if (!allowedTypes.includes(file.type)) {
                alert('Only JPG, JPEG, and PNG files are allowed');
                return false;
            }
        }
        return true;
    };
    // Handle file change (triggered when user selects a file)
    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            // Perform file validation
            if (validateFileSize(file) && validateFileType(file)) {
                // Set the selected file in Formik state
                setFieldValue(field.name, file);
                setFileName(file.name); // Update state with file name to display
                // Create a preview URL for the image
                const previewUrl = URL.createObjectURL(file);
                setImagePreview(previewUrl);

            } else {
                e.target.value = null; // Reset the file input if validation fails
            }
        }
    };


    return (
        <>
            <div className="flex items-center justify-center w-full text-DarkGrey">
                <label
                    htmlFor={field.name}  // Ensure the correct id is used
                    className="flex flex-col items-center justify-center w-[510px] h-[91px] border-2 border-darkBlue border-dashed rounded-lg cursor-pointer bg-[#F4F6FF]"
                >
                    <div className="flex flex-col items-center justify-center">
                        <p className="mb-2 text-xs font-medium">
                            <span className="font-semibold text-darkBlue underline">Click to upload</span> or Drag and Drop
                        </p>
                        <p className="text-xs">Max file size: 15MB</p>
                    </div>
                    <input
                        {...props}  // Spread Formik field props
                        id={field.name}  // Ensure the input has the correct id
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}  // Handle file selection and validation
                    />
                </label>
                {/* Display the file name after a file is selected */}

            </div>
            {fileName && (
                <div className="m-auto mt-2 w-[510px] text-sm text-green-700">
                    <strong>Uploaded File:</strong> {fileName}
                </div>
            )}
            {/* Show image preview after file is selected */}
            {imagePreview && (
                <div className="flex justify-center items-end h-[154px] mt-2 w-[510px]">
                    <img src={imagePreview} alt="File Preview" className="w-[100px] h-[100px] object-cover rounded-lg" />
                </div>
            )}
            {meta.error && (
                <div className="text-red-500 text-xs mt-2">
                    <ErrorMessage name={field.name} />
                </div>
            )}

            {/* Show error message if the file input has validation errors */}

        </>
    );
};

export default CustomUpload;

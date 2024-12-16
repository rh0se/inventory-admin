import { ErrorMessage, useField } from "formik";
const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <div className="flex flex-col">
                <div className="input_box">
                    <input {...field} {...props} className={meta.touched && meta.error ? "input-error" : ""} />
                    <label>{label}</label>
                </div>
                <div className="error block"><ErrorMessage className="error text-green" name={field.name} />
                </div>
            </div>
        </>
    )
}

export default CustomInput

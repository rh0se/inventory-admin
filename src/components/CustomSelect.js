import { ErrorMessage, useField } from "formik"
const CustomSelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label>{label}</label>
            <select {...field} {...props} className={`${meta.touched && meta.error ? "input-error" : ""}border-[1px] border-[#F2F2F2] py-3 px-5 w-[510px]`} />
            <ErrorMessage name={field.name} className="" />
        </>
    )
}

export default CustomSelect

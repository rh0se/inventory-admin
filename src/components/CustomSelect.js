import { ErrorMessage, useField } from "formik"
const CustomSelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <div className="flex justify-center">
                <label></label>
                <select {...field} {...props} className={`${meta.touched && meta.error ? "input-error" : ""} border-[1px] border-[#F2F2F2] w-[510px] py-3 px-5 rounded-[10px]`} />
                <div className="error"><ErrorMessage name={field.name} /></div>
            </div>
        </>
    )
}

export default CustomSelect

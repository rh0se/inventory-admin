import { ErrorMessage, useField } from "formik";
const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <div className="flex mt-10 flex-col justify-center">
                <div class="relative">
                    <input
                        {...field}
                        {...props}
                        id={field.name}
                        class={`${meta.touched && meta.error ? "border-red-500" : ""} block w-full px-5 pt-4 pb-2 text-sm text-[#2E2F30] rounded-[10px] bg-white border-[1px] border-[#F2F2F2] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                        placeholder=" "
                    />
                    <label
                        for={field.name}
                        class="absolute left-5 top-[-1px] text-sm text-[#2E2F30] duration-300 transform origin-[0] scale-75 peer-placeholder-shown:translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[#2E2F30] peer-focus:scale-75 peer-focus:translate-y-1 peer-focus:text-DarkGrey"
                    >
                        {label}
                    </label>
                </div>




                <div className="error block"><ErrorMessage className="error text-green" name={field.name} />
                </div>

            </div>
        </>
    )
}

export default CustomInput

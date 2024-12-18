import { createContext, useState, useContext } from 'react';

const FormContext = createContext();
export const FormProvider = ({ children }) => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [formData, setFormData] = useState(null);

    const showForm = () => {
        setIsFormVisible(true);
    }
    const hideForm = () => {
        setIsFormVisible(false);
    }
    return (
        <FormContext.Provider value={{ isFormVisible, showForm, hideForm, formData, setFormData }}>
            {children}
        </FormContext.Provider>
    )

}

export const useFormContext = () => {
    return useContext(FormContext);
}


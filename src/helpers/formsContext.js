import { createContext, useState } from 'react';

export const FormContext = createContext({
    forms: []
});

const FormContextProvider = ({children}) => {
    const [forms, setForms] = useState([]);

    const addForm = async (form) => {
        setForms([...forms, form])
    }

    return (
        <FormContext.Provider value={{ forms, addForm }}>{children}
        </FormContext.Provider>
    );
};

export default FormContextProvider;

export const useContext = () => useContext(FormContext);
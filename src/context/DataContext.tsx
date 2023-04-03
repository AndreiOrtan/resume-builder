import { createContext, FC, ReactNode, useState } from "react";
import { FormData, FormPages } from "@/types";

interface IDataContext {
  updateField: (fields: {}) => void;
  data: FormData;
}
const DEFAULT_DATA = {
  lastName: "",
  firstName: "",
  university: "",
};
const defaultValues = {
  updateField: () => {},
  data: DEFAULT_DATA,
};

export const DataContext = createContext<FormPages>(defaultValues);

interface ProviderProps {
  children: ReactNode;
}
export const DataProvider: FC<ProviderProps> = ({ children }) => {
  const [data, setData] = useState<FormData>(defaultValues.data);

  function updateField(fields: Partial<FormData>) {
    setData((prevData) => {
      return { ...prevData, ...fields };
    });
  }
  const values = {
    updateField,
    data,
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

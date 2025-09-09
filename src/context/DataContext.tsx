"use client";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

export type TUser = {
  username: string;
  email: string;
  password: string;
};

type TData = {
  user: Array<TUser>;
};

type TDataContext =
  | {
      data: TData;
      setData: Dispatch<SetStateAction<TData>>;
    }
  | undefined;

const defaultValueContext: TData = {
  user: [{ username: "namtq", password: "123", email: "namtq@gmail.com" }],
};

export const DataContext = createContext<TDataContext>(undefined);

function DataContextElement(props: PropsWithChildren) {
  const [data, setData] = useState<TData>(defaultValueContext);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContextElement;

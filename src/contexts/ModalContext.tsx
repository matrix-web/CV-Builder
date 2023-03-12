import { createContext, Dispatch, SetStateAction } from "react";

export interface IModalContextValue {
  payload: any;
  workExperience: boolean;
  skills: boolean;
  about: boolean;
  project: boolean;
}

type TModalContext = 
  | [
    userValue: IModalContextValue,
    setUserValue: Dispatch<SetStateAction<IModalContextValue>>
  ] | [];

export const ModalContext = createContext<TModalContext>([]);
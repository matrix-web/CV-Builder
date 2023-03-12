import { createContext, Dispatch, SetStateAction } from "react";
import { IResumeState, ResumeActions } from "@/models";

export interface IResumeContext {
  state: IResumeState;
  dispatch: Dispatch<ResumeActions>
}

export const ResumeContext = createContext<IResumeContext>({} as IResumeContext);
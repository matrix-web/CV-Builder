import { IResumeState, ResumeActions, ResumeActionTypes } from "@/models";

export const ResumeReducer = (state: IResumeState, action: ResumeActions) => {
  switch(action.type) {
    case ResumeActionTypes.SET_ABOUT:
      return {
        ...state,
        about: {
          ...action.payload
        }
      }
    case ResumeActionTypes.SET_SKILLS:
      return {
        ...state,
        skills: [...state.skills, action.payload]
      }
    case ResumeActionTypes.SET_PROJECTS: 
      return {
        ...state,
        projects: [...state.projects, action.payload]
      }
    case ResumeActionTypes.SET_WORK_EXP:
      return {
        ...state,
        workExperience: [...state.workExperience, action.payload]
      }
    case ResumeActionTypes.REMOVE_SKILLS: 
      return {
        ...state,
        skills: [...action.payload]
      }
    case ResumeActionTypes.REMOVE_WORK_EXP: 
      return {
        ...state,
        workExperience: [...action.payload]
      }
    case ResumeActionTypes.REMOVE_PROJECT:
      return {
        ...state,
        projects: [...action.payload]
      }
    default: 
      return state;
  }
}
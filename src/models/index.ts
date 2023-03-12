
export enum ResumeActionTypes {
  SET_ABOUT = "SET_ABOUT",
  SET_SKILLS = "SET_SKILLS",
  SET_WORK_EXP = "SET_WORK_EXP",
  SET_PROJECTS = "SET_PROJECTS",
  REMOVE_WORK_EXP = "REMOVE_WORK_EXP",
  REMOVE_SKILLS = "REMOVE_SKILLS",
  REMOVE_PROJECT = "REMOVE_PROJECT"
}

export interface SetAboutAction {
  type: ResumeActionTypes.SET_ABOUT;
  payload: IAbout;
}

export interface SetSkillSAcion {
  type: ResumeActionTypes.SET_SKILLS;
  payload: ISkill;
}

export interface SetProjectsAction {
  type: ResumeActionTypes.SET_PROJECTS;
  payload: IProject;
}

export interface SetWorkExpAction {
  type: ResumeActionTypes.SET_WORK_EXP;
  payload: IWorkExp;
}

export interface RemoveSkillsAction {
  type: ResumeActionTypes.REMOVE_SKILLS;
  payload: ISkill[];
}

export interface RemoveExpAction {
  type: ResumeActionTypes.REMOVE_WORK_EXP;
  payload: IWorkExp[];
}

export interface RemoveProjectAction {
  type: ResumeActionTypes.REMOVE_PROJECT;
  payload: IProject[];
}

export interface IWorkExp {
  id: string | number;
  organization: string;
  post: string;
  period: string;
}

export interface ISkill {
  id: string | number;
  name: string;
  value: number;
}

export interface IAbout {
  firstname: string;
  lastname: string;
  address: string;
  post: string;
  phone: string;
  email: string;
  avatar?: string;
  description?: string;
  website?: string;
} 

export interface IProject {
  id: string | number;
  title: string;
  img: string;
  technologies: string[];
  description?: string;
}

export interface IResumeState {
  about: IAbout;
  workExperience: IWorkExp[];
  skills: ISkill[];
  projects: IProject[];
}

export type ResumeActions = 
  SetAboutAction | 
  SetSkillSAcion | 
  SetWorkExpAction | 
  SetProjectsAction |
  RemoveProjectAction |
  RemoveExpAction | 
  RemoveSkillsAction;
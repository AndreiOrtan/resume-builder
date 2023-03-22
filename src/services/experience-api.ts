import { IWorkExperience } from "@/types";

const FAVORITES_KEY = "WORK_EXPERIENCE";

export const getWorkExperience = () => {
  try {
    const stringifiedValue = localStorage.getItem(FAVORITES_KEY);

    if (stringifiedValue) return JSON.parse(stringifiedValue) || [];
  } catch (error) {
    return [];
  }
};

export const addWorkExperience = (items: IWorkExperience[]) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(items));
};

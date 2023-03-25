import { WorkExperience } from "@/types";

const EXPERIENCE_KEY = "WORK_EXPERIENCE";

export const getWorkExperience = () => {
  try {
    const stringifiedValue = localStorage.getItem(EXPERIENCE_KEY);
    if (stringifiedValue) return JSON.parse(stringifiedValue) || [];
  } catch (error) {
    return [];
  }
};

export const saveWorkExperience = (items: WorkExperience[]) => {
  localStorage.setItem(EXPERIENCE_KEY, JSON.stringify(items));
};

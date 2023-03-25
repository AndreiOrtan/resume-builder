import {
  saveWorkExperience,
  getWorkExperience,
} from "@/services/experience-api";
import { IWorkExperience } from "@/types";
import { useState } from "react";

interface IUseWorkExperience {
  id: string;
  company: string;
  jobTitle: string;
}

export default function useWorkExperience() {
  const [workExperience, setWorkExperience] = useState<IUseWorkExperience[]>(
    getWorkExperience()
  );

  function addExperience(fields: IWorkExperience) {
    setWorkExperience((prevExperience) => {
      const objToPush = {
        id: `${Date.now()}`,
        ...fields,
      };
      if (!prevExperience) {
        saveWorkExperience([objToPush]);
        return [objToPush];
      }
      const newExperiences = [...prevExperience, objToPush];
      saveWorkExperience(newExperiences);
      return newExperiences;
    });
  }

  function deleteExperience(id: string) {
    const newExperiences = workExperience.filter((experience) => {
      return experience.id !== id;
    });
    saveWorkExperience(newExperiences);
    setWorkExperience(newExperiences);
  }
  function updateExperience(field: Partial<IUseWorkExperience>, ind: number) {
    const updatedExperiences = workExperience.map((exp, i) => {
      if (ind === i) {
        return { ...exp, ...field };
      } else {
        return exp;
      }
    });
    saveWorkExperience(updatedExperiences);
    setWorkExperience(updatedExperiences);
  }

  return { addExperience, workExperience, deleteExperience, updateExperience };
}

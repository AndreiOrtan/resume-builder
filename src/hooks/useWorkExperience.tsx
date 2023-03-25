import {
  saveWorkExperience,
  getWorkExperience,
} from "@/services/experience-api";
import { WorkExperience, ExperienceFields } from "@/types";
import { useEffect, useState } from "react";

export default function useWorkExperience() {
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>(
    getWorkExperience()
  );
  console.log("ran?");
  console.log(workExperiences, getWorkExperience());

  function addExperience(fields: ExperienceFields) {
    setWorkExperiences((prevExperience) => {
      const objToPush = {
        id: `${Date.now()}`,
        ...fields,
      };
      if (!prevExperience) {
        saveWorkExperience([objToPush]);
        return [objToPush];
      }
      console.log("ran ddddd");
      const newExperiences = [...prevExperience, objToPush];
      saveWorkExperience(newExperiences);
      return newExperiences;
    });
  }

  function deleteExperience(id: string) {
    const newExperiences = workExperiences.filter((experience) => {
      return experience.id !== id;
    });

    saveWorkExperience(newExperiences);
    setWorkExperiences(newExperiences);
  }
  function updateExperience(field: Partial<WorkExperience>, ind: number) {
    const updatedExperiences = workExperiences.map((exp, i) => {
      if (ind === i) {
        return { ...exp, ...field };
      } else {
        return exp;
      }
    });
    saveWorkExperience(updatedExperiences);
    setWorkExperiences(updatedExperiences);
  }

  return { addExperience, workExperiences, deleteExperience, updateExperience };
}

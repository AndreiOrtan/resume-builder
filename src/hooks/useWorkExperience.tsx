import {
  addWorkExperience,
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
        id: `${Math.random()}`,
        ...fields,
      };
      if (!prevExperience) {
        addWorkExperience([objToPush]);
        return [objToPush];
      }
      const newExperience = [...prevExperience, objToPush];
      addWorkExperience(newExperience);
      return newExperience;
    });
  }

  return { addExperience, workExperience };
}

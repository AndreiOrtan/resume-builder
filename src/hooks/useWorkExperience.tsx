import {
  addWorkExperience,
  getWorkExperience,
} from "@/services/experience-api";
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

  function addExperience() {
    setWorkExperience((prevExperience) => {
      const objToPush = { id: `${Math.random()}`, company: "", jobTitle: "" };
      if (!prevExperience) return [objToPush];
      const newExperience = [...prevExperience, objToPush];
      addWorkExperience(newExperience);
      return newExperience;
    });
  }

  return { addExperience, workExperience };
}

const test = [{ asd1: 2 }, { asd2: 3 }];

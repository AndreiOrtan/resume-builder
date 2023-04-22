import { Dayjs } from "dayjs";

export interface ExperienceFields {
  jobTitle: string;
  company: string;
  date: Dayjs | null;
}

export interface FormData {
  fullName: string;
  profession: string;
  university: string;
  city: string;
  country: string;
  email: string;
  phone: string;
  description: string;
}

export interface FormPages {
  updateField: (field: Partial<FormData>) => void;
  data: FormData;
}

export interface WorkExperience {
  id: string;
  company: string;
  jobTitle: string;
  date: Dayjs | null;
}

export interface WorkExperienceComponent {
  workExperiences: WorkExperience[];
  deleteExperience: (id: string) => void;
  addExperience: (fields: ExperienceFields) => void;
  updateExperience: (field: Partial<WorkExperience>, ind: number) => void;
}

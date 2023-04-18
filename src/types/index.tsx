export interface ExperienceFields {
  jobTitle: string;
  company: string;
}

export interface FormData {
  fullName: string;
  profession: string;
  university: string;
  city: string;
  country: string;
  email: string;
  phone: string;
}

export interface FormPages {
  updateField: (field: Partial<FormData>) => void;
  data: FormData;
}

export interface WorkExperience {
  id: string;
  company: string;
  jobTitle: string;
}

export interface WorkExperienceComponent {
  workExperiences: WorkExperience[];
  deleteExperience: (id: string) => void;
  addExperience: (fields: ExperienceFields) => void;
  updateExperience: (field: Partial<WorkExperience>, ind: number) => void;
}

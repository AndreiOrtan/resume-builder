export interface IWorkExperience {
  jobTitle: string;
  company: string;
}

export interface FormData {
  lastName: string;
  firstName: string;
  university: string;
  workExperience: IWorkExperience[];
}

export interface FormPages {
  updateField: (field: Partial<FormData>) => void;
  data: FormData;
}

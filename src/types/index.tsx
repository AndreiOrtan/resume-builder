export interface FormData {
  lastName: string;
  firstName: string;
  university: string;
  address: string;
  jobTitle: string;
}

export interface FormPages {
  updateField: (field: Partial<FormData>) => void;
}

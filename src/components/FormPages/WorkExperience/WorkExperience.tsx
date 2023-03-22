import { FormPages, FormData, IWorkExperience } from "@/types";
import { TextField } from "@mui/material";

export default function WorkExperience({ data, updateField }: FormPages) {
  const { workExperience } = data;

  return (
    <div className="inputs-container">
      {workExperience.map((experience, i) => {
        return (
          <div key={i}>
            <TextField
              label="Company"
              variant="outlined"
              value={experience.company}
              onChange={(e) =>
                updateField({
                  workExperience: workExperience.map((expr) => {
                    return { ...expr, company: e.target.value };
                  }),
                })
              }
            />
            <TextField
              label="Job Title"
              value={experience.jobTitle}
              onChange={(e) =>
                updateField({
                  workExperience: workExperience.map((expr) => {
                    return { ...expr, jobTitle: e.target.value };
                  }),
                })
              }
            />
          </div>
        );
      })}
    </div>
  );
}

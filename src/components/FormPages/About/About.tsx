import { TextField } from "@mui/material";
import { FormPages } from "@/types";
import FormLayout from "@/components/Layouts/FormLayout";

export default function About({ data, updateField }: FormPages) {
  return (
    <FormLayout>
      <div className="about">
        <TextField
          label="Summary"
          variant="outlined"
          placeholder="Write a brief summary of your professional experience, skills, and qualifications. Use concise language to highlight your strengths and achievements. Mention any relevant experience, education, or certifications that make you a strong candidate for the job. You can also include a brief statement about your career goals or aspirations."
          value={data.description}
          onChange={(e) => updateField({ description: e.target.value })}
          sx={{ width: "100%", mb: 2 }}
          inputProps={{ style: { fontSize: 12 } }}
          multiline
          rows={4}
        />
        <TextField
          label="Profession"
          variant="outlined"
          placeholder="e.g. Programmer"
          value={data.profession}
          onChange={(e) => updateField({ profession: e.target.value })}
          sx={{ width: "100%", mb: 2 }}
        />
      </div>
    </FormLayout>
  );
}

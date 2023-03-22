import { FormPages, FormData } from "@/types";
import { TextField } from "@mui/material";
export default function Education({ updateField, data }: FormPages) {
  return (
    <div className="inputs-container">
      <TextField
        label="University"
        variant="outlined"
        value={data.university}
        onChange={(e) => updateField({ university: e.target.value })}
      />
    </div>
  );
}

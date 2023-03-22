import { FormPages, FormData } from "@/types";
import { TextField } from "@mui/material";

export default function ContactForm({ updateField, data }: FormPages) {
  return (
    <div className="inputs-container">
      <TextField
        label="First Name"
        variant="outlined"
        value={data.firstName}
        onChange={(e) => updateField({ firstName: e.target.value })}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        value={data.lastName}
        onChange={(e) => updateField({ lastName: e.target.value })}
      />
    </div>
  );
}

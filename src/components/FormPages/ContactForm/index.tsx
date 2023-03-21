import { FormPages, FormData } from "@/types";
import { TextField } from "@mui/material";

export default function ContactForm({
  updateField,
  firstName,
  lastName,
}: FormPages & FormData) {
  return (
    <div className="inputs-container">
      <TextField
        label="First Name"
        variant="outlined"
        value={firstName}
        onChange={(e) => updateField({ firstName: e.target.value })}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        value={lastName}
        onChange={(e) => updateField({ lastName: e.target.value })}
      />
    </div>
  );
}

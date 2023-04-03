import { FormPages, FormData } from "@/types";
import { TextField } from "@mui/material";
import styles from "./ContactForm.module.css";

export default function ContactForm({ updateField, data }: FormPages) {
  return (
    <div className={styles.contactForm}>
      <TextField
        label="First Name"
        variant="outlined"
        value={data.firstName}
        onChange={(e) => updateField({ firstName: e.target.value })}
        sx={{ width: "100%", mb: 2 }}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        value={data.lastName}
        onChange={(e) => updateField({ lastName: e.target.value })}
        sx={{ width: "100%" }}
      />
    </div>
  );
}

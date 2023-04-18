import { FormPages, FormData } from "@/types";
import { TextField } from "@mui/material";
import styles from "./ContactForm.module.css";

export default function ContactForm({ updateField, data }: FormPages) {
  return (
    <div className={styles.contactForm}>
      <TextField
        label="Name"
        variant="outlined"
        placeholder="e.g. John Doe"
        value={data.fullName}
        onChange={(e) => updateField({ fullName: e.target.value })}
        sx={{ width: "100%", mb: 2 }}
        required
      />
      <TextField
        label="Profession"
        variant="outlined"
        placeholder="e.g. Programmer"
        value={data.profession}
        onChange={(e) => updateField({ profession: e.target.value })}
        sx={{ width: "100%", mb: 2 }}
      />
      <div className={styles.area}>
        <TextField
          label="City"
          variant="outlined"
          placeholder="e.g. Cluj-Napoca"
          onChange={(e) => updateField({ city: e.target.value })}
          value={data.city}
        />
        <TextField
          label="Country"
          variant="outlined"
          placeholder="e.g. Romania"
          onChange={(e) => updateField({ country: e.target.value })}
          value={data.country}
          sx={{ ml: 1 }}
        />
      </div>
      <div className={styles.area}>
        <TextField
          label="Phone"
          variant="outlined"
          placeholder="e.g. 070000000"
          onChange={(e) => updateField({ phone: e.target.value })}
          value={data.phone}
        />
        <TextField
          label="Email"
          variant="outlined"
          placeholder="e.g. name@example.com"
          onChange={(e) => updateField({ email: e.target.value })}
          value={data.email}
          sx={{ ml: 1 }}
          required
        />
      </div>
    </div>
  );
}
